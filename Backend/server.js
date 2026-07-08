import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import passport from "passport";
import Listing from './models/listing.js'
import User from "./models/user.js";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import MongoStore from "connect-mongo";
import listingRouter from "./routes/listing.js"
import userRouter from "./routes/users.js"
import authRouter from "./routes/auth.js"
import reviewRouter from "./routes/review.js"



const app = express();
app.use(cors({
    origin: "http://localhost:5173", // your Vite frontend URL
    credentials: true,
}))
app.use(express.json()); // coming json to object

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/findAHome');
}
main().then(() => {
    console.log("connected to DB")
}).catch((err) => {
    console.log(err)
})
app.use(session({ // Adds session middleware to every request so now every req has req.session

    secret: "Love",
    resave: false, // Donot save the session if noting changes
    saveUninitialized: false, // dont create session until something is created
    store: MongoStore.create({ // where to store session
        mongoUrl: "mongodb://127.0.0.1:27017/findAHome"
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(passport.initialize()); //Adds passport methods to every request. Now you can use req.login(), req.logout(), req.isAuthenticated()
app.use(passport.session()); //Tells passport to use sessions we created above app.use(session(){...}) to remember logged-in users.
passport.use(new LocalStrategy(User.authenticate())) // LocalStrategy is a CLASS that needs a verification function so we gave  it one.
passport.serializeUser((user, done) => { // tells what to store in session so it return user id to passport which then writes it in 
        //app.session.passport="ajdfoie88"
        done(null, user.id)
    })
    //passport.serializeUser(User.serializeUser()); as you see passport local mongoose provides serialize method to User

passport.deserializeUser(async(id, done) => { // it retreives the whole user object 
    const user = await User.findById(id)
    done(null, user)
})

app.use(["/", "/listings"], listingRouter)
app.use("/auth", authRouter)
app.use("/listings/:id/review", reviewRouter)
app.use("/user", userRouter)



app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err
    console.log("server", message)
    res.status(statusCode).json({ error: message })
})
app.listen(8080, () => {
    console.log("Listenig at port 8080")
})