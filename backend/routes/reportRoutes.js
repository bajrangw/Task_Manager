const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddlewares");
const { exportTasksReport, exportUsersReport } = require("../controllers/reportControllers");

const router = express.Router();

// Export all tasks as Excel
router.get("/export/tasks", protect, adminOnly, exportTasksReport);

// Export user-task report as Excel
router.get("/export/users", protect, adminOnly, exportUsersReport);

module.exports = router;
