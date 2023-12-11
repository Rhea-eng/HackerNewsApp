// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; // Import the Header component
import PostDetails from './components/PostDetails';
import SearchResult from './components/SearchResult';

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Include the Header component */}
        <Routes>
          <Route path="/" element={<SearchResult />} />
          <Route path="/post/:objectId" element={<PostDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
