import React, { useState } from "react";

const TaskForm = ({ onCreateTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreateTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ingrese una nueva tarea"
        className="w-full px-3 py-2 mb-2 text-gray-700 border rounded-lg focus:outline-none"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ingrese la descripción de la tarea"
        className="w-full px-3 py-2 mb-2 text-gray-700 border rounded-lg focus:outline-none"
      />
      <button 
        type="submit"
        className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Agregar Tarea
      </button>
    </form>
  );
};

export default TaskForm;