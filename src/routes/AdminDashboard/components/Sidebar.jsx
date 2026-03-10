import { Button, Image } from "react-bootstrap";
import { IMAGES } from "../../../constants/images";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Sidebar({ activeSection, setActiveSection }) {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<div className="admin-sidebar">
			<div className="gov-header">
				<Image
					src={IMAGES.RED_LOGO}
					alt={t("admin.sidebar.logoAlt")}
					className="gov-logo"
					fluid
					rounded
				/>
				<div className="gov-title">
					<h5>{t("admin.sidebar.titleLine1")}</h5>
					<span>{t("admin.sidebar.titleLine2")}</span>
				</div>
			</div>
			<div className="admin-panel-header">
				<h6>{t("admin.sidebar.panelTitle")}</h6>
				<Button
					size="sm"
					className="home-btn"
					onClick={() => navigate("/")}
				>
					{t("admin.sidebar.homeButton")}
				</Button>
			</div>
			<div className="sidebar-nav">
				<Button
					className={`nav-btn ${activeSection === "kits" ? "active" : ""}`}
					onClick={() => setActiveSection("kits")}
				>
					{t("admin.nav.kits")}
				</Button>
				<Button
					className={`nav-btn ${activeSection === "internships" ? "active" : ""}`}
					onClick={() => setActiveSection("internships")}
				>
					{t("admin.nav.internships")}
				</Button>
				<Button
					className={`nav-btn ${activeSection === "courses" ? "active" : ""}`}
					onClick={() => setActiveSection("courses")}
				>
					{t("admin.nav.courses")}
				</Button>
				<Button
					className={`nav-btn ${activeSection === "queries" ? "active" : ""}`}
					onClick={() => setActiveSection("queries")}
				>
					{t("admin.nav.queries")}
				</Button>
				<Button
					className={`nav-btn ${activeSection === "subscribers" ? "active" : ""}`}
					onClick={() => setActiveSection("subscribers")}
				>
					{t("admin.nav.subscribers")}
				</Button>
				<Button
					className={`nav-btn ${activeSection === "users" ? "active" : ""}`}
					onClick={() => setActiveSection("users")}
				>
					{t("admin.nav.users")}
				</Button>
				<Button
					className={`nav-btn ${activeSection === "orderKits" ? "active" : ""}`}
					onClick={() => setActiveSection("orderKits")}
				>
					Order kits
				</Button>
				<Button
					className={`nav-btn ${activeSection === "courseEnrollments" ? "active" : ""}`}
					onClick={() => setActiveSection("courseEnrollments")}
				>
					Course enrollments
				</Button>
			</div>
		</div>
	);
}

export default Sidebar;
