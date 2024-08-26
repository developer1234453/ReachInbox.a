import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import OneBox from './pages/onebox';
import Reply from './pages/reply';
import Header from './components/Header';
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/onebox" element={<OneBox />} />
        <Route path="/reply" element={<Reply />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
