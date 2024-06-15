// Import the express module and create a new router
import express from "express";
import { test } from "../controller/user.controller.js";
const router = express.Router();

// GET request to the "/test" endpoint
router.get("/test", test);

// Export the router
export default router;
