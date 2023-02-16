import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send("hello you are logged in");
// });

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("hello admin you can delete all account");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello you can delete any account");
// });
// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);
// GET
router.get("/:id", getUser);

// GETALL
// router.get("/", verifyAdmin, getAllUsers);
router.get("/", getAllUsers);

export default router;
