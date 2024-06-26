import express from "express";
import { signup } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/", signup);

export default router; // exporting the router to use it in the server.js file
