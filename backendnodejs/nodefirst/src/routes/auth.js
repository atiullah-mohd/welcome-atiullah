import express from 'express';
import pool from '../config/db.js';
import bcrypt from 'bcrypt';


const authRouter = express.Router();

authRouter.post('/rigester', async (req, res) => {

    const { email, password } = req.body;
    const hasdecriptedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query("INSERT INTO login_user (email, password, viewpass) VALUES ($1, $2, $3) RETURNING email, password", [email, hasdecriptedPassword, password]);

    res.send(newUser.rows[0]);


});

export default authRouter;