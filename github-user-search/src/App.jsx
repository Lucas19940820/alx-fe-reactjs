import React, { useState } from 'react';
import Search from './components/Search';
import './index.css';

function App() {
  const [user, setUser] = useState(null);

  const handleUserData = (data) => {
    setUser(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">GitHub User Search</h1>
      <Search onSearch={handleUserData} />
      {user && (
        <div className="mt-6 bg-white shadow-lg p-4 rounded-lg text-center max-w-sm w-full">
          <h2 className="text-xl font-semibold mt-4">{user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mt-2 block hover:underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
