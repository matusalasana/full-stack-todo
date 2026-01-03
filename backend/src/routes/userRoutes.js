import {
    getUsers,
    addUser,
} from '../controllers/userController.js'

import express from 'express'

const routes = express.Router()


routes.get('/', getUsers);
routes.post('/', addUser);

export default routes