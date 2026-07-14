import { listingSchema, reviewSchema } from "./schema.js";
import ExpressError from "./utils/ExpressError.js"

export const validateListing = (req, res, next) => {
    let listing = req.body
    let { error } = listingSchema.validate(listing)
    if (error) {
        let errorMessage = error.details.map((ele) => ele.message).join(",")

        throw new ExpressError(400, errorMessage)
    } else {
        next()
    }
}

export const validatingReview = (req, res, next) => {
    let review = req.body
    let { error } = reviewSchema.validate(review)
    if (error) {
        console.log("form here")
        let errorMessage = error.details.map((err) => err.message).join(",")
        throw new ExpressError(400, errorMessage)
    } else {
        next()
    }
}

export const isLoggedin = (req, res, next) => {
    console.log("inside isloggerin")
    if (req.isAuthenticated()) {
        next()
    } else {
        console.log("user not logged in")
        res.status(401).json({ error: "please login to continue" })
    }
}