import "./SquadBuilder.style.scss"
import logo from "./arkki-logo.png"
import whitelogo from "./arkki-logo-white.svg"
import { Attack } from "./Formation/Attack"
import { Mid } from "./Formation/Mid"
import { Def } from "./Formation/Def"
import { GK } from "./Formation/GK"
import { useSquadBuilder } from "./useSquadBuilder.ts"
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Droppable } from '../DnD/Droppaple.tsx';
import { Draggable } from '../DnD/Draggable.tsx';

export const SquadBuilder = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select Formation");
    const { attack, mid, def, gk } = useSquadBuilder(selectedOption);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className="SBContainer__formation">
            <div className="SBContainer__dropdown">
                <button className="SBContainer__dropdown-button" onClick={toggleDropdown}>
                    {selectedOption}
                </button>
                {isDropdownOpen && (
                    <ul className="SBContainer__dropdown-menu">
                        <li className="SBContainer__dropdown-item" onClick={() => handleOptionClick("4-4-2")}>
                            4-4-2
                        </li>
                        <li className="SBContainer__dropdown-item" onClick={() => handleOptionClick("4-3-3")}>
                            4-3-3
                        </li>
                        <li className="SBContainer__dropdown-item" onClick={() => handleOptionClick("3-5-2")}>
                            3-5-2
                        </li>
                    </ul>
                )}
            </div>
            <div className="SBContainer__pitch">
                <DndContext>
                    <Droppable id="attack">
                        <Attack attack={attack} />
                    </Droppable>
                </DndContext>
            </div>
        </div>
    );
};