import errorHandlerMiddleware from "./middlewares/error.middlewares.js";
import cors from "cors";
import express from "express";
const app = express();

app.use(express.json());
app.use(cors());
app.use(errorHandlerMiddleware);

import userRouter from "./Routes/user.route.js";
import authRouter from "./Routes/auth.route.js";


app.use("/api/v1/user", userRouter);
app.use("/api/v1/signup", authRouter);

export { app };
