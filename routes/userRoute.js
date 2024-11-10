import express from "express";

import { updateProfile, getProfile } from "../controllers/userController.js";
import { verifyToken } from '../middleware/verifyToken.js';
import { requireAdmin } from '../middleware/requireAdmin.js';

const router = express.Router();

router.get("/:id", verifyToken, getProfile);
router.put("/update-user", verifyToken, updateProfile);
 
export default router;