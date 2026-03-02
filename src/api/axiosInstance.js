/**
 * axiosInstance.js
 * ----------------
 * Centralized HTTP client with:
 * - Auto Authorization header
 * - Auto refresh token handling
 */

import axios from "axios";
import { getAccessToken, setAccessToken, clearAccessToken } from "../utils/tokenManger";

// Define the current user, if user is login in
let currentUser = null;
export function setCurrentUser(user) {
  currentUser = user;
}
export function getCurrentUser() {
  return currentUser;
}
export function clearCurrentUser() {
  currentUser = null;
}

const axiosInstance = axios.create({
	baseURL: "http://localhost:5000/api",
	// baseURL: " http://10.156.7.148:5173/api",
	withCredentials: true
});

/**
 * Attach access token automatically
 */
axiosInstance.interceptors.request.use((config) => {
	const token = getAccessToken();
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

/**
 * Auto-refresh on 401
 */
axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				// const response = await axiosInstance.get("/auth/refresh", { withCredentials: true });
				const response = await axios.get(
					"http://localhost:5000/api/auth/refresh",
					{ withCredentials: true }
				);

				setAccessToken(response.data.accessToken);

				originalRequest.headers.Authorization =
					`Bearer ${response.data.accessToken}`;

				return axiosInstance(originalRequest);

			} catch (refreshError) {
				clearAccessToken();
				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	}
);

export default axiosInstance;
