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

// Fetch users with specific filters like location and minimum repositories
const fetchUsersWithFilters = async ({ username, location, minRepos }) => {
    try {
        const query = `q=${username}+location:${location}+repos:>=${minRepos}`;
        const response = await axios.get(`https://api.github.com/search/users?${query}`);
        return response.data.items;
    } catch (error) {
        throw new Error('Error fetching users');
    }
};

const githubServices = { fetchUserData, fetchUsersWithFilters };

export default githubServices;
