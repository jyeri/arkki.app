import React from 'react';
import './Formation.style.scss';

interface GKProps {
    GK: number;
}

export const GK: React.FC<GKProps> = ({ GK }) => {
    const GKArray = Array.from({ length: GK }, (_, index) => index);

    return (
        <div className='Formation__line'>
            {GKArray.map((_, index) => (
                <div key={index} style={{ width: '70px', height: '100px', backgroundColor: 'black', margin: '10px' }} />
            ))}
        </div>
    );
};