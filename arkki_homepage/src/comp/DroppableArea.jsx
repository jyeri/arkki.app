// DroppableArea.jsx
import React from 'react';
import { useDrop } from 'react-dnd';

const DroppableArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'item',
    drop: (item, monitor) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? 'lightgreen' : 'white' }}>
      Drop items here
    </div>
  );
};

export default DroppableArea;