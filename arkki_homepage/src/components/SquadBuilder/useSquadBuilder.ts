import { Squad } from '../Tools/Interfaces'
import { useEffect, useState, ChangeEvent } from 'react';

export const useSquadBuilder = () => {
    const [selectedOption, setSelectedOption] = useState('SquadBuilder'); // default value
    const [Squad, setSquad] = useState<Squad>({ attack: 0, mid: 0, def: 0, gk: 1 });

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    }

    useEffect(() => {
        // Perform operation based on selectedOption
        if (selectedOption === '442') {
            setSquad({ attack: 2, mid: 4, def: 4, gk: 1 });
            console.log("442 SET");
        }
        else if (selectedOption === '352') {
            setSquad({ attack: 2, mid: 5, def: 3, gk: 1 });
            console.log("352 SET");
        }
        else if (selectedOption === '451') {
            setSquad({ attack: 1, mid: 5, def: 4, gk: 1 });
            console.log("451 SET");
        }
    }, [selectedOption]);

    if (Squad.attack + Squad.mid + Squad.def + Squad.gk !== 11) {
        console.log("Invalid squad");
    }

    return { Squad, selectedOption, handleSelectChange };
}