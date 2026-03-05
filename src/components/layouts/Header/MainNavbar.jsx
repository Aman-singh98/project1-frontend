/**
 * Component used for Nav bar 
 */
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTERS } from "../../../constants/router";

function MainNavbar() {
	const { t } = useTranslation();

	return (
		<div className="gov-navbar d-none d-lg-block">
			<Nav>
				<Nav.Link as={NavLink} to="/" end>
					{t("header.navbar.home")}
				</Nav.Link>
				<Nav.Link as={NavLink} to={ROUTERS.About}>
					{t("header.navbar.aboutUs")}
				</Nav.Link>
				<Nav.Link as={NavLink} to={ROUTERS.Mission}>
					{t("header.navbar.mission")}
				</Nav.Link>
				<Nav.Link as={NavLink} to={ROUTERS.Vision}>
					{t("header.navbar.vision")}
				</Nav.Link>
				<Nav.Link as={NavLink} to={ROUTERS.Courses}>
					{t("header.navbar.courses")}
				</Nav.Link>
				<Nav.Link as={NavLink} to={ROUTERS.Internship}>
					{t("header.topbar.internship")}
				</Nav.Link>
				<Nav.Link as={NavLink} to={ROUTERS.Gallery}>
					{t("header.navbar.gallery")}
				</Nav.Link>
				<Nav.Link as={NavLink} to={ROUTERS.FAQ}>
					{t("header.navbar.faqs")}
				</Nav.Link>
			</Nav>
		</div>
	);
}

export default MainNavbar;
