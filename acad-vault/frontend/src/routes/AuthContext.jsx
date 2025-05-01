import React from "react";
import axios from "axios";
import { useEffect, useState, createContext } from "react";

const AuthContext = createContext();

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserAuthData = async () => {
            try {
                const authDataRes = await axios.get(`/api/auth/who`);
                if (authDataRes.ok) {
                    setUserId(authDataRes.data.authData.userId);
                    setUserRole(authDataRes.data.authData.userId);
                } else {
                    setUserId(null);
                    setUserRole(null);
                }
            } catch (error) {
                console.log(error);
                setUserId(null);
                setUserRole(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserAuthData();
    }, []);

    return (
        <AuthContext.Provider value={{ userId, userRole, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
