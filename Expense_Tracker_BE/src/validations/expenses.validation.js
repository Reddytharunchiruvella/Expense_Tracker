export const validateExpense = (req, res, next) => {
  const { title, amount, date, user_id } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({ error: "Amount must be greater than 0" });
  }

  if (!date) {
    return res.status(400).json({ error: "Date is required" });
  }

  if (!user_id) {
    return res.status(400).json({ error: "User ID is required" });
  }

  next();
};
