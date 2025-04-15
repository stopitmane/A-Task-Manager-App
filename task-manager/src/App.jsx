// src/App.jsx
import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskBoard from "./TaskBoard";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  // State to store tasks
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Function to save tasks in localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handle adding a task
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Handle deleting a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Handle editing a task
  const handleEditTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  // Handle drag-and-drop
  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const reorderedTasks = Array.from(tasks);
    const [movedTask] = reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, movedTask);

    setTasks(reorderedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-center text-3xl font-bold mb-8">Task Manager</h1>

      {/* Task Form */}
      <TaskForm onAddTask={handleAddTask} />

      {/* Task Board with Drag and Drop */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <TaskBoard
          tasks={tasks}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
        />
      </DragDropContext>
    </div>
  );
};

export default App;
