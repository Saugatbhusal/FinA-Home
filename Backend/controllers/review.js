import Review from "../models/review.js";
import Listing from "../models/listing.js";

const createReview = async(req, res, next) => {
    try {
        const { id } = req.params

        const listing = await Listing.findById(id)
        let newReview = new Review(req.body)
        await newReview.save()
        listing.reviews.push(newReview)
        await listing.save()
        res.json({ success: true })


    } catch (error) {
        next(error)

    }
}

const deleteReview = async(req, res) => {
    try {
        const { id, reviewId } = req.params
        await Review.findByIdAndDelete(reviewId)
        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
        res.json({ success: true })
    } catch (error) {
        console.log(error)
    }

}

export default { createReview, deleteReview }