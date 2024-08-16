import React from 'react';
import './Formation.style.scss';

interface DefProps {
    def: string[];
}

export const Def: React.FC<DefProps> = ({ def }) => {
    return (
        <div className='Formation__line'>
            {def.map((player, index) => (
                <div key={index} style={{ width: '70px', height: '100px', backgroundColor: 'black', margin: '40px' }}>
                    {player}
                </div>
            ))}
        </div>
    );
};