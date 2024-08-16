import React from 'react';
import './Formation.style.scss';

interface MidProps {
    Mid: string[];
}

export const Mid: React.FC<MidProps> = ({ Mid = [] }) => {
    return (
        <div className='Formation__line'>
            {Mid.map((player, index) => (
                <div className='player' key={index}>
                    {player}
                </div>
            ))}
        </div>
    );
};