import React, { useState } from 'react';
import Search from './components/Search';
import githubServices from './services/githubService';

const { fetchUserData } = githubServices;

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (username) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchUserData(username);
            setUser(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>GitHub User Search</h1>
            <Search onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <img src={user.avatar_url} alt={user.login} width="100" />
                    <h2>{user.login}</h2>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
}

export default App;
