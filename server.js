import cors from 'cors'
import express from 'express'
import connectDatabase from './connection'
import initRouters from './src/routes'
require('dotenv').config()

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRouters(app)

connectDatabase()

const port = process.env.PORT || 2701

const listener = app.listen(port, () => {
    console.log(`Server is running on ${listener.address().port}`);
})