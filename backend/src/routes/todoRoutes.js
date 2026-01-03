import {
    getTodos,
    addTodo,
} from '../controllers/todoController.js'
import express from 'express'

const routes = express.Router()

routes.get('/', getTodos);
routes.post('/', addTodo);


export default routes