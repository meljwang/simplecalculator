from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware  # Import CORSMiddleware


app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],)



class Numbers(BaseModel):
    num1: float
    num2: float

@app.get("/")
async def read_root():
    return {"message": "Simple Calculator API"}

@app.post("/add")
async def add(numbers: Numbers):
    result = numbers.num1 + numbers.num2
    return {"result": result}

@app.post("/subtract")
async def subtract(numbers: Numbers):
    result = numbers.num1 - numbers.num2
    return {"result": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
