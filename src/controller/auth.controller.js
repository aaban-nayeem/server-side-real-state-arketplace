import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Ensure req.body contains the expected keys and values
    if (!username || !email || !password) {
      return res.status(400).json("All fields are required");
    }

    // Create a new User instance with an object containing username, email, and password
    const newUser = new User({
      username,
      email,
      password,
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with a success message

    res.status(201).json("User created successfully!");
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json("Internal Server Error");
  }
};
