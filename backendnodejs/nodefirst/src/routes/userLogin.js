import express from 'express';
import pool from '../config/db.js';
import jwt from 'jsonwebtoken';


const loginAuthRouter = express.Router();

loginAuthRouter.post('/loginuser', async (req, res) => {

    const { email } = req.body;

    const user = await pool.query("SELECT * FROM login_user WHERE email = $1", [email]);

    if (user.rows.length === 0) {
        return res.status(404).send("User not found");
    }

    // Registration logic will go here
    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ token });
});

export default loginAuthRouter;