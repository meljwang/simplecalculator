import React, { useState } from 'react'

export const HomePage = () => {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null); 
  const [result, setResult] = useState(null);

  // Parse firstNumber and secondNumber to backend to do addition and returns back result
  const handleAddition = async () => {
    const response = await fetch('http://127.0.0.1:8000/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ num1: parseFloat(firstNumber) || 0, num2: parseFloat(secondNumber) || 0}),
    });
    const data = await response.json(); 
    setResult(data.result);
    console.log(data); 
  };

  // Parse firstNumber and secondNumber to backend to do subtraction and returns back result
  const handleSubtraction = async () => {
    const response = await fetch('http://127.0.0.1:8000/subtract', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ num1: parseFloat(firstNumber) || 0, num2: parseFloat(secondNumber) || 0}),
    });
    const data = await response.json(); 
    setResult(data.result);
    console.log(data); 
  };


  return (
    <div>
      <h1>Simple Calculator</h1>
      <div>
        <h3>Enter First Number: </h3>
        <input 
          type="number" 
          value={firstNumber} 
          onChange={(e) => setFirstNumber(e.target.value)}   
        />
        <br></br>
        <h3>Enter Second Number: </h3>
        <input 
          type="number" 
          value={secondNumber} 
          onChange={(e) => setSecondNumber(e.target.value)} 
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
      </div>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  )
}