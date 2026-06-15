import Listing from '../models/listing.js'

export const listingHome = async(req, res) => {


    const allListings = await Listing.find();
    res.send(allListings);
}

export const listingDetailedPage = async(req, res) => {


    const { id } = req.params

    const singleCardData = await Listing.findById(id)

    res.json(singleCardData)
}

export const listingNew = async(req, res) => {
    const newListing = new Listing(req.body)
    await newListing.save()
    res.json({ ok: true })



}


export default { listingHome, listingDetailedPage, listingNew }