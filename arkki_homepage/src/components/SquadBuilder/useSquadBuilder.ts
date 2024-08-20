import { useState, useEffect } from 'react';
import axios from 'axios';

interface Player {
    firstName: string;
    lastName: string;
    number: number;
    position: string;
}

export const useSquadBuilder = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [attack, setAttack] = useState<Player[]>([]);
    const [mid, setMid] = useState<Player[]>([]);
    const [def, setDef] = useState<Player[]>([]);
    const [gk, setGk] = useState<Player[]>([]);
    const [substitutes, setSubstitutes] = useState<Player[]>([]);
    const [reserves, setReserves] = useState<Player[]>([]);
    const [filteredSubstitutes, setFilteredSubstitutes] = useState<Player[]>([]);
    const [filteredReserves, setFilteredReserves] = useState<Player[]>([]);
    const [selectedOption, setSelectedOption] = useState('Select Formation');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubstitutesOpen, setIsSubstitutesOpen] = useState(false);
    const [isReservesOpen, setIsReservesOpen] = useState(false);
    const [substitutesFilter, setSubstitutesFilter] = useState('all');
    const [reservesFilter, setReservesFilter] = useState('all');
    const [isSubstitutesFilterDropdownOpen, setIsSubstitutesFilterDropdownOpen] = useState(false);
    const [isReservesFilterDropdownOpen, setIsReservesFilterDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:5001/players');
                setPlayers(response.data);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchPlayers();
    }, []);

    useEffect(() => {
        console.log(`Formation changed to: ${selectedOption}`);
        
        // Create a set to keep track of assigned players
        const assignedPlayers = new Set<number>();

        // Filter players based on their positions and ensure uniqueness
        const filterAndAssignPlayers = (position: string, count: number) => {
            const filteredPlayers = players.filter(player => player.position === position && !assignedPlayers.has(player.number));
            const assigned = filteredPlayers.slice(0, count);
            assigned.forEach(player => assignedPlayers.add(player.number));
            return assigned;
        };

        // Update the state based on the formation
        switch (selectedOption) {
            case '4-4-2':
                setAttack(filterAndAssignPlayers('attack', 2));
                setMid(filterAndAssignPlayers('mid', 4));
                setDef(filterAndAssignPlayers('def', 4));
                setGk(filterAndAssignPlayers('GK', 1));
                break;
            case '3-5-2':
                setAttack(filterAndAssignPlayers('attack', 2));
                setMid(filterAndAssignPlayers('mid', 5));
                setDef(filterAndAssignPlayers('def', 3));
                setGk(filterAndAssignPlayers('GK', 1));
                break;
            case '4-3-3':
                setAttack(filterAndAssignPlayers('attack', 3));
                setMid(filterAndAssignPlayers('mid', 3));
                setDef(filterAndAssignPlayers('def', 4));
                setGk(filterAndAssignPlayers('GK', 1));
                break;
            default:
                setAttack(filterAndAssignPlayers('attack', 3));
                setMid(filterAndAssignPlayers('mid', 3));
                setDef(filterAndAssignPlayers('def', 4));
                setGk(filterAndAssignPlayers('GK', 1));
                break;
        }

        // Assign substitutes and reserves
        const remainingPlayers = players.filter(player => !assignedPlayers.has(player.number));
        setSubstitutes(remainingPlayers.slice(0, 7));
        setReserves(remainingPlayers.slice(7));

        // Initialize filtered lists
        setFilteredSubstitutes(remainingPlayers.slice(0, 7));
        setFilteredReserves(remainingPlayers.slice(7));

    }, [selectedOption, players]);

    const updatePlayerPosition = (sourceIndex: number, destinationIndex: number, sourceDroppableId: string, destinationDroppableId: string) => {
        const sourceList = [...getListById(sourceDroppableId)];
        const destinationList = [...getListById(destinationDroppableId)];
    
        if (sourceDroppableId === destinationDroppableId) {
            // Swap within the same list
            const temp = sourceList[sourceIndex];
            sourceList[sourceIndex] = sourceList[destinationIndex];
            sourceList[destinationIndex] = temp;
            console.log(`Swapped player: ${sourceList[sourceIndex]} with player: ${sourceList[destinationIndex]} within ${sourceDroppableId}`);
            setListById(sourceDroppableId, sourceList);
        } else {
            // Swap between different lists
            const [sourcePlayer] = sourceList.splice(sourceIndex, 1);
            const [destinationPlayer] = destinationList.splice(destinationIndex, 1, sourcePlayer);
            console.log(`Moved player: ${sourcePlayer} from ${sourceDroppableId} to ${destinationDroppableId}`);
            console.log(`Swapped with player: ${destinationPlayer}`);
            sourceList.splice(sourceIndex, 0, destinationPlayer);
            setListById(sourceDroppableId, sourceList);
            setListById(destinationDroppableId, destinationList);
        }
    };

    const getListById = (id: string) => {
        switch (id) {
            case 'attack':
                return attack;
            case 'mid':
                return mid;
            case 'def':
                return def;
            case 'gk':
                return gk;
            case 'substitutes':
                return substitutes;
            case 'reserves':
                return reserves;
            default:
                return [];
        }
    };
    
    const setListById = (id: string, list: Player[]) => {
        switch (id) {
            case 'attack':
                setAttack(list);
                break;
            case 'mid':
                setMid(list);
                break;
            case 'def':
                setDef(list);
                break;
            case 'gk':
                setGk(list);
                break;
            case 'substitutes':
                setSubstitutes(list);
                break;
            case 'reserves':
                setReserves(list);
                break;
            default:
                break;
        }
    };

    const filterPlayersByPosition = (position: string, listType: string) => {
        const list = listType === 'substitutes' ? substitutes : reserves;
        let filteredList;
    
        if (position === 'all') {
            filteredList = list;
        } else {
            filteredList = list.filter(player => player.position === position);
        }
    
        if (listType === 'substitutes') {
            setFilteredSubstitutes(filteredList);
        } else {
            setFilteredReserves(filteredList);
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const toggleSubstitutesFilterDropdown = () => {
        setIsSubstitutesFilterDropdownOpen(!isSubstitutesFilterDropdownOpen);
    };

    const toggleReservesFilterDropdown = () => {
        setIsReservesFilterDropdownOpen(!isReservesFilterDropdownOpen);
    };

    const handleSubstitutesFilterOptionClick = (position: string) => {
        setSubstitutesFilter(position);
        filterPlayersByPosition(position, 'substitutes');
        setIsSubstitutesFilterDropdownOpen(false);
    };

    const handleReservesFilterOptionClick = (position: string) => {
        setReservesFilter(position);
        filterPlayersByPosition(position, 'reserves');
        setIsReservesFilterDropdownOpen(false);
    };

    return {
        attack,
        mid,
        def,
        gk,
        substitutes,
        reserves,
        filteredSubstitutes,
        filteredReserves,
        updatePlayerPosition,
        filterPlayersByPosition,
        selectedOption,
        isDropdownOpen,
        isSubstitutesOpen,
        isReservesOpen,
        substitutesFilter,
        reservesFilter,
        isSubstitutesFilterDropdownOpen,
        isReservesFilterDropdownOpen,
        toggleDropdown,
        handleOptionClick,
        toggleSubstitutesFilterDropdown,
        toggleReservesFilterDropdown,
        handleSubstitutesFilterOptionClick,
        handleReservesFilterOptionClick,
        setIsSubstitutesOpen,
        setIsReservesOpen
    };
};