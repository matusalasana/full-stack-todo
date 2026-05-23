<!-- Banner -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=1D4ED8&height=140&section=header"/>

# 📝 Full-Stack Todo Application

> A modern full-stack Todo application built with **React (Vite)**, **Node.js (Express)**, and **PostgreSQL**.

This project demonstrates full-stack development concepts including authentication-ready backend design, REST APIs, relational database structure, and a clean responsive frontend UI.

---

## ✨ Features

### 📌 Core Functionality
- Create, update, delete todos
- Mark todos as completed
- Filter by status and priority
- Due date support
- Clean and responsive UI

---

### 🎨 Frontend (React + Vite)
- React with Hooks
- Component-based architecture
- Axios API integration
- Responsive UI design
- Real-time state updates

---

### ⚙️ Backend (Node.js + Express)
- RESTful API design
- PostgreSQL integration (pg driver)
- Authentication-ready structure (JWT setup included)
- Input validation & error handling
- CORS enabled API

---

### 🗄️ Database (PostgreSQL)
- Users & Todos relational schema
- Foreign key relationships
- Status & priority constraints
- Timestamp tracking

---

## 🛠️ Tech Stack

**Frontend**
- React 19
- Vite
- JavaScript
- Axios

**Backend**
- Node.js
- Express.js
- PostgreSQL
- bcryptjs
- jsonwebtoken

---

## 📁 Project Structure
```bash
todoapp/
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── db.js
│   │   ├── routes.js
│   │   └── controllers/
│   ├── .env                  
│   ├── .env.example 
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── vite.config.js
│   └── package.json
└── README.md
```
## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **PostgreSQL** (v14 or higher)
- **npm** or **yarn**

### Clone the Repository
```bash
git clone <git@github.com:matusalasana/full-stack-todo.git>
cd todoapp
```

### BACKEND SETUP
```bash
cd backend
npm install
```

### 1. Configure PostgreSQL
```bash
# Create database
CREATE DATABASE todo_db;

# Connect to database
\c todo_db

# Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

# Create todos table
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(200) NOT NULL,
    description TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed')),
    priority VARCHAR(10) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    due_date DATE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
### 2. Environment Variables
```bash
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=todo_db
DB_PASSWORD=your_password
DB_PORT=5432
```

### FRONTEND SETUP
```bash
cd frontend
npm install
```
### 1. Create frontend/.env
```bash
VITE_API_URL=http://localhost:5000/api
```

### 2. Run the Application
Terminal 2 - Frontend Development
```bash
cd backend
npm run dev
```
Server runs at: http://localhost:5000

Terminal 2 - Frontend Development
```bash
cd frontend
npm run dev
```
App runs at: http://localhost:5173

### 📖 API Documentation
```bash
Base URL: http://localhost:5000/api

Endpoints

1.Todos

GET /todos - Get all todos
GET /todos/:id - Get single todo
POST /todos - Create new todo
PUT /todos/:id - Update todo
DELETE /todos/:id - Delete todo
PATCH /todos/:id/complete - Mark as complete

2.Users

GET /users - Get all users
POST /users - Create new user
POST /users/login - User login
```
## 👨‍💻 Author

### Sana — Full-Stack Developer

### THANK YOU FOR TAKING YOUR TIME TO READ THIS

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=1D4ED8&height=140&section=footer"/>
