import express from "express";
import prisma from "../prisma.js";
import { validationResult } from "express-validator";
import { loginClientValidator } from "../dto/loginClientValidator.js";
import { generateToken } from "../utility/helper.js";

const router = express.Router();

router.post("/login", loginClientValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try{
    const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = generateToken({
    username: user.username,
    role: user.role,
    id: user.id,
    name: user.name,
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });
  return res.status(200).json({ message: "Login successful", data: user });
  } catch(err) {
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logout successful" });
});

export default router;
