# Task Manager

A full-stack Task Manager application built with **React**, **Node.js**, **Express**, **MongoDB**, and **Vercel deployment**.  
It allows users to manage tasks, assign users, and track progress with authentication and role-based access.

---

## 🚀 Live Demo

- **Frontend:** [https://task-manager-frontend-ten-steel.vercel.app](https://task-manager-frontend-ten-steel.vercel.app)  

---

## 🛠 Features

### Authentication
- Register & Login
- JWT-based authentication
- Role-based redirects (Admin / User)

### Tasks
- Create, update, delete tasks (Admin only)
- Update task status
- Assign tasks to users
- Todo checklist per task

### Users
- View all users (Admin)
- Update user profile

### Reports
- Export tasks & user-task reports (Excel/PDF)

### UI/UX
- Responsive layout with React & TailwindCSS
- Auth screens with background images & illustrations

---

## 💻 Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT
- **Deployment:** Vercel (Frontend & Backend)
- **File Uploads:** Multer

📁 **Folder Structure**
- task-manager/
├─ backend/
│  ├─ controllers/
│  ├─ routes/
│  ├─ middlewares/
│  ├─ config/db.js
│  └─ server.js
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ assets/
│  │  └─ main.jsx
│  ├─ public/
│  │  └─ favicon.ico
│  └─ vite.config.js
├─ .gitignore
├─ package.json
└─ README.md

- **Environment Variables:** `.env.development`, `.env.production`

---
