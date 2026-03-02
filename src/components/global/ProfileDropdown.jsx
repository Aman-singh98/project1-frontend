/**
 * ProfileDropdown.jsx
 * -------------------
 * Custom Bootstrap dropdown matching provided UI design.
 *
 * Features:
 * - Greeting header section
 * - Divider
 * - Profile option
 * - Dashboard option
 * - Logout option (styled red)
 * - Admin-only dashboard visibility
 */

import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProfileDropdown({ user, handleLogout }) {
    const navigate = useNavigate();

    return (
        <Dropdown align="end">
            <Dropdown.Toggle
                variant="light"
                className="rounded-circle border d-flex align-items-center justify-content-center"
                style={{ width: "40px", height: "40px" }}
            >
                {user?.fullName?.charAt(0)?.toUpperCase()}
            </Dropdown.Toggle>
            <Dropdown.Menu
                className="shadow p-0"
                style={{
                    minWidth: "220px",
                    borderRadius: "12px",
                    border: "1px solid #28a745",
                    overflow: "hidden",
                }}
            >
                {/* Greeting Section */}
                <div
                    className="px-3 py-2"
                    style={{
                        backgroundColor: "#e9f7ef",
                        fontWeight: "500",
                    }}
                >
                    Hello, {user?.fullName}
                </div>
                <Dropdown.Divider className="m-0" />
                {/* Profile */}
                <Dropdown.Item
                    onClick={() => navigate("/profile")}
                    className="d-flex align-items-center gap-2"
                >
                    <i className="bi bi-person" />
                    Profile
                </Dropdown.Item>
                {/* Dashboard (Admin Only) */}
                {user?.role === "admin" && (
                    <Dropdown.Item
                        onClick={() => navigate("/admin/dashboard")}
                        className="d-flex align-items-center gap-2"
                    >
                        <i className="bi bi-grid" />
                        Dashboard
                    </Dropdown.Item>
                )}
                <Dropdown.Divider className="m-0" />
                {/* Logout */}
                <Dropdown.Item onClick={handleLogout} className="text-danger fw-semibold">
                    Logout
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ProfileDropdown;
