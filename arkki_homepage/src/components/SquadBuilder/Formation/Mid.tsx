import React from 'react';
import './Formation.style.scss';
import { playerImages } from '../../../assets/index';
import { Draggable, DraggableProvided, Droppable, DroppableProvided } from '@hello-pangea/dnd';
import logo from '../../../assets/arkki-logo-white.svg';


interface MidProps {
    mid?: { firstName: string, lastName: string, number: number }[];
}

export const Mid: React.FC<MidProps> = ({ mid = [] }) => {
    return (
        <div className='Formation__line'>
            {mid.map((player, index) => (
                <Droppable key={player.number} droppableId={`mid-${index}`}>
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