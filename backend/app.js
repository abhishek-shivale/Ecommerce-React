import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import UserRouter from './routes/userRoutes.js'
const app = express()

app.use(express.json())
app.use(cors())
dotenv.config({path:'/backend/.env'})


app.use('/api/v1', UserRouter)






export default app