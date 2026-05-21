import client from "../config/DB.js";

export const saveSalaryController = async (req, res) => {
  try {
    const { user_id, income } = req.body;

    const salary = await client.query(
      "UPDATE users SET income = $1 WHERE id = $2",
      [income, user_id],
    );

    res.status(200).json({ message: "salary added successfully !!!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
