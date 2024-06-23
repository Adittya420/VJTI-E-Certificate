// constants.js
export const API_BASE_URL = "https://api.example.com";
export let USER = "admin";
export const setRole = (role) => {
    USER = role; // Update USER based on the role fetched from DB
};

export const isLoggedIn = "true";
