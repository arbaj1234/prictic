import mongoose from "mongoose";

 export const ConnectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('database connection successfuly');
    } catch (error) {
        console.log(error.message);
    }
}