import Task from '../models/Task.js';

class TaskController {
    static async getAllTasks(req, res) {
        try {
            const tasks = await Task.getAll();
            res.status(200).json(tasks);
        } catch (error) {
            console.error('Error al obtener todas las tareas:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
    
    static async createTask(req, res) {
        try {
            const { title, description } = req.body;
            const newTask = await Task.create(title, description);
            res.status(201).json(newTask);
        } catch (error) {
            console.error('Error al crear la tarea:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    static async updateTask(req, res) {
        try {
            const { id } = req.params;
            const { title, description, status } = req.body;
            const updatedTask = await Task.update(id, title, description, status);
            if (updatedTask) {
                res.status(200).json(updatedTask);
            } else {
                res.status(404).json({ error: 'Tarea no encontrada' });
            }
        } catch (error) {
            console.error('Error al actualizar la tarea:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    static async deleteTask(req, res) {
        try {
            const { id } = req.params;
            const deletedTask = await Task.delete(id);
            if (deletedTask) {
                res.status(200).json({ message: 'Tarea eliminada con éxito' });
            } else {
                res.status(404).json({ error: 'Tarea no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar la tarea:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}

export default TaskController;