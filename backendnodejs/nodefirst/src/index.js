import express  from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import authRouter from './routes/auth.js';
import loginAuthRouter from './routes/userLogin.js';
import errorHandling from './midleware/errorHandler.js';
import routerabc from './routes/roleRouter.js'





dotenv.config();
const app = express();
const port = process.env.PORT || 3001 ;

//middleware

app.use(cors());
app.use(express.json());
app.use(errorHandling);

// Routes
app.use("/api",userRoutes);
app.use("/signup", authRouter);
app.use("/login", loginAuthRouter);
app.use("/role", routerabc);





//app.use('/api/user-role', userRoleRouter);
//  Error handling middleware

// Test route to check database connection

// app.get("/api/users", async(req,res)=>{
//     const result = await pool.query("SELECT current_database()");
//     res.send(`The database name is: ${result.rows[0].current_database}`);
// });

// app.post("/api/users", async(req,res)=>{
//     const {name,email,id} = req.body;
    
//     const result = await pool.query("INSERT INTO users (id,name,email) VALUES ($1,$2,$3) RETURNING *",[id,name,email]);
//     res.send(result.rows[0]);
// });

// app.get("/api/users/:id", async(req,res)=>{
//     const {id} = req.params;    
//     const result = await pool.query("SELECT * FROM users WHERE id = $1",[id]);
//     if(result.rows.length === 0){
//         return res.status(404).send("User not found");
//     }
//     res.send(result.rows[0]);
// });


// app.get("/api/allusers", async(req,res)=>{
//     const result = await pool.query("SELECT * FROM users");
//     res.send(result.rows);
// });



// app.put("/api/users/:id", async(req,res)=>{
//     const {id} = req.params;    
//     const {name,email} = req.body;
//     const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",[name,email,id]);
//     if(result.rows.length === 0){
//         return res.status(404).send("User not found");
//     }
//     res.send(result.rows[0]);
// });

// app.delete("/api/users/:id", async(req,res)=>{
//     const {id} = req.params;    
//     const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *",[id]);    
//     if(result.rows.length === 0){
//         return res.status(404).send("User not found");
//     }   

//     res.send(result.rows[0]);
// });



 // Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});