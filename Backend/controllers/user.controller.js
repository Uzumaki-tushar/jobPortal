import {User} from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const homeMessage=(req,res)=>{
    return res.status(200).json({
        message:"hi hello",
        success:true,
    })
}

export const register=async (req,res)=>{
    try{
        const {fullname,email,phoneNumber,password,role}=req.body;
        // console.log(req.body);
        if(!fullname || !email || !password || !role || !phoneNumber){
            return res.status(404).json({
                message:"Missing required fields",
                success:false,
            });
        }
        const user= await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"Email already exists",
                success: false,
            })
        }

        // convert passwords to hashes
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role,
        })

        await newUser.save();
        return res.status(200).json({
            message:`Accounted created successfully ${fullname}`,
            success:true,
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message:"Server Error registration",
            success:false,
        })
    }
};

export const login= async (req,res)=>{
    try{
        const {email,password,role}=req.body;
        // console.log(email,password,role);
        if(!email || !password || !role){
            return res.status(404).json({
                message:"Missing required fields",
                success:false,
            })
        }
        let user=await User.findOne({email});
        if(!user){
            return res.status(404).json({
                message:"Incorrect email or password",
                success:false,
            })
        }
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(404).json({
                message:"Incorrect email or password",
                success:false,
            })
        }

        // check on role
        if(user.role!==role){
            return res.status(403).json({
                message:"You dont have the necessary role to access this resuource",
                success:false,
            })
        }

        // generate token
        const tokenData={
            userId:user._id,
        }
        const token=await jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:"1d"});

        user={
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile: user.profile,
        }

        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,
        httpOnly:true,
        sameSite:'strict',
    })
    .json({
        message:`Welcome back ${user.fullname}`,
        user,
        success:true,
    })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message:"Server Error login",
            success:false,
        })
    }
}

export const logout= async (req,res)=>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out successfully",
            success:true,
        })
    }
    catch(error){
        res.status(500).josn({
            message:"Server Error logout",
            success:false,
        })
    }
}

export const updateProfile= async(req,res)=>{
    try{
        const {fullname,email,phoneNumber,bio,skills}=req.body;
        
        const file=req.file;
        

        // cloudinary upload
        let skillsArray;
        if(skills)  skillsArray=skills.split(',');
        const userId=req.id; // middleware
        let user= await User.findById(userId);
        if(!user){
            return res.status(404).json({
                message:"User not found",
                success:false,
            })
        }
        if(fullname)user.fullname=fullname;
        if(email)user.email=email;
        if(phoneNumber)user.phoneNumber=phoneNumber;
        if(bio)user.profile.bio=bio;
        if(skills)user.profile.skills=skillsArray;
        // resume
        await user.save();

        user={
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile: user.profile,
        }

        return res.status(200).json({
            message:"Profile updated successfully",
            user,
            success:true,
        })

    }
    catch(error){
        res.status(500).json({
            message:"Server Error profile update",
            success:false,
        })
    }
}