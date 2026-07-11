import Listing from '../models/listing.js'
import geocode from '../geocode.js';

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

export default { listingHome, listingDetailedPage, listingNew, deleteListing, listingData, editListing }