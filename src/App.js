import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewsDetail from './components/NewsDetail';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <main className="flex-grow">
          {/* Definisikan Routes dan Route */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
