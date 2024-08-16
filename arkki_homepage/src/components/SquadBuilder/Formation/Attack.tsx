import React from 'react';
import './Formation.style.scss';

interface AttackProps {
    attack: string[];
}

export const Attack: React.FC<AttackProps> = ({ attack = [] }) => {
    return (
        <div className='Formation__line'>
            {attack.map((player, index) => (
                <div className='player' key={index}>
                    {player}
                </div>
            ))}
        </div>
    );
};