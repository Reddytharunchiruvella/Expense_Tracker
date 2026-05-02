import client from "../config/DB.js";

export const loginUser = async (req, res) => {
  try {
    const { name, mobile, salary } = req.body;

    const existingUser = await client.query(
      "SELECT * FROM users WHERE mobile = $1",
      [mobile],
    );

    if (existingUser.rows.length > 0) {
      return res.json(existingUser.rows[0]);
    }

    const newUser = await client.query(
      "INSERT INTO users (name, mobile, salary) VALUES ($1,$2,$3) RETURNING *",
      [name, mobile, salary],
    );

    res.json(newUser.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
