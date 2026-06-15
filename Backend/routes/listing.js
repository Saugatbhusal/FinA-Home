import express from "express";
const router = express.Router()
import Listing from '../models/listing.js'
import listingController from "../controllers/listing.js"
import wrapAsync from "../utils/wrapAsync.js"
import validateListing from "../middleware.js";



router.get(["/", "/listings"], wrapAsync(listingController.listingHome))

router.get("/detail/:id", wrapAsync(listingController.listingDetailedPage))

router.post("/new", validateListing, wrapAsync(listingController.listingNew))

export default router