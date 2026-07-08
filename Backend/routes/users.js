import express from "express"
const router = express.Router()
import userController from "../controllers/user.js"
import passport from "passport";

router.get("/", userController.fetchUser)
router.post("/logout", userController.logout)

router.post("/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
            if (err) return next(err)

            if (!user) {
                // auth failed — user not found or wrong password
                return res.json({ success: false, message: "Invalid credentials" })
            }

            // auth passed — manually log the user in
            req.login(user, (err) => {
                if (err) return next(err)
                return res.json({ success: true, username: user.username })
            })
        })(req, res, next) // ← note: immediately invoked with (req, res, next)
})


export default router