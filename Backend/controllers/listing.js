import Listing from '../models/listing.js'

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
    const newListing = new Listing(req.body)
    await newListing.save()
    res.json({ ok: true })
}

const deleteListing = async(req, res) => {
    const { id } = req.params
    await Listing.findByIdAndDelete(id)
    res.json({ success: true })

}


export default { listingHome, listingDetailedPage, listingNew, deleteListing }