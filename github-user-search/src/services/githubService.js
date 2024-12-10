import axios from 'axios';

const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error('User not found');
    }
};

const fetchUsersWithFilters = async ({ username, location, repoCount }) => {
    try {
        const query = `q=${username}+location:${location}+repos:>${repoCount}`;
        const response = await axios.get(`https://api.github.com/search/users?${query}`);
        return response.data.items;
    } catch (error) {
        throw new Error('Error fetching users');
    }
};

const githubServices = { fetchUserData, fetchUsersWithFilters };

export default githubServices;
