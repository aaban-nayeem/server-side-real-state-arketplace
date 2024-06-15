import { app } from "./app.js"; // Import the app from the app.js file
import connectDB from "./db/connection.db.js"; // Import the connectDB function from the connection.db.js file
import dotenv from "dotenv"; // Import the dotenv library
dotenv.config({ path: ".env" }); // Configure the dotenv library to read from the .env file

// This function connects to the database
connectDB()
  .then(
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running on port ${process.env.PORT || 3000}`);
    })
  )
  .catch((error) => {
    console.log(` ${error}`);
  });
