import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import UserRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoute.js'
const app = express()
app.use(morgan("dev"));
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true

  })
);
dotenv.config()

app.use('/api/v1', UserRouter)
app.use("/api/v1/product", productRouter);






export default app