import express from "express";
const router = express.Router()
import listingController from "../controllers/listing.js"
import wrapAsync from "../utils/wrapAsync.js"
import { validateListing } from "../middleware.js";





router.get(["/", "/listings"], wrapAsync(listingController.listingHome))
router.post("/new", validateListing, wrapAsync(listingController.listingNew))
router.route("/:id").get(wrapAsync(listingController.listingDetailedPage))
    .delete(wrapAsync(listingController.deleteListing))

export default router