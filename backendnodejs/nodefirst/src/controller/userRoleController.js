import pool from "../config/db.js";
//import errorHandling from "../midleware/errorHandler.js";
import { createUserRoleServices } from "../model/roleModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({ status, message, data });
};

const createUserRole = async (req, res, next) => {
  const userData = req.body;

  //   const newuser=await createUserRoleServices(userData);

  try {
    const newuser = await createUserRoleServices(userData);

    handleResponse(res, 201, "user created successfully", newuser);
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      error: error.message,
    });
  }
};

export default createUserRole;
