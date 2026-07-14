import joi from "joi"

export const listingSchema = joi.object({

    title: joi.string().min(3).max(30).required(),
    description: joi.string().required(),
    image: joi.object({
        url: joi.string().allow("", null),
        filename: joi.string()
    }).allow(null),
    price: joi.number().min(0).required(),
    category: joi.string(),
    location: joi.string().required(),
    country: joi.string().required(),
    geometry: joi.object({
        lat: joi.number(),
        lng: joi.number()
    })


})
export const reviewSchema = joi.object({
    comment: joi.string().min(1).required(),
    rating: joi.number().min(0).max(5).required(),


})