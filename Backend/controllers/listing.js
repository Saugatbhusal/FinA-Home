import Listing from '../models/listing.js'
import geocode from '../geocode.js';
import cloudinary from "../cloudinary.js"
import "dotenv/config"

const listingHome = async(req, res) => {
    const allListings = await Listing.find();
    res.send(allListings);
}

const listingDetailedPage = async(req, res) => {
    const { id } = req.params

    const singleCardData = await Listing.findById(id).populate("reviews")
    res.json(singleCardData)
}

const listingNew = async(req, res) => {
    const { location, country } = req.body
    console.log(req.body)
    const newListing = new Listing(req.body)
    const data = await geocode(location, country)
    if (data) newListing.geometry = data
    await newListing.save()
    res.json({ ok: true })
}

const deleteListing = async(req, res) => {
    const { id } = req.params

    await Listing.findByIdAndDelete(id)
    res.json({ success: true })

}
const listingData = async(req, res) => {
    const { id } = req.params

    const singleCardData = await Listing.findById(id)
    res.json(singleCardData)


}

const editListing = async(req, res) => {
    const { id } = req.params
    let newListing = req.body
    let listing = await Listing.findByIdAndUpdate(id, newListing, { new: false })
    res.json({ success: true })

}
const imageSignature = async(req, res) => {
    const timeStamp = Math.round(Date.now() / 1000) // cratting and converting time stamp to sec

    const signature = cloudinary.utils.api_sign_request({ timestamp: timeStamp }, process.env.CLOUDINARY_API_SECRET)
    res.json({
        signature,
        timeStamp,
        apiKey: process.env.CLOUDINARY_API_KEY,
        cloudname: process.env.CLOUDINARY_CLOUD_NAME
    })
}
export default { listingHome, listingDetailedPage, listingNew, deleteListing, listingData, editListing, imageSignature }