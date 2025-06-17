import jwt from "jsonwebtoken";

// Login Seller : /api/seller/login

export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt:", email);
    console.log("Expected email:", process.env.SELLER_EMAIL);
    console.log("Expected password:", process.env.SELLER_PASSWORD);
    if (
      password === process.env.SELLER_PASSWORD &&
      email === process.env.SELLER_EMAIL
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      return res.json({ success: true, token, message: "Logged In" });
    } else {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Update isSellerAuth to actually verify credentials
export const isSellerAuth = async (req, res) => {
  try {
    // Verify token from middleware
    if (!req.seller) {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized" });
    }
    return res.json({ success: true, message: "Authenticated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// seller logout
export const sellerLogout = async (req, res) => {
  try {
    return res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
