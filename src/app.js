import express from "express";
const app = express();

import userRouter from "./Routes/user.route.js";
app.use("/api/v1/user", userRouter);

export { app };
