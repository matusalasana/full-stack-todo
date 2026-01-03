import pool from "../db.js";
export const getTodos = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos ORDER BY created_at DESC');
        res.json({
            success: true,
            count: result.rowCount,
            data: result.rows
        });
    } catch (err) {
        console.error('Error fetching todos:', err);
        res.status(500).json({ 
            success: false,
            error: err.message 
        });
    }
};

export const addTodo = async (req, res) => {
    try {
        const { user_id, title, description, status, priority, due_date, completed_at } = req.body;

        const result = await pool.query(
            `INSERT INTO todos (user_id, title, description, status, priority, due_date, completed_at) 
             VALUES ($1, $2, $3, $4, $5, $6, $7) 
             RETURNING *`,
            [user_id, title.trim(), description.trim(), status, priority, due_date, completed_at]
        );
        
        res.json({
            success: true,
            message: 'Todo created successfully',
            data: result.rows[0]
        });
        
    } 
    
    catch (err) {
        console.error('Error creating todo:', err);
    }
};




export default {
    getTodos,
    addTodo,
}