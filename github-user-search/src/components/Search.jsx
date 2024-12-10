import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [repoCount, setRepoCount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(username); // Use username only for GitHub user search
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input
                type="number"
                placeholder="Minimum Repositories"
                value={repoCount}
                onChange={(e) => setRepoCount(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
