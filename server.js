import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import { router } from './routes/userRoute.js'
dotenv.config()
connectDB()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',router)


app.listen(PORT,() => {
    console.log(`Server is runing on ${PORT}`)
})