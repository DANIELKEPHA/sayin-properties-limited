import express from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
<<<<<<< HEAD
  getListings,
=======
>>>>>>> 914b697e861b2ec02fc8e73267b989f7c3e6e2d9
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListing);
<<<<<<< HEAD
router.get("/get", getListings);
=======
>>>>>>> 914b697e861b2ec02fc8e73267b989f7c3e6e2d9

export default router;
