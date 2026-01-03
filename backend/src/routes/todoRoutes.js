import {
    getUsers,
    addUser,
    getTodos,
    addTodo,
} from '../controllers/todoController.js'
import { Pool } from 'pg'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const routes = express.Router()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
});

// Test database connection
pool.on('connect', () => {
    console.log('\n✅ Connected to PostgreSQL database\n')
});

pool.on('error', (err) => {
    console.error('❌ PostgreSQL pool error:', err)
});

routes.get('/todos', getTodos);
routes.post('/todos', addTodo);

routes.get('/users', getUsers);
routes.post('/users', addUser);


export default routes