// src/TaskBoard.jsx
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskBoard = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <div
              className="bg-white border p-4 rounded-md shadow-md"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <h3 className="font-bold">{task.task}</h3>
              <p>{task.dueDate}</p>
              <p>Priority: {task.priority}</p>
              <button
                onClick={() => onEdit(task.id)}
                className="text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="text-red-500 ml-2"
              >
                Delete
              </button>
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default TaskBoard;
