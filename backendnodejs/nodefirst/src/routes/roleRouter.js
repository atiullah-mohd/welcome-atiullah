import express from "express";
import createUserRole from '../controller/userRoleController.js'
import authenticateToken from '../midleware/authMiddleware.js'

const routerabc = express.Router();

routerabc.post("/user",authenticateToken, createUserRole);

export default routerabc;