import client from "../config/DB.js";

const addExpense = async (req, res) => {
  try {
    const { title, amount, date, user_id } = req.body;

    const result = await client.query(
      "INSERT INTO expenses (title, amount, date, user_id) VALUES ($1,$2,$3,$4)",
      [title, amount, date, user_id],
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getExpenses = async (req, res) => {
  const user_id = req.query.user_id;
  try {
    const result = await client.query(
      `SELECT * FROM expenses
       WHERE user_id = $1
       ORDER BY id ASC`,
      [user_id],
    );
    res.status(200).json({ expenses: result.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { addExpense, getExpenses };
