import React from 'react';
import './Formation.style.scss';

interface MidProps {
    mid: string[];
}

export const Mid: React.FC<MidProps> = ({ mid }) => {
    return (
        <div className='Formation__line'>
            {mid.map((player, index) => (
                <div key={index} style={{ width: '70px', height: '100px', backgroundColor: 'black', margin: '40px' }}>
                    {player}
                </div>
            ))}
        </div>
    );
};