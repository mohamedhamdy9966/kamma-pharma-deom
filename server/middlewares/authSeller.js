import jwt from "jsonwebtoken";

const authSeller = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    req.seller = { email: tokenDecode.email };
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ success: false, message: "Invalid seller token" });
  }
};

export default authSeller;
