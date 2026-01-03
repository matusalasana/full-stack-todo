import express from 'express'
import todoRoutes from './routes/todoRoutes.js'
import userRoutes from './routes/userRoutes.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use('/api/todos', todoRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () => {

    console.log('✅ Server running on Port:',PORT)
})

