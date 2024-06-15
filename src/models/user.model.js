import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// userSchema.pre("save", async function () {
//   console.log("Pre methods", this);
//   if (User.isModified("password")) {
//     next();
//   }
// });

const User = mongoose.model("User", userSchema);

export default User;
