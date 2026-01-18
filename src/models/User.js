import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const USerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "you have to fill up this name."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "you have to fill up email."],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "please enter your email.",
      ],
    },
    password: {
      type: String,
      required: [true, "you have to fill up password."],
      minlength: [6, "the password should be at least 6 charecter."],
      // match: [
      //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      //   "please enter your password.",
      // ],
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);
USerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    next(error);
  }
});
// when login this method will check password
USerSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
const User = mongoose.models.User || mongoose.model("User", USerSchema);
