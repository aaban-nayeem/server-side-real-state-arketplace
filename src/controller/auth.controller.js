import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    console.log(`User create failed ${error}`);
    res.status(500).json("User create failed");
  }
};
// res.status(500).json("User create failed");
