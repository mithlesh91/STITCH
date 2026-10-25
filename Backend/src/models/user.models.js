import mongoose from "mongoose";
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:[true, "email is required"],
    },
    fullname:{
        type:String,
        required:["full name is required",true]
    },
    password:{
        type:String,
        required:function (){
            return !this.googleId
        }
    },
    contact:{
        type:Number,
        required:false

    },
    role:{
        type:String,
        enum:["buyer","seller"],
        default:"buyer",
        required:true
    },
    googleId:{
        type:String,
        required:false
    }
},{timestamps:true})

userSchema.pre("save",async function () {
    if(!this.isModified("password")) return

    // hash password

    this.password = await bcrypt.hash(this.password, 10)
    
});

userSchema.methods.comparePassword = async function (Password) {
    return await bcrypt.compare(
        Password,
        this.password
    )
    
}

const UserModel = mongoose.model("user",userSchema)

export default UserModel