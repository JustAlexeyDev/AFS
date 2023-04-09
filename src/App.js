// CSS
import './App.css';
import React, { useState } from 'react';
// Components
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      {/* <Home /> */}
      <Register />
    </div>
  );
}

export default App;
