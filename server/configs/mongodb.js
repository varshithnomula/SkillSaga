import mongoose from "mongoose";

//mongodb connection

const connectDB=async()=>{
    mongoose.connection.on('connected',()=>console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default connectDB