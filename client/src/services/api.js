import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      throw error;
    }
  };

export const getTask = async (task) =>{
    try{
        const response = await axios.get(`${API_URL}/tasks/${task.id}`); 
        return response.data;
    }catch(error){
        console.error('Error al obtener tarea', error);
    }
}

  export const createTask = async (task) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, task);
      return response.data;
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      throw error;
    }
  };
  
  export const updateTask = async (task) => {
    try {
      const response = await axios.put(`${API_URL}/tasks/${task.id}`, task);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      throw error;
    }
  };
  
  export const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/tasks/${taskId}`);
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
      throw error;
    }
  };