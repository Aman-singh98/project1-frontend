import { Button, Image } from "react-bootstrap";
import { IMAGES } from "../../../constants/images";
import { useNavigate } from "react-router-dom";

function Sidebar({ activeSection, setActiveSection }) {
	const navigate = useNavigate();

	return (
		<div className="admin-sidebar">
			<div className="gov-header">
				<Image
					src={IMAGES.RED_LOGO}
					alt="Organization Logo"
					className="gov-logo"
					fluid
					rounded
				/>
				<div className="gov-title">
					<h5>ST JOHN AMBULANCE</h5>
					<span>INTERNATIONAL ASSOCIATION</span>
				</div>
			</div>
			<div className="admin-panel-header">
				<h6>Admin Panel</h6>
				<Button
					size="sm"
					className="home-btn"
					onClick={() => navigate("/")}
				>
					Home
				</Button>
			</div>
			<div className="sidebar-nav">
				{/* <Button
					className={`nav-btn ${activeSection === "dashboard" ? "active" : ""}`}
					onClick={() => setActiveSection("dashboard")}
				>
					Dashboard
				</Button> */}
				<Button
					className={`nav-btn ${activeSection === "kits" ? "active" : ""}`}
					onClick={() => setActiveSection("kits")}
				>
					Kits
				</Button>
				<Button
					className={`nav-btn ${activeSection === "internships" ? "active" : ""}`}
					onClick={() => setActiveSection("internships")}
				>
					Internships
				</Button>
				<Button
					className={`nav-btn ${activeSection === "courses" ? "active" : ""}`}
					onClick={() => setActiveSection("courses")}
				>
					Courses
				</Button>
				<Button
					className={`nav-btn ${activeSection === "queries" ? "active" : ""}`}
					onClick={() => setActiveSection("queries")}
				>
					Queries
				</Button>
				<Button
					className={`nav-btn ${activeSection === "subscribers" ? "active" : ""}`}
					onClick={() => setActiveSection("subscribers")}
				>
					Subscribers
				</Button>
				<Button
					className={`nav-btn ${activeSection === "users" ? "active" : ""}`}
					onClick={() => setActiveSection("users")}
				>
					Users
				</Button>
			</div>
		</div>
	);
}

export default Sidebar;
