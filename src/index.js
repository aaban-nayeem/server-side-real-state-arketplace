import { app } from "./app.js";
import connectDB from "./db/connection.db.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

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
