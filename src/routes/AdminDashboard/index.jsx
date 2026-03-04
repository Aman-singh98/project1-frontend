/**
 * Internship management
 */
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Courses from "./sections/Courses";
import DashboardHome from "./sections/DashboardHome";
import KitManagement from "./sections/KitManagement";
import InternshipManagement from "./sections/InternshipManagement";
import Users from "./sections/Users";
import Subscribers from "./sections/Subscribers";
import Queries from "./sections/Queries";

function AdminDashboard() {
	// States
	const [activeSection, setActiveSection] = useState("kits");

	function renderSection() {
		switch (activeSection) {
			case "dashboard":
				return <DashboardHome />;
			case "kits":
				return <KitManagement />;
			case "internships":
				return <InternshipManagement />;
			case "courses":
				return <Courses />;
			case "users":
				return <Users />;
			case "subscribers":
				return <Subscribers />;
			case "queries":
				return <Queries />;
			default:
				return <DashboardHome />;
		}
	}

	return (
		<div className="admin-layout">
			<Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
			<div className="admin-content">
				{renderSection()}
			</div>

		</div>
	);
}

export default AdminDashboard;