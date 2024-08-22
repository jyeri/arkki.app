export interface Player {
    firstName: string;
    lastName: string;
    number: number;
    position: string;
}

export interface Formation {
    attack: number;
    mid: number;
    def: number;
    gk: number;
}

export type PlayerListKey = 'attack' | 'mid' | 'def' | 'gk' | 'substitutes' | 'reserves';