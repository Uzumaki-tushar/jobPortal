import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Student','Recruiter'],
        default:'user',
        required:true
    },
    profile:{
        bio:{
            type:String,
        },
        skils:[{
            type:String,
        },],
        resume:{
            type:String, // url to resume profile form database.
        },
        resumeOrigianl:{
            type:String
        },
        company:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Company'
        },
        profilePhoto:{
            type:String, // url to profile photo form database.
            default:""
        },
    }
},{timestamps:true})

export const User= mongoose.model('User',userSchema);
