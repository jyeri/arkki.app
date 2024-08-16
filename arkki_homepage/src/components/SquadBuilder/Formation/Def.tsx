import React from 'react';
import './Formation.style.scss';

interface DefProps {
    Def: string[];
}

export const Def: React.FC<DefProps> = ({ Def = [] }) => {
    return (
        <div className='Formation__line'>
            {Def.map((player, index) => (
                <div className='player' key={index}>
                    {player}
                </div>
            ))}
        </div>
    );
};