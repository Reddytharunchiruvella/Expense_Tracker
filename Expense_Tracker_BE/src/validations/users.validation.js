export const validateUser = (req, res, next) => {
  const { name, mobile, salary } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Name is required" });
  }

  if (!mobile || mobile.length !== 10) {
    return res.status(400).json({ error: "Valid mobile number required" });
  }

  if (!salary || Number(salary) <= 0) {
    return res.status(400).json({ error: "Salary must be greater than 0" });
  }

  next();
};