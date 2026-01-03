import express from 'express'
import env from 'dotenv'

const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello from backend'})
})

app.listen(PORT, () => {
    console.log('Server running on port: 5000')
})

