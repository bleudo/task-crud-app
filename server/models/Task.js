import db from "../config/db.js";

class Task {
    static async getAll() {
        const query = 'SELECT * FROM tasks ORDER BY created_at DESC';
        const result = await db.query(query);
        return result.rows;
    }

    static async getById(id) {
        const query = 'SELECT * FROM tasks WHERE id = $1';
        const result = await db.query(query, [id]);
        return result.rows[0];
    }

    static async create(title, description) {
        const query = 'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *';
        const result = await db.query(query, [title, description]);
        return result.rows[0];
    }

    static async update(id, title, description, status) {
        const query = 'UPDATE tasks SET title = $2, description = $3, status = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *';
        const result = await db.query(query, [id, title, description, status]);
        return result.rows[0];
    }

    static async delete(id) {
        const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
        const result = await db.query(query, [id]);
        return result.rows[0];
    }
}

export default Task;