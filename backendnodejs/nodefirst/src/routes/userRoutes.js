import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controller/userController.js';
import validateUser from '../midleware/inputValidation.js';
import authenticateToken from '../midleware/authMiddleware.js'

const router = express.Router();

router.get("/users", authenticateToken, getAllUsers);
router.post("/users", createUser);
router.get("/users/:id", authenticateToken, getUserById);
router.put("/users/:id", authenticateToken, validateUser, updateUser);
router.delete("/users/:id", authenticateToken, deleteUser);

export default router;