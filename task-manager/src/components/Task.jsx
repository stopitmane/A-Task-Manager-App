import React, { useState } from 'react';

const Task = ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleSave = () => {
    editTask(task.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={updatedTask.description}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;

