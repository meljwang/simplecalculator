Simple Calculator


# Prerequisites
Before setting up the application, ensure you have the following software installed:
- Node.js (for frontend)
- Python 3.x (for backend)
- pip (Python package manager


# Backend Setup (Python + FastAPI)
Navigate to the backend directory:
- cd backend
- python3 -m venv .venv
- source .venv/bin/activate
- pip install fastapi uvicorn
- uvicorn main:app --reload
This will start the backend server at http://127.0.0.1:8000.

# Frontend Setup (React)
Navigate to the frontend directory:
- cd frontend
- npm install
- npm start
This will start the frontend server at http://localhost:3000.


# Backend Routes
Addition: POST http://127.0.0.1:8000/add
Subtraction: POST http://127.0.0.1:8000/subtract

# Unit Testing
Navigate to the backend directory and run the tests:
- cd backend
- pytest





