/**
 * AdminGuard
 * ----------
 * Protects admin routes.
 * - Redirects to home if not admin
 * - Prevents unauthorized access
 */

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
// import axiosInstance from "../api/axiosInstance";

function AdminGuard({ children }) {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    async function checkAdmin() {
      try {
        const response = await axiosInstance.get("/user/profile");
        if (response.data.user.role === "admin") {
          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
      } catch {
        setAuthorized(false);
      }
    }

    checkAdmin();
  }, []);

  if (authorized === null) return null; // loading

  if (!authorized) return <Navigate to="/" replace />;

  return children;
}

export default AdminGuard;
