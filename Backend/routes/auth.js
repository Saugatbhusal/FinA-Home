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

    } catch (err) {
        console.log("Error message", err)

    }
})

router.post("/login", passport.authenticate('local', {
        failureRedirect: '/'
    }),
    (req, res) => {

        res.json({ success: true, username: req.body.username });
    })

export default router