import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
    const dbUrl = process.env.MONGODB_URL
    
    try {
        await mongoose.connect(dbUrl)
        console.log("MongoDB connected")
    } catch (err) {
        console.error("MongoDB connection error:", err)
    }
    
    
}