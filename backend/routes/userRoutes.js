const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddlewares");
const { getUsers, getUsersById, deleteUser } = require("../controllers/userControllers");

const router = express.Router();

// User Management Routes
router.get("/", protect, adminOnly, getUsers); 
router.get("/:id", protect, getUsersById);


module.exports = router;