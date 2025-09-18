require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User"); // adjust path if needed
const Task = require("./models/Task"); // adjust path if task images exist

const MONGO_URI = process.env.MONGO_URI;
const BACKEND_URL = process.env.BACKEND_URL || "https://task-manager-kappa-seven-78.vercel.app";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

async function updateImages() {
  try {
    // Users profile images
    await User.updateMany(
      { profileImage: { $regex: "http://localhost:8000/uploads" } },
      [{ $set: { profileImage: { $replaceOne: { input: "$profileImage", find: "http://localhost:8000", replacement: BACKEND_URL } } } }]
    );

    // Task images
    await Task.updateMany(
      { imageUrl: { $regex: "http://localhost:8000/uploads" } },
      [{ $set: { imageUrl: { $replaceOne: { input: "$imageUrl", find: "http://localhost:8000", replacement: BACKEND_URL } } } }]
    );

    console.log("✅ All image URLs updated successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error updating image URLs:", err);
    process.exit(1);
  }
}

updateImages();
