// src/components/Home.js
import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./SearchResults.css"; // Import CSS file

const SearchResult = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      setResults(response.data.hits);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="home-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Hacker News"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.objectID}>
            <Link to={`/post/${result.objectID}`}>
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
