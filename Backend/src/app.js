import express from "express"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import RegisterRouter from "./routers/register.router.js"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))

app.use("/api",RegisterRouter)

export default app