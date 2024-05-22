import React from 'react';
import './Formation.style.scss';

interface AttackProps {
    attack: number;
}

export const Attack: React.FC<AttackProps> = ({ attack }) => {
    const attackArray = Array.from({ length: attack }, (_, index) => index);

    return (
        <div className='Formation__line'>
            {attackArray.map((_, index) => (
                <div key={index} style={{ width: '70px', height: '100px', backgroundColor: 'black', margin: '80px' }} />
            ))}
        </div>
    );
};