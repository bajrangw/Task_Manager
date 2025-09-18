// utils/apiPaths.js

// Use environment variable (set in Vercel or .env.local)
// Example: VITE_BACKEND_URL=https://task-manager-api.vercel.app
const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const API_PATHS = {
  AUTH: {
    REGISTER: `${API_BASE}/api/auth/register`, // Register a new user (Admin or Member)
    LOGIN: `${API_BASE}/api/auth/login`, // Authenticate user & return JWT token
    GET_PROFILE: `${API_BASE}/api/auth/profile`, // Get logged-in user details
  },

  USERS: {
    GET_ALL_USERS: `${API_BASE}/api/users`, // Get all users (Admin only)
    GET_USER_BY_ID: (userId) => `${API_BASE}/api/users/${userId}`, // Get user by ID
    CREATE_USER: `${API_BASE}/api/users`, // Create a new user (Admin only)
    UPDATE_USER: (userId) => `${API_BASE}/api/users/${userId}`, // Update user details
    DELETE_USER: (userId) => `${API_BASE}/api/users/${userId}`, // Delete user
  },

  TASKS: {
    GET_DASHBOARD_DATA: `${API_BASE}/api/tasks/dashboard-data`, // Get Dashboard Data
    GET_USER_DASHBOARD_DATA: `${API_BASE}/api/tasks/user-dashboard-data`, // Get user Dashboard
    GET_ALL_TASKS: `${API_BASE}/api/tasks`, // Get all tasks
    GET_TASKS_BY_ID: (taskId) => `${API_BASE}/api/tasks/${taskId}`, // Get task by Id
    CREATE_TASK: `${API_BASE}/api/tasks`, // Create a new task (Admin only)
    UPDATE_TASK: (taskId) => `${API_BASE}/api/tasks/${taskId}`, // Update task details
    DELETE_TASK: (taskId) => `${API_BASE}/api/tasks/${taskId}`, // Delete task
    UPDATE_TASK_STATUS: (taskId) => `${API_BASE}/api/tasks/${taskId}/status`, // Update task status
    UPDATE_TODO_CHECKLIST: (taskId) => `${API_BASE}/api/tasks/${taskId}/todo`, // Update todo checklist
  },

  REPORTS: {
    EXPORT_TASKS: `${API_BASE}/api/reports/export/tasks`, // Download all tasks as Excel
    EXPORT_USERS: `${API_BASE}/api/reports/export/users`, // Download user-task report
  },

  IMAGE: {
    UPLOAD_IMAGE: `${API_BASE}/api/auth/upload-image`,
  },
};
