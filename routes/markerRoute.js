import express from "express";

import { getMarkers, createMarker, updateMarker, deleteMarker } from "../controllers/markerController.js"

const router = express.Router();

router.get("/", getMarkers);
router.post("/", createMarker);
router.put("/:id", updateMarker);
router.delete("/:id", deleteMarker);

export default router;