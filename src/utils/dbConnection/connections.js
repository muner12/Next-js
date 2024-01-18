import mongoose from "mongoose";

export const connectToDB=async()=>{
    if(mongoose.connections[0].readyState)return
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected");
    }catch(err){
        throw new Error("Not connected To Db");

    }
}