import mongoose, { mongo } from "mongoose";

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,

    },
    password:{
        type:String,

    }
});


export default User=mongoose.models.user || mongoose.model(User,UserSchema);