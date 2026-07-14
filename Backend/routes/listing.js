import express from "express";
const router = express.Router()
import listingController from "../controllers/listing.js"
import wrapAsync from "../utils/wrapAsync.js"
import { validateListing } from "../middleware.js";
import { isLoggedin } from "../middleware.js";





router.get(["/", "/listings"], wrapAsync(listingController.listingHome))
router.post("/new", validateListing, wrapAsync(listingController.listingNew))
router.route("/:id").get(wrapAsync(listingController.listingDetailedPage))
    .delete(isLoggedin, wrapAsync(listingController.deleteListing))
    .put(isLoggedin, validateListing, listingController.editListing)
router.get("/edit/:id", isLoggedin, isLoggedin, wrapAsync(listingController.listingData))
router.get("/image/signature", wrapAsync(listingController.imageSignature))
export default router