import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import Signup from './Signup';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />} />  
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
