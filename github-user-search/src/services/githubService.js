import axios from 'axios';

// Fetch user data by username
const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error('User not found');
    }
};

// Fetch users with filters such as location, username, and minimum repositories
const fetchUsersWithFilters = async ({ username, location, minRepos }) => {
    try {
        // Advanced API query structure
        const query = `https://api.github.com/search/users?q=${username}+location:${location}+repos:>=${minRepos}`;
        const response = await axios.get(query);
        return response.data.items;
    } catch (error) {
        throw new Error('Error fetching users');
    }
};

const githubServices = { fetchUserData, fetchUsersWithFilters };

export default githubServices;
