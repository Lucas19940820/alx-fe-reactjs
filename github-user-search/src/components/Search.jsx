import React, { useState } from 'react';
import githubServices from '../services/githubService';

const { fetchUsersWithFilters } = githubServices;

function Search({ onSearch }) {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');

    const handleSubmit = async () => {
        if (!username) return alert('Please enter a username');
        if (!location) return alert('Please enter a location');
        if (!minRepos) return alert('Please set a minimum repo count');

        try {
            const result = await fetchUsersWithFilters({
                username,
                location,
                minRepos: parseInt(minRepos),
            });

            onSearch(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Search for GitHub Users</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                className="border px-3 py-2 mb-2 rounded-md w-full"
            />
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter Location"
                className="border px-3 py-2 mb-2 rounded-md w-full"
            />
            <input
                type="number"
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                placeholder="Minimum Repos"
                className="border px-3 py-2 mb-2 rounded-md w-full"
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
            >
                Search
            </button>
        </div>
    );
}

export default Search;
