import React, { useState } from 'react';
import githubServices from '../services/githubService';

const { fetchUserData } = githubServices;

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username);
      if (data && data.login && data.avatar_url) {
        setUserData(data);
        onSearch(data);
      }
    } catch (err) {
      setError('Looks like we can’t find the user');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const renderUserDetails = () => {
    return (
      <>
        {userData && userData.login ? (
          <div className="mt-4 text-center">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold">{userData.login}</h3>
          </div>
        ) : null}
      </>
    );
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
      {renderUserDetails()}
    </form>
  );
};

export default Search;
