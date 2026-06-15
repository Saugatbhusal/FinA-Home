import listingSchema from "./schema.js"
import ExpressError from "./utils/ExpressError.js"
const validateListing = (req, res, next) => {
    let listing = req.body
    let { error } = listingSchema.validate(listing)
    if (error) {
        let errorMessage = error.details.map((ele) => ele.message).join(",")

        throw new ExpressError(400, errorMessage)
    } else {
        next()
    }
}
export default validateListing