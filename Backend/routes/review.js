import reviewControllers from "../controllers/review.js"
import express from "express";
const router = express.Router({ mergeParams: true })
import wrapAsync from "../utils/wrapAsync.js";
import { validatingReview, isLoggedin } from "../middleware.js";

router.post("/", isLoggedin, validatingReview, wrapAsync(reviewControllers.createReview))

router.delete("/:reviewId", isLoggedin, wrapAsync(reviewControllers.deleteReview))

export default router