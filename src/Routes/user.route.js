// Import the express module and create a new router
import express from "express";
import { user } from "../controller/user.controller.js";
const router = express.Router();

// GET request to the "/test" endpoint
router.get("/", user);

// Export the router
export default router;
