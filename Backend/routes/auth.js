import User from "../models/user.js"
import express from "express"
const router = express.Router()
import passport from "passport";

router.post("/signup", async(req, res) => {
    try {

        const { username, email, password } = req.body
        const newUser = new User({
            username: username,
            email: email

        })
        const registeredUser = await User.register(newUser, password)
        res.json({ success: true })
    } catch (err) {
        res.json({ success: false, message: err.message })

    }
})



export default router