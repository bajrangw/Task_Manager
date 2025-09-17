export const BASE_URL = "http://localhost:8000";

// utils/apiPaths.js
export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register", // Ragister a new uer (Admin or Member)
        LOGIN: "/api/auth/login", // Authenticate user & return JWT token
        GET_PROFILE: "/api/auth/profile", // Get logged-in user details
    },

    USERS: {
        GET_ALL_USERS: "/api/users", // Get all users (Admin only)
        GET_USER_BY_ID: (userId) => `/api/users/${userId}`, // Get user by ID
        CREATE_USER: "/api/users", // Create a new user (Admin only)
        UPDATE_USER: (userId) => `/api/users/${userId}`, // Update user details
        DELETE_USER: (userId) => `/api/users/${userId}`, // Delete user
    },

    TASKS: {
        GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", // Get Dashboard Data
        GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", // Get user Dashboard
        GET_ALL_TASKS: "/api/tasks", // Get all tasks (Admin: all, User: only assigned)
        GET_TASKS_BY_ID: (taskId) => `/api/tasks/${taskId}`, // Get task by Id
        CREATE_TASK: "/api/tasks", // Create a new task (Admin only)
        UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, // Update task details
        DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, // Delete a tasks (Admin only)

        UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, // Update task
        UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`, // Update todo checklist
    },

    REPORTS: {
        EXPORT_TASKS: "/api/reports/export/tasks", // Download all task as an Excal
        EXPORT_USERS: "/api/reports/export/users", // Download usr-task report
    },

    IMAGE: {
        UPLOAD_IMAGE: "/api/auth/upload-image",
    },
};