/**
 * AdminLayout.jsx
 * ----------------
 * Layout wrapper for admin section.
 *
 * Responsibilities:
 * - Provide admin-specific layout
 * - Render admin navigation (if needed)
 * - Render protected admin content
 */

import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default AdminLayout;
