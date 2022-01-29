import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState();
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(name);
  }

  function handleInputChange(e) {
    console.log(e.target.value)
    setName(e.target.value)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className='LoginContainer'>
          <h2>Hello, {fullName}</h2>
          <label>UserName</label>
          <input name='name' onChange={handleInputChange} type='text' placeholder='enter Username' />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
