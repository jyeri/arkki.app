import React from 'react';
import './Formation.style.scss';
import { playerImages } from '../../../assets/index';
import { Draggable, DraggableProvided, Droppable, DroppableProvided } from '@hello-pangea/dnd';
import logo from '../../../assets/arkki-logo-white.svg';


interface GKProps {
    gk?: { firstName: string, lastName: string, number: number }[];
}

export const GK: React.FC<GKProps> = ({ gk = [] }) => {
    return (
        <div className='Formation__line'>
            {gk.map((player, index) => (
                <Droppable key={player.number} droppableId={`gk`}>
                    {(provided: DroppableProvided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className='droppable-slot'>
                            <Draggable draggableId={player.number.toString()} index={index}>
                                {(provided: DraggableProvided) => (
                                    <div
                                        className='player'
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                    <span className='playerNumber'> {player.number}</span> 
                    <img className='playerImg' src={playerImages[player.firstName] || logo} alt={player.firstName} />
                    <h1 className='lastName'> {player.lastName}</h1> <h2 className='firstName'>{player.firstName}</h2>
                    </div>
                                )}
                            </Draggable>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            ))}
        </div>
    );
};