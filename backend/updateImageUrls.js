require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User"); // adjust path if needed
const Task = require("./models/Task"); // adjust path if needed

const MONGO_URI = process.env.MONGO_URI;
const BACKEND_URL = process.env.BACKEND_URL || "https://task-manager-kappa-seven-78.vercel.app";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const updateUrls = async () => {
  try {
    // Update user profile images
    const users = await User.find({ profileImage: { $regex: "localhost:8000/uploads" } });
    for (let user of users) {
      user.profileImage = user.profileImage.replace("http://localhost:8000", BACKEND_URL);
      await user.save();
    }

    // Update task images (if any)
    const tasks = await Task.find({ imageUrl: { $regex: "localhost:8000/uploads" } });
    for (let task of tasks) {
      task.imageUrl = task.imageUrl.replace("http://localhost:8000", BACKEND_URL);
      await task.save();
    }

    console.log("✅ Image URLs updated successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error updating image URLs:", err);
    process.exit(1);
  }
};

updateUrls();
