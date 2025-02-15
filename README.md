Simple Calculator
This repository contains a simple calculator application with both frontend and backend components. The frontend is built using React, and the backend is built with Python and FastAPI.

Prerequisites
Before setting up the application, ensure you have the following software installed:

Node.js (for frontend)
Python 3.x (for backend)
pip (Python package manager)
Setup Instructions
Backend Setup (Python + FastAPI)
Navigate to the backend directory:

bash
Copy
cd backend
Create a virtual environment (if you don't have one):

bash
Copy
python3 -m venv .venv
Activate the virtual environment:

On macOS/Linux:

bash
Copy
source .venv/bin/activate
On Windows:

bash
Copy
.venv\Scripts\activate
Install backend dependencies:

bash
Copy
pip install -r requirements.txt
If you don't have a requirements.txt file, you can manually install FastAPI and Uvicorn for the backend:

bash
Copy
pip install fastapi uvicorn
Run the backend server:

bash
Copy
uvicorn main:app --reload
This will start the backend server at http://127.0.0.1:8000.

Frontend Setup (React)
Navigate to the frontend directory:

bash
Copy
cd frontend
Install frontend dependencies:

bash
Copy
npm install
Run the frontend server:

bash
Copy
npm start
This will start the frontend server at http://localhost:3000.

Interaction Between Frontend and Backend
The frontend will send requests to the backend for performing calculations (addition and subtraction). The backend routes are:

Addition: POST http://127.0.0.1:8000/add
Subtraction: POST http://127.0.0.1:8000/subtract
Running Tests
For the Backend: Navigate to the backend directory and run the tests using pytest:

bash
Copy
cd backend
pytest
For the Frontend: You can test the React components by running:

bash
Copy
npm test
Troubleshooting
If you get errors related to FastAPI or test clients, install the necessary testing dependencies:

bash
Copy
pip install fastapi[test]
Make sure both the backend and frontend servers are running simultaneously for full functionality.

