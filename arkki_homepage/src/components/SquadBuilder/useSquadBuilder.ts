import { useState, useEffect } from 'react';

export const useSquadBuilder = (formation: string) => {
    type Player = string;

    const [attack, setAttack] = useState<Player[]>([]);
    const [mid, setMid] = useState<Player[]>([]);
    const [def, setDef] = useState<Player[]>([]);
    const [gk, setGk] = useState<Player[]>([]);

    useEffect(() => {
        // Logic to set positions based on the selected formation
        if (formation === "4-4-2") {
            setAttack(["Player1", "Player2"]);
            setMid(["Player3", "Player4", "Player5", "Player6"]);
            setDef(["Player7", "Player8", "Player9", "Player10"]);
            setGk(["Player11"]);
        } else if (formation === "4-3-3") {
            setAttack(["Player1", "Player2", "Player3"]);
            setMid(["Player4", "Player5", "Player6"]);
            setDef(["Player7", "Player8", "Player9", "Player10"]);
            setGk(["Player11"]);
        } else if (formation === "3-5-2") {
            setAttack(["Player1", "Player2"]);
            setMid(["Player3", "Player4", "Player5", "Player6", "Player7"]);
            setDef(["Player8", "Player9", "Player10"]);
            setGk(["Player11"],);
        }
    }, [formation]);

    return { attack, mid, def, gk };
};