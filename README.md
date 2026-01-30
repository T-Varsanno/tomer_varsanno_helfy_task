# Task Manager App

A simple full-stack Task Manager application built as a home assignment.

The app allows creating, viewing, updating, and deleting tasks using a React frontend and an Express.js backend.



## Tech Stack

- Frontend: React (Vite)
- Backend: Node.js + Express
- Styling: Plain CSS
- Data storage: In-memory (no database)


## How to Run the Project

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

---

### Backend Setup

1. Open a terminal
2. Navigate to the backend folder:

   cd task-manager/backend

   npm install

   node server.js
   

The backend runs on:
http://localhost:4000

You can verify it by opening:
http://localhost:4000/api/tasks

### Frontend Setup


Open a new terminal (keep the backend running)

Navigate to the frontend folder:

cd task-manager/frontend

npm install

npm run dev

The frontend runs on:
http://localhost:5173

### API Documentation

Base URL:API Documentation

Endpoints:


-GET /api/tasks

Returns all tasks.


-POST /api/tasks

Create a new task.


-PUT /api/tasks/:id

Update an existing task.


-DELETE /api/tasks/:id

Delete a task.


-PATCH /api/tasks/:id/toggle

Toggle task completion status.


### Time Spent (Approximate)

-Project setup & backend API: ~1.5 hours

-Frontend components & API integration: ~2 hours

-Styling, debugging, and documentation: ~30 minutes

-Total: ~4 hours