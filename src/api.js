// src/api.js
import axios from 'axios';

const API_URL = 'https://localhost:7146/api/cats'; // Adjust the URL as needed

export const getCats = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching cats:', error);
        throw error;
    }
};

export const addCat = async (cat) => {
    try {
        const response = await axios.post(API_URL, cat);
        return response.data;
    } catch (error) {
        console.error('Error adding cat:', error);
        throw error;
    }
};

// Add other functions for update and delete as needed
