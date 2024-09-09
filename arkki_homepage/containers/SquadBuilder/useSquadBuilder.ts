import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { fetchPlayers } from '../../queries/fetchPlayers';
import { Player, Formation, PlayerListKey } from '../../interfaces/types';
import { DropResult } from '@hello-pangea/dnd';

const formations: { [key: string]: Formation } = {
  '4-4-2': { attack: 2, mid: 4, def: 4, gk: 1 },
  '3-5-2': { attack: 2, mid: 5, def: 3, gk: 1 },
  '4-3-3': { attack: 3, mid: 3, def: 4, gk: 1 },
  'default': { attack: 3, mid: 3, def: 4, gk: 1 }
};

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

  useEffect(() => {
    initializePlayers();
  }, []);

  useEffect(() => {
    assignPlayersToPositions();
  }, [selectedOption, players]);

  const initializePlayers = async () => {
    const fetchedPlayers = await fetchPlayers();
    setPlayers(fetchedPlayers);
  };

  const assignPlayersToPositions = () => {
    const assignedPlayers = new Set<number>();

    const filterAndAssignPlayers = (position: string, count: number) => {
      const filteredPlayers = players.filter(player => player.position === position && !assignedPlayers.has(player.number));
      const assigned = filteredPlayers.slice(0, count);
      assigned.forEach(player => assignedPlayers.add(player.number));
      return assigned;
    };

    const formation = formations[selectedOption] || formations['default'];
    setAttack(filterAndAssignPlayers('attack', formation.attack));
    setMid(filterAndAssignPlayers('mid', formation.mid));
    setDef(filterAndAssignPlayers('def', formation.def));
    setGk(filterAndAssignPlayers('GK', formation.gk));

    const remainingPlayers = players.filter(player => !assignedPlayers.has(player.number));
    setSubstitutes(remainingPlayers.slice(0, 7));
    setReserves(remainingPlayers.slice(7));
    setFilteredSubstitutes(remainingPlayers.slice(0, 7));
    setFilteredReserves(remainingPlayers.slice(7));
  };

  const updatePlayerPosition = (
    sourceIndex: number,
    destinationIndex: number,
    sourceDroppableId: PlayerListKey,
    destinationDroppableId: PlayerListKey
  ) => {
    const sourceList = [...getListById(sourceDroppableId)];
    const destinationList = [...getListById(destinationDroppableId)];

    if (sourceDroppableId === destinationDroppableId) {
      [sourceList[sourceIndex], sourceList[destinationIndex]] = [sourceList[destinationIndex], sourceList[sourceIndex]];
      setListById(sourceDroppableId, sourceList);
    } else {
      const [sourcePlayer] = sourceList.splice(sourceIndex, 1);
      const [destinationPlayer] = destinationList.splice(destinationIndex, 1, sourcePlayer);
      sourceList.splice(sourceIndex, 0, destinationPlayer);
      setListById(sourceDroppableId, sourceList);
      setListById(destinationDroppableId, destinationList);
    }
    setFilteredSubstitutes(substitutes);
    setFilteredReserves(reserves);
  };

  const getListById = (id: PlayerListKey): Player[] => {
    const lists: { [key in PlayerListKey]: Player[] } = { attack, mid, def, gk, substitutes, reserves };
    return lists[id];
  };

  const setListById = (id: PlayerListKey, list: Player[]) => {
    const setters: { [key in PlayerListKey]: Dispatch<SetStateAction<Player[]>> } = {
      attack: setAttack,
      mid: setMid,
      def: setDef,
      gk: setGk,
      substitutes: setSubstitutes,
      reserves: setReserves
    };
    setters[id](list);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const [sourceDroppableId, sourceIndex] = source.droppableId.split('-');
    const [destinationDroppableId, destinationIndex] = destination.droppableId.split('-');

    updatePlayerPosition(
      parseInt(sourceIndex),
      parseInt(destinationIndex),
      sourceDroppableId as PlayerListKey,
      destinationDroppableId as PlayerListKey
    );
  };

  const handleDropdownClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return {
    attack,
    mid,
    def,
    gk,
    filteredSubstitutes,
    filteredReserves,
    selectedOption,
    isDropdownOpen,
    setIsDropdownOpen,
    onDragEnd,
    handleDropdownClick
  };
};