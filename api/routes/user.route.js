import express from "express";
import {
  deleteUser,
  test,
  updateUser,
  getUserListings,
<<<<<<< HEAD
  getUser,
=======
>>>>>>> 914b697e861b2ec02fc8e73267b989f7c3e6e2d9
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
<<<<<<< HEAD
router.get("/:id", verifyToken, getUser);
=======
>>>>>>> 914b697e861b2ec02fc8e73267b989f7c3e6e2d9

export default router;
