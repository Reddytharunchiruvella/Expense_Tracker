import client from "../config/DB.js";

export const loginUser = async (req, res) => {
  try {
    const { mobile } = req.body;

    const existingUser = await client.query(
      "SELECT * FROM users WHERE mobile = $1",
      [mobile],
    );

    if (existingUser.rows.length > 0) {
      return res.json(existingUser.rows[0]);
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, mobile } = req.body;

    const newUser = await client.query(
      "INSERT INTO users (name, mobile) VALUES ($1,$2) RETURNING *",
      [name, mobile],
    );

    res.json(newUser.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
