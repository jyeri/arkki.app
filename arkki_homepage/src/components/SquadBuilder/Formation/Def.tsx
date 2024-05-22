import React from 'react';
import './Formation.style.scss';

interface DefProps {
    Def: number;
}

export const Def: React.FC<DefProps> = ({ Def }) => {
    const DefArray = Array.from({ length: Def }, (_, index) => index);

    return (
        <div className='Formation__line'>
            {DefArray.map((_, index) => (
                <div key={index} style={{ width: '70px', height: '100px', backgroundColor: 'black', margin: '40px' }} />
            ))}
        </div>
    );
};