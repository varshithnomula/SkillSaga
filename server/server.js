import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'
import courseRouter from './routes/courseRoute.js'
import userRouter from './routes/userRoutes.js'

//initialize express
const app = express()

//Middlewares
app.use(cors())
app.use(clerkMiddleware())

//Routes
app.get('/', (req, res) => res.send('API Working'))
app.post('/clerk', express.json(), clerkWebhooks)
app.use('/api/educator', express.json(), educatorRouter)
app.use('/api/course', express.json(), courseRouter)
app.use('/api/user', express.json(), userRouter)
app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks)

//port
const PORT = process.env.PORT || 5000

// Start server after connecting to databases
const startServer = async () => {
  try {
    // connect to DB
    await connectDB()
    await connectCloudinary()
    
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    })
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();

