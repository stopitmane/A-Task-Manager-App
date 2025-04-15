import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

const TaskForm = ({ onAddTask, onEditTask, taskToEdit }) => {
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
  const [priority, setPriority] = useState(taskToEdit ? taskToEdit.priority : 'Medium');
  const [tags, setTags] = useState(taskToEdit ? taskToEdit.tags : []);
  const [dueDate, setDueDate] = useState(taskToEdit ? new Date(taskToEdit.dueDate) : new Date());
  
  const tagOptions = [
    { value: 'Work', label: 'Work' },
    { value: 'Personal', label: 'Personal' },
    { value: 'Urgent', label: 'Urgent' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required');
      return;
    }

    const task = {
      title,
      description,
      priority,
      tags: tags.map(tag => tag.value),
      dueDate: dueDate.toISOString(),
    };

    if (taskToEdit) {
      onEditTask(taskToEdit.id, task); // Edit existing task
    } else {
      onAddTask(task); // Add new task
    }

    setTitle('');
    setDescription('');
    setPriority('Medium');
    setTags([]);
    setDueDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label>Priority: </label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div>
        <label>Tags: </label>
        <Select
          isMulti
          value={tags}
          onChange={setTags}
          options={tagOptions}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      <div>
        <label>Due Date: </label>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          {taskToEdit ? 'Edit Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

