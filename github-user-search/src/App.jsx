import React, { useState } from 'react';
import Search from './components/Search';
import githubServices from './services/githubService';
import "./index.css";

const { fetchUserData } = githubServices;

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (username) => {
        setLoading(true);
        setError(null);
        setUser(null); // Clear previous user data
        try {
            const data = await fetchUserData(username);
            setUser(data);
        } catch (err) {
            setError("Looks like we can't find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">GitHub User Search</h1>
            <Search onSearch={handleSearch} />
            {loading && <p className="text-blue-500 mt-4">Loading...</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {user && (
                <div className="mt-6 bg-white shadow-lg p-4 rounded-lg text-center max-w-sm w-full">
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-24 h-24 rounded-full mx-auto"
                    />
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
