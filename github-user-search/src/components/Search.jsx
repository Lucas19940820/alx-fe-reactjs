import React, { useState } from 'react';
import githubServices from '../services/githubService';

const { fetchUserData } = githubServices;

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userDataList, setUserDataList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username);

      if (data) {
        // Simulate multiple search results with the same data for demonstration purposes
        const mockResults = [data, data, data]; // Mocking multiple items with `.map`
        setUserDataList(mockResults);
        onSearch(data);
      } else {
        setError('Looks like we cant find the user');
      }
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-4"
    >
      <input
        type="text"
        placeholder="Search GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className={`${
          loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500'
        } px-4 py-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Search'}
      </button>
      {error && (
        <p className="text-red-500 mt-2 text-center">
          {error}
        </p>
      )}
      {userDataList.map((user, index) => (
        <div
          key={index}
          className="mt-2 bg-white shadow-lg p-4 rounded-lg text-center max-w-sm w-full"
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full mx-auto"
          />
          <h3 className="text-lg font-semibold">{user.login}</h3>
          {/* Display location if it exists */}
          {user.location && (
            <p className="text-sm text-gray-600 mt-1">
              {user.location}
            </p>
          )}
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mt-2 block hover:underline"
          >
            View Profile
          </a>
        </div>
      ))}
    </form>
  );
};

export default Search;
