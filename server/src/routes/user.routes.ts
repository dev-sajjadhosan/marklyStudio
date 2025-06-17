import { Router } from "express";
import User from "../models/User";

const router = Router();

// GET /api/users
router.get("/", async (_, res) => {
  const users = await User.find();
  res.json(users);
});

// POST /api/users
router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

export default router;
