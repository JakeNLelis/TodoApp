import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email Address is required."],
    unique: [true, "Email is already used."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
