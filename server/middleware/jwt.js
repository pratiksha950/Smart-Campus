import jwt from "jsonwebtoken";

const checkJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("AUTH HEADER:", authHeader);

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Token missing"
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("DECODED USER:", decoded);
    next();
  } catch (err) {
    console.log("JWT ERROR:", err);
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};

export { checkJWT };