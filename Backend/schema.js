import joi from "joi"

const listingSchema = joi.object({

    title: joi.string().alphanum().min(3).max(30).required(),
    description: joi.string().alphanum().required(),
    image: joi.object({
        url: joi.string().allow("", null),
        filename: joi.string()
    }),
    price: joi.number().min(0).required(),
    location: joi.string().required(),
    country: joi.string().required()


})

export default listingSchema