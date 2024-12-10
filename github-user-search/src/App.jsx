import React, { useState } from 'react';
import Search from './components/Search';
import githubServices from './services/githubService';
import './index.css';

function App() {
    const [users, setUsers] = useState([]);

    const handleSearchResults = (results) => {
        setUsers(results);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">GitHub User Search</h1>
            <Search onSearch={handleSearchResults} />
            <div className="mt-6 w-full max-w-lg">
                {users.length > 0 ? (
                    users.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white shadow-md rounded-lg p-4 mb-4 text-center"
                        >
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="w-20 h-20 rounded-full mx-auto"
                            />
                            <h2 className="text-lg font-semibold mt-2">{user.login}</h2>
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 mt-2 block hover:underline"
                            >
                                View Profile
                            </a>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 text-center mt-4">No users to display</p>
                )}
            </div>
        </div>
    );
}

export default App;
