import { createContext, useContext, useState } from "react";
import axiosInstance, { setAccessToken } from "../api/axiosInstance";

/**
 * Auth Context
 * ------------
 * Provides global authentication state and methods.
 *
 * Responsibilities:
 * - Manage login/logout
 * - Store user role
 * - Keep access token in memory
 * - Provide authenticated state across app
 */

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // stores id + role
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    /**
     * Login function
     * Calls backend login endpoint
     * Stores access token in memory
     */
    const login = async (identifier, password) => {
        try {
            const response = await axiosInstance.post("/auth/login", {
                identifier,
                password,
            });

            const { accessToken } = response.data;

            setAccessToken(accessToken);

            /**
             * Decode minimal payload from token
             * Since backend already validates token,
             * we can safely extract role from payload.
             */
            const payload = JSON.parse(
                atob(accessToken.split(".")[1])
            );

            setUser({
                id: payload.id,
                role: payload.role,
            });

            setIsAuthenticated(true);

            return { success: true };

        } catch (error) {
            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    "Login failed",
            };
        }
    };

    /**
     * Logout function
     * Clears session on backend and frontend
     */
    const logout = async () => {
        try {
            await axiosInstance.post("/auth/logout");
        } catch (error) {
            // Ignore logout errors
        }

        setAccessToken(null);
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Custom hook to access Auth Context
 */
export const useAuth = () => {
    return useContext(AuthContext);
};
