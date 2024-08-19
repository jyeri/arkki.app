import { useState, useEffect } from 'react';

export const useSquadBuilder = (formation: string) => {
    const [attack, setAttack] = useState<string[]>(['Player1', 'Player2', 'Player3']);
    const [mid, setMid] = useState<string[]>(['Player4', 'Player5', 'Player6']);
    const [def, setDef] = useState<string[]>(['Player7', 'Player8', 'Player9', 'Player10']);
    const [gk, setGk] = useState<string[]>(['Player11']);

    useEffect(() => {
        console.log(`Formation changed to: ${formation}`);
        // Update the state based on the formation
        switch (formation) {
            case '4-4-2':
                setAttack(['Player1', 'Player2']);
                setMid(['Player3', 'Player4', 'Player5', 'Player6']);
                setDef(['Player7', 'Player8', 'Player9', 'Player10']);
                setGk(['Player11']);
                break;
            case '3-5-2':
                setAttack(['Player1', 'Player2']);
                setMid(['Player3', 'Player4', 'Player5', 'Player6', 'Player7']);
                setDef(['Player8', 'Player9', 'Player10']);
                setGk(['Player11']);
                break;
            // Add more formations as needed
            default:
                setAttack(['Player1', 'Player2', 'Player3']);
                setMid(['Player4', 'Player5', 'Player6']);
                setDef(['Player7', 'Player8', 'Player9', 'Player10']);
                setGk(['Player11']);
                break;
        }
    }, [formation]);

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
            default:
                return [];
        }
    };
    
    const setListById = (id: string, list: string[]) => {
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
            default:
                break;
        }
    };

    return { attack, mid, def, gk, updatePlayerPosition };
};