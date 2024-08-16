import React from 'react';
import './Formation.style.scss';

interface GKProps {
    gk: string[];
}

export const GK: React.FC<GKProps> = ({ gk }) => {
    return (
        <div className='Formation__line'>
            {gk.map((player, index) => (
                <div key={index} style={{ width: '70px', height: '100px', backgroundColor: 'black', margin: '40px' }}>
                    {player}
                </div>
            ))}
        </div>
    );
};