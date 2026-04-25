import pool from "../config/db.js";


export const getAllUserServices=async()=>{

    const result=await pool.query("select * from users");
    return result.rows;
};

export const getUserByIdServices=async(id)=>{
    const result=await pool.query("select * from users where id=$1",[id]);
    return result.rows[0];
};

export const createUserServices=async(userData)=>{
    console.log(userData);
    
    const {name,price} = userData;
    const result=await pool.query("insert into school.product (name,price) values($1,$2) returning *",[name,price]);
    return result.rows[0];
};

export const updateUserServices=async(id,userData)=>{
    const {name,email}=userData;
    const result=await pool.query("update users set name=$1,email=$2 where id=$3 returning *",[name,email,id]);
    return result.rows[0];
};

export const deleteUserServices=async(id)=>{
    const result=await pool.query("delete from users where id=$1 returning *",[id]);
    return result.rows[0];
};

