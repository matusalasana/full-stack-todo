import express from 'express'
import todoRoutes from './routes/todoRoutes.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use('/api', todoRoutes)

app.listen(PORT, () => {
    console.log('')
    console.log('')
    console.log('     ✅ Server running on Port:',PORT)
})

