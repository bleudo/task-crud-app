import React, { useState } from 'react';

function TaskItem({ task, onUpdateTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleUpdate = () => {
    onUpdateTask({ ...task, title: editedTitle, description: editedDescription });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  if (isEditing) {
    return (
      <li className="bg-white shadow-md rounded-lg p-4 mb-4">
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="w-full px-3 py-2 mb-2 text-gray-700 border rounded-lg focus:outline-none"
        />
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="w-full px-3 py-2 mb-2 text-gray-700 border rounded-lg focus:outline-none"
        />
        <div className="flex justify-end space-x-2">
          <button 
            onClick={handleUpdate}
            className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Guardar
          </button>
          <button 
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:outline-none"
          >
            Cancelar
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
      <p className="text-gray-600 mb-4">{task.description}</p>
      <div className="flex justify-end space-x-2">
        <button 
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Editar
        </button>
        <button 
          onClick={handleDelete}
          className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default TaskItem;