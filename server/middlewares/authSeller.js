import jwt from "jsonwebtoken";

const authSeller = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Not Authorized" });
  }

  const token = authHeader.split(" ")[1];

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
