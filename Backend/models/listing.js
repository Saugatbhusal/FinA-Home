import mongoose from "mongoose";
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
    category: {
        type: String,
        enum: ["Mountain", "Beach", "Castel", "Camping", "Village", "Amazon", "Dome"]
    },
    price: Number,
    location: String,
    country: String
})
const Listing = mongoose.model("Listing", listingSchmea)

export default Listing;