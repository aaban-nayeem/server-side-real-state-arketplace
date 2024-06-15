import express from "express";
const app = express();

app.use(express.json());

import userRouter from "./Routes/user.route.js";
import authRouter from "./Routes/auth.route.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/signup", authRouter);

export { app };
