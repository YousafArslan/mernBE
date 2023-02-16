import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
  getHotelRooms,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);
// UPDATE
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);
// GET
router.get("/find/:id", getHotel);

// GETALL
router.get("/", getAllHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
