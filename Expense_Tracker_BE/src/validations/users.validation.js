export const validateLoginUser = (req, res, next) => {
  const { mobile } = req.body;

  const mobileStr = String(mobile);

  if (!mobileStr || mobileStr.length !== 10) {
    return res.status(400).json({ error: "Valid mobile number required" });
  }

  next();
};

export const validateRegisterUser = (req, res, next) => {
  const { name, mobile } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Valid name required" });
  }

  const mobileStr = String(mobile);

  if (!mobileStr || mobileStr.length !== 10) {
    return res.status(400).json({ error: "Valid mobile number required" });
  }

  next();
};
