import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:id", verifyAdmin, createRoom);
// UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
// GET
router.get("/:id", getRoom);

// GETALL
router.get("/", getAllRooms);

export default router;
