import { createUserServices, getAllUserServices, getUserByIdServices, updateUserServices, deleteUserServices } from "../model/userModel.js";
import errorHandling from "../midleware/errorHandler.js";
import pool from "../config/db.js";

const handleResponse=(res, status,message,data=null)=>{
    res.status(status).json({status, message, data });
};
//prod

export const createUser=async(req,res,next)=>{
    const userData=req.body;

    try{
         const newuser=await createUserServices(userData);
         
    handleResponse(res,201,"user created successfully",newuser);
    }catch(error){
        res.status(500).json({
            status: 500,
            success: false,
            error: error.message})

    }   
};

export const getAllUsers=async(req,res,next)=>{
   try{
     const allusers=await getAllUserServices();
    handleResponse(res,200,"All users fetched successfully",allusers);
   } catch(error){
        next(error);

   }    

};

export const getUserById=async(req,res,next)=>{
    const {id}=req.params;
  try{
      const users=await getUserByIdServices(id);
    if(!users){
        return handleResponse(res,404,"User not found");
    }else{
        handleResponse(res,200,"User fetched successfully",users);
    }
  }  catch(error){
        next(error);
   }    
};   

export const updateUser=async(req,res,next)=>{
    const {id}=req.params;
    const userData=req.body;
   try{
 const updateUsers=await updateUserServices(id,userData);
    if(!updateUsers){
        return handleResponse(res,404,"User not found");
    }else{
        handleResponse(res,200,"User updated successfully",updateUsers);
    }
   }catch(error){
        next(error);
   }
};

export const deleteUser=async(req,res,next)=>{
    const {id}=req.params;
   try{
     const deleteUsers=await deleteUserServices(id); 
    if(!deleteUsers){
        return handleResponse(res,404,"User not found");
    }
    handleResponse(res,200,"User deleted successfully",deleteUsers);
   }catch(error){
        next(error);
   }    
};