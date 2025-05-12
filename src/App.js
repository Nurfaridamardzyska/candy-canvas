import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import NewsDetail from './components/NewsDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <main className="flex-grow">
          {/* Definisikan Routes dan Route */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/:id" element={<NewsDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
