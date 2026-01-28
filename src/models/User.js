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
      required: [true, "Password is required."],
      minlength: [8, "Password must be at least 8 characters long."],
      select: false, // ডিফল্টভাবে ডাটাবেস কোয়েরিতে পাসওয়ার্ড আসবে না (নিরাপত্তার জন্য)
      validate: {
        validator: function (value) {
          // অন্তত ১টি বড় হাতের অক্ষর, ১টি ছোট হাতের অক্ষর এবং ১টি সংখ্যা থাকতে হবে
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
        },
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
      },
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  },
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
