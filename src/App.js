import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>Just demos</h4>
      <form>
        <input type="text" id="username" name="username" placeholder="username"></input>
        <br/>
        <br/>
        <input type="password" id="password" name="password"></input>
        <br/>
        <br/>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default App;
