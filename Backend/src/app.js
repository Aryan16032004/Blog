
import express from "express"

import cookieParser from "cookie-parser"
import cors from "cors";

const app = express();
app.use(cors({
    origin: "https://blog-ten-ebon-14.vercel.app",
    credentials: true // if you're using cookies/auth headers
}));


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser())


// routes

import userRouter from "./Routes/user.route.js"

// routes declaration
app.use("/api/v1/users", userRouter)

export { app }