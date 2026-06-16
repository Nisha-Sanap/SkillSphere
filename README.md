# SkillSphere - Full Stack MERN Education Platform

SkillSphere is a modern, production-ready MERN stack application designed for online learning and skill development. It features a clean, responsive UI with JWT-based authentication and a role-based dashboard.

## 🚀 Features

- **Authentication System**:
  - Secure JWT-based registration and login.
  - Password hashing with Bcrypt.
  - Role-based access control (User/Admin).
  - Protected Dashboard and Profile routes.
  - Persistent login using local storage.

- **Frontend (React)**:
  - React 18+ with Functional Components and Hooks.
  - Dynamic routing with React Router 6.
  - Modern UI with **Tailwind CSS**.
  - Smooth micro-animations with **Framer Motion**.
  - Form validation and responsive layouts.
  - Global state management using Context API.
  - Interactive icons from React Icons.

- **Backend (Node + Express)**:
  - Production-ready MVC architecture.
  - RESTful API design.
  - MongoDB integration with Mongoose schemas.
  - Centralized error handling and async middleware.
  - Security middlewares (CORS).

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, Axios, React Icons.
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt.js.
- **Root Management**: Concurrently (run both servers with one command).

## 📁 Project Structure

```text
skillsphere/
├── backend/            # Express Server
│   ├── config/         # DB Connection
│   ├── controllers/    # API Logics
│   ├── middleware/     # Auth & Error Handlers
│   ├── models/         # Mongoose Schemas
│   ├── routes/         # API Routes
│   └── server.js       # Entry Point
├── frontend/           # React App
│   ├── src/
│   │   ├── api/        # Axios Setup
│   │   ├── components/ # Reusable UI components
│   │   ├── context/    # Global State
│   │   ├── pages/      # Route Components
│   │   └── App.jsx     # App Main Structure
└── package.json        # Root scripts for management
```

## ⚙️ Prerequisites

- Node.js (v16.14.0 or higher)
- MongoDB (Running locally or MongoDB Atlas)
- npm or yarn

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <repository_url>
cd skillsphere
```

### 2. Install Dependencies
```bash
# In the root directory
npm run install-all
```

### 3. Setup Environment Variables
- In `backend/.env`, set your `MONGO_URI` and `JWT_SECRET`.
- In `frontend/.env`, set your `VITE_API_URL`. (Default is `http://localhost:5000/api`)

### 4. Run the Application
```bash
# In the root directory
npm run dev
```
The frontend will run on `http://localhost:5173` and the backend on `http://localhost:5000`.

## 📦 Deployment

### Backend
1. Host on Render, Heroku, or DigitalOcean.
2. Set environment variables on the hosting platform.
3. Use a MongoDB Atlas cluster for the database.

### Frontend
1. Host on Vercel, Netlify, or AWS Amplify.
2. Connect to the production backend URL in `VITE_API_URL`.

---

Created with ❤️ by Antigravity.
