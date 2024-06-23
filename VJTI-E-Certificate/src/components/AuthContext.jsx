import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context for authentication
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            // Verify the token and get user info
            axios.get('http://localhost:3000/api/verifyToken', { 
                headers: { Authorization: `Bearer ${token}` } 
            })
            .then(response => {
                setIsLoggedIn(true);
                setUserRole(response.data.role);
            })
            .catch(error => {
                console.error('Error verifying token:', error);
                setIsLoggedIn(false);
                setUserRole(null);
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, userRole, setIsLoggedIn, setUserRole }}>
            {children}
        </AuthContext.Provider>
    );
};
