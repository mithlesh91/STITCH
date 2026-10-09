import mongoose from "mongoose";
import bcrypt from "bcrypt"


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
    contact:{
        type:Number,
        required:["number is must required", true]

    },
    role:{
        type:String,
        enum:["buyer","seller"],
        default:"buyer",
        required:true
    }
},{timestamps:true})

userSchema.pre("save",async function () {
    if(!this.isModified("password")) return

    // hash password

    this.password = await bcrypt.hash(this.password,10)
    
});

userSchema.methods.comparePassword = async function (enterPassword) {
    return await bcrypt.compare(
        enterPassword,
        this.password
    )
    
}

const UserModel = mongoose.model("user",userSchema)

export default UserModel