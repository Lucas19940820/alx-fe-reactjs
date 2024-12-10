import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === '') {
            alert('Please enter a GitHub username');
            return;
        }
        onSearch(username);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 shadow rounded-lg">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
                Search
            </button>
        </form>
    );
};

export default Search;
