import express from 'express'

const routes = express.Router()

routes.get('/users', (req, res) => {
    res.status(200).json({message: 'Get all users'})
})

routes.post('/register', (req, res) => {
    res.status(200).json({message: 'Login a new a new user'})
})

export default routes