import pool from "../config/db.js";

export const createUserRoleServices = async (userData) => {
  const { role_name, user_email, created_by } = userData;

  const result2 = await pool.query(`SELECT id FROM login_user WHERE email=$1`, [
    user_email,
  ]);

  if (result2.rows.length === 0) {
    throw new Error("User not found with this email");
  }
  const user_id = result2.rows[0].id;
  console.log(user_id, "USER ID");

  let result;

  const chekrole = await pool.query(`select * from role
    where user_id = $1`,[user_id])


  if (chekrole.rows.length > 0) {
    result = await pool.query(
      `UPDATE role 
     SET role_name=$1, created_by=$2
     WHERE   user_id=$3
     RETURNING *`,
      [role_name, created_by, user_id],
    );
  } else {
    result = await pool.query(
      "INSERT INTO role (role_name, user_email, created_by, user_id)  VALUES ($1, $2, $3, $4) RETURNING *",
      [role_name, user_email, created_by, user_id],
    );
  }

  return result.rows[0];
};
