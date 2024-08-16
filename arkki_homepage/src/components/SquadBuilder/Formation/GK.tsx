import React from 'react';
import './Formation.style.scss';

interface GkProps {
    GK: string[];
}

export const GK: React.FC<GkProps> = ({ GK = [] }) => {
    return (
        <div className='Formation__line'>
            {GK.map((player, index) => (
                <div className='player' key={index}>
                    {player}
                </div>
            ))}
        </div>
    );
};