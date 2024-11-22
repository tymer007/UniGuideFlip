import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: false,
    secure: true,
    sameSite: "None",
    domain: ".uniguideng.com", // Explicitly specify your website's domain
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });   

  return token;
};