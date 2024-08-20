import axios from 'axios';
import { Player } from '../Interfaces/player';

export const fetchPlayers = async (): Promise<Player[]> => {
    try {
        const response = await axios.get('http://localhost:5001/players');
        return response.data;
    } catch (error) {
        console.error('Error fetching players:', error);
        return [];
    }
};