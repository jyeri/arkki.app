import "./SquadBuilder.style.scss"
import logo from "./arkki-logo.png"
import whitelogo from "./arkki-logo-white.svg"
import { Attack } from "./Formation/Attack"
import { Mid } from "./Formation/Mid"
import { Def } from "./Formation/Def"
import { GK } from "./Formation/GK"
import { useSquadBuilder } from "./useSquadBuilder.ts"
import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import {Droppable} from '../DnD/Droppaple.tsx';
import {Draggable} from '../DnD/Draggable.tsx';


export const SquadBuilder = () => {
    const { Squad, selectedOption, handleSelectChange } = useSquadBuilder();
    const containers = ['A', 'B', 'C'];
    const [parent, setParent] = useState(null);
    const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
    );

    return (
        <div className="SBContainer">
            <div className="SBContainer__title">
                <h1 className="SBContainer__title-text">Squad Builder</h1>
            </div>
            <select onChange={handleSelectChange} value={selectedOption}>
                <option value="442">4-4-2</option>
                <option value="352">3-5-2</option>
                <option value="451">4-5-1</option>
            </select>
            <DndContext onDragEnd={handleDragEnd}>
            {parent === null ? draggableMarkup : null}
            {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
            <Droppable key={id} id={id}>
                {parent === id ? draggableMarkup : 'Drop here'}
            </Droppable>
            ))}
            </DndContext>
            <Attack attack={Squad.attack} />
            <Mid Mid={Squad.mid} />
            <Def Def={Squad.def} />
            <GK GK={Squad.gk} />
        </div>
    );

    function handleDragEnd(event:any) {
        const {over} = event;
    
        // If the item is dropped over a container, set it as the parent
        // otherwise reset the parent to `null`
        setParent(over ? over.id : null);
    }
};