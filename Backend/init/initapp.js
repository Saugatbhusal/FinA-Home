import mongoose from "mongoose";
import data from "./data.js"
import express from "express"
import Listing from "../models/listing.js";


const app = express()

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/findAHome')
}
main().then(() => {
    console.log("connected")
}).catch((err) => console.log(err))

const Data = data.data
    // console.log(Data)
async function initds(Data) {
    // find which object is missing title
    Data.forEach((item, index) => {
        if (!item.title) {
            console.log(`missing title at index ${index}`, item)
        }
    })
    console.log(" no missing title")
}
initds(Data)
async function initdb(Data) {
    await Listing.deleteMany({})
    await Listing.insertMany(
        Data)

}
initdb(Data)