import axios from 'axios';

export const fetchPlayers = async () => {
    try {
        const response = await axios.get('http://localhost:5001/players');
        return response.data;
    } catch (error) {
        console.error('Error fetching players:', error);
        return [];
    }
};