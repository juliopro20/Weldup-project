import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import roleRoute from './routes/role.js'; 
import clientRoute from './routes/client.js';
import companyRoute from './routes/company.js';
import authRoute from './routes/auth.js'; 
import productRoute from './routes/products.js'
import hiresRoute from './routes/hires.js'


dotenv.config()
const app = express()
const port = 3000

//middlewares
app.use(express.json())
app.use(cors())

//endpoints

app.use('/api/role', roleRoute);
app.use('/api/auth', authRoute);
app.use('/api/client', clientRoute)
app.use('/api/company', companyRoute)
app.use('/api/products', productRoute)
app.use('/api/hires', hiresRoute)


//connecting to the database
const connectMongoDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected")
    } catch (error) {
        throw error;        
    }
}

app.listen(port, ()=>{
    connectMongoDB()
    console.log('Server is running at http://localhost:3000')
})