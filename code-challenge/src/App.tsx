import React from 'react';
import logo from './logo.svg';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={undefined}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
