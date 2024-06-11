const express = require('express')
const todoRouter = require('./routers/TodoRouter')
const cors = require('cors')
const { connectDatabase } = require('./mongo/index') // change this

const app = express()
const port = 3000
app.use(cors())
connectDatabase()
app.use(express.json())
app.use('/todos', todoRouter)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
}) 