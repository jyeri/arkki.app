import React from 'react';
import './Formation.style.scss';

interface AttackProps {
    attack: string[];
}

export const Attack: React.FC<AttackProps> = ({ attack = [] }) => {
    return (
        <div className='Formation__line'>
            {attack.map((player, index) => (
                <div key={index} style={{ width: '70px', height: '100px', backgroundColor: 'black', margin: '80px' }}>
                    {player}
                </div>
            ))}
        </div>
    );
};