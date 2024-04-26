import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Landing.css';

const initialItems = Array.from({ length: 11 }, (_, i) => `item-${i}`);

const Landing = () => {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const itemsCopy = Array.from(items);
    const [sourceItem] = itemsCopy.splice(result.source.index, 1);
    const destinationIndex = result.destination.index === items.length ? items.length - 1 : result.destination.index;
    const [destinationItem] = itemsCopy.splice(destinationIndex, 1, sourceItem);
  
    if (destinationItem) {
      itemsCopy.splice(result.source.index, 0, destinationItem);
    }

    setItems(itemsCopy);
  };

  let count = 0;

  return (
    <div className='landing'>
      <DragDropContext onDragEnd={handleDragEnd}>
        {[2, 4, 4, 1].map((numItems, i) => {
          const rowItems = items.slice(count, count + numItems);
          const startIndex = count;
          count += numItems;
          return (
            <Droppable droppableId={`droppable-${i}`} key={i} direction="horizontal">
              {(provided, snapshot) => (
                <div className='droppable' {...provided.droppableProps} ref={provided.innerRef}>
                  {rowItems.map((item, index) => (
                    <Draggable key={item} draggableId={item} index={startIndex + index}>
                      {(provided, snapshot) => (
                        <div
                          className='item'
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={{
                            ...provided.draggableProps.style,
                            transform: snapshot.isDragging ? provided.draggableProps.style.transform : "none"
                          }}
                        >
                          {item}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  <div style={{ display: snapshot.isDraggingOver ? "block" : "none", height: "0px" }}>{provided.placeholder}</div>
                </div>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Landing;