import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:[,"email is must required"],
    },
    name:{
        type:String,
        required:["full name is required",true]
    },
    password:{
        type:String,
        required:["password is required", true]
    },
    role:{
        type:String,
        enam:["buyer","seller"],
        default:"buyer",
        required:true
    }
},{timestamps:true})

const UserModel = mongoose.model("user",userSchema)

export default UserModel