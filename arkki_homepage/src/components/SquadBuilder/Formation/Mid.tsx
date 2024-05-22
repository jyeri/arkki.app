import React from 'react';
import './Formation.style.scss';

interface MidProps {
    Mid: number;
}

export const Mid: React.FC<MidProps> = ({ Mid }) => {
    const MidArray = Array.from({ length: Mid }, (_, index) => index);

    return (
        <div className='Formation__line'>
            {MidArray.map((_, index) => (
                <div key={index} style={{ width: '70px', height: '100px', backgroundColor: 'black', margin: '40px' }} />
            ))}
        </div>
    );
};