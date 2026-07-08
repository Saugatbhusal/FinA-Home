import reviewControllers from "../controllers/review.js"
import express from "express";
const router = express.Router({ mergeParams: true })
import wrapAsync from "../utils/wrapAsync.js";
import { validatingReview } from "../middleware.js";

router.post("/", validatingReview, wrapAsync(reviewControllers.createReview))

router.delete("/:reviewId", wrapAsync(reviewControllers.deleteReview))

export default router