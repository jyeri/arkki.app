import React from 'react';
import "../../styles/SquadBuilder.styles.scss";
import { Draggable, DraggableProvided, Droppable, DroppableProvided } from '@hello-pangea/dnd';
import logo from '../../assets/arkki-logo.png';
import { playerImages } from '../../assets/index';


interface MidProps {
    mid?: { firstName: string, lastName: string, number: number }[];
}

export const Mid: React.FC<MidProps> = ({ mid = [] }) => {
    return (
        <div className='Formation__line'>
            {mid.map((player, index) => (
                <div className='slot' key={index}>
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
                </div>
            ))}
        </div>
    );
};