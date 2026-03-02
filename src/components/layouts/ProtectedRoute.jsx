/**
 * ProtectedRoute
 * --------------
 * Route guard component for authenticated users.
 *
 * Purpose:
 * - Prevents unauthenticated access to private routes.
 * - Redirects non-authenticated users to /login.
 *
 * Security:
 * - Relies on in-memory authentication state.
 * - Does NOT manage tokens directly.
 * - Does NOT perform role checks.
 *
 * Used For:
 * - Dashboard routes
 * - Profile routes
 * - Any user-level protected pages
 */

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;