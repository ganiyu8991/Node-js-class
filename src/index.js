
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
require('dotenv').config()

const {getHome, getContact} = require('./controllers/contactController')
const userRoute = require('./routes/userRoute')

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Database connected!!'))
.catch((err) => console.error(err))

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin", "X-Requested-With"],
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(userRoute)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})