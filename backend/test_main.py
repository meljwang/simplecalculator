from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_addition():
    response = client.post("/add", json={"num1": 5, "num2": 3})
    assert response.status_code == 200
    assert response.json() == {"result": 8}

def test_subtraction():
    response = client.post("/subtract", json={"num1": 5, "num2": 3})
    assert response.status_code == 200
    assert response.json() == {"result": 2}

