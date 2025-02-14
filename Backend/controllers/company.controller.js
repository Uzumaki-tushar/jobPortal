import {Company} from "../models/company.model.js";

export const registerCompany= async(req,res)=>{
    try{
        const  {companyName,description,website,location}=req.body;
        if(!companyName){
            return res.status(400).json({
                message:"Company name is required",
                success:false,
            })
        }
        if(!description){
            return res.status(400).json({
                message:"Company description is required",
                success:false,
            })
        }
        let company=await Company.findOne({name:companyName});
        if(company){
            res.status(400).json({
                message:"Company already exits",
                success:false,
            })
        }

         company = await Company.create({
            name:companyName,
            userId:req.id,
            description,
            website,
            location
         });
         return res.status(201).json({
            message:"Company created successfully",
            company,
            success:true,
         })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"Server internal error"})
    }
}

export const getAllCompanies=async (req,res)=>{
    try{
        const userId=req.id; //loggedin user id
        const companies= await Company.find({userId});
        if(!companies){
            return res.status(404).json({message:"No companies found"});
        }
        return res.status(200).json({
            message:"Get all company info",
            companies,
            success:true,
        })
    }
    catch(error){
        console.log(error);
    }
}

export const getCompanyById= async(req,res)=>{
    try{
        const companyId=req.params.id;
        const company= await Company.findById(companyId);
        if(!company){
            return res.status(404).json({message:"Company not found"});
        }
        return res.status(200).json({
            company,
            success: true,
        })
    }
    catch(error){
        console.log(error);
    }
}

export const updateCompany= async(req,res)=>{
    try{
        const {name,description,website,location}=req.body;
        const file=req.file;
        // cloudinay

        const updateDate ={name,description,website,location}
        const company = await Company.findByIdAndUpdate(req.params.id,updateDate,{new:true});
        if(!company){
            return res.status(404).json({message:"Company not found"});
        }
        return res.status(200).json({message:"Company updated"});
    }
    catch(error){
        console.log(error);
    }
}