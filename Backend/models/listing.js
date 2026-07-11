import mongoose from "mongoose";
import Review from "./review.js";
const Schema = mongoose.Schema;

const listingSchmea = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    image: {
        url: String,
        filename: String

    },
    geometry: {
        lat: Number,
        lng: Number,
    },
    category: {
        type: String,
        enum: ["Mountain", "Beach", "Castel", "Camping", "Village", "Amazon", "Dome"]
    },
    price: Number,
    location: String,
    country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }]
})

listingSchmea.post("findOneAndDelete", async(listing) => {
    await Review.deleteMany({ _id: { $in: listing.reviews } })
})
const Listing = mongoose.model("Listing", listingSchmea)

export default Listing;