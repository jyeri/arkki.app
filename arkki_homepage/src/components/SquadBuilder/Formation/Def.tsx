import React from 'react';
import './Formation.style.scss';
import { Draggable, DraggableProvided, Droppable, DroppableProvided } from '@hello-pangea/dnd';

interface DefProps {
    def?: { firstName: string, lastName: string, number: number }[];
}

export const Def: React.FC<DefProps> = ({ def = [] }) => {
    return (
        <div className='Formation__line'>
            {def.map((player, index) => (
                <Droppable key={player.number} droppableId={`def-${index}`}>
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
                                        <h1 className='lastName'> {player.lastName}</h1> <h2 className='firstName'>{player.firstName}</h2> #{player.number}
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