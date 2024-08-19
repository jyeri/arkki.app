import { useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { useSquadBuilder } from './useSquadBuilder.ts';
import './SquadBuilder.style.scss';
import { Attack } from './Formation/Attack';
import { Mid } from './Formation/Mid';
import { Def } from './Formation/Def';
import { GK } from './Formation/GK';

export const SquadBuilder = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select Formation');
    const { attack, mid, def, gk, updatePlayerPosition } = useSquadBuilder(selectedOption);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        const [sourceDroppableId, sourceIndex] = source.droppableId.split('-');
        const [destinationDroppableId, destinationIndex] = destination.droppableId.split('-');

        updatePlayerPosition(parseInt(sourceIndex), parseInt(destinationIndex), sourceDroppableId, destinationDroppableId);
    };

    return (
        <div className="SBContainer__formation">
            <div className="SBContainer__dropdown">
                <button className="SBContainer__dropdown-button" onClick={toggleDropdown}>
                    {selectedOption}
                </button>
                {isDropdownOpen && (
                    <ul className="SBContainer__dropdown-menu">
                        <li className="SBContainer__dropdown-item" onClick={() => handleOptionClick('4-4-2')}>
                            4-4-2
                        </li>
                        <li className="SBContainer__dropdown-item" onClick={() => handleOptionClick('4-3-3')}>
                            4-3-3
                        </li>
                        <li className="SBContainer__dropdown-item" onClick={() => handleOptionClick('3-5-2')}>
                            3-5-2
                        </li>
                    </ul>
                )}
            </div>
            <div className="SBContainer__pitch">
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="SBContainer__pitch-attack">
                        <Attack attack={attack} />
                    </div>
                    <div className="SBContainer__pitch-mid">
                        <Mid mid={mid} />
                    </div>
                    <div className="SBContainer__pitch-def">
                        <Def def={def} />
                    </div>
                    <div className="SBContainer__pitch-gk">
                        <GK gk={gk} />
                    </div>
                </DragDropContext>
            </div>
        </div>
    );
};