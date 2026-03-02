/**
 * Component used for Nav bar 
 */
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ROUTERS } from "../../../constants/router";

function MainNavbar() {
	const { t } = useTranslation();
	const [showAbout, setShowAbout] = useState(false);

	return (
		<div className="gov-navbar d-none d-lg-block">
			<Nav>
				<Nav.Link as={NavLink} to="/" end>
					{t("header.navbar.home")}
				</Nav.Link>
				<NavDropdown
					title={t("header.navbar.about")}
					id="about-dropdown"
					show={showAbout}
					onMouseEnter={() => setShowAbout(true)}
					onMouseLeave={() => setShowAbout(false)}
					className="gov-dropdown"
				>
					<NavDropdown.Item as={NavLink} to={ROUTERS.About}>
						{t("header.navbar.aboutUs")}
					</NavDropdown.Item>
					<NavDropdown.Item as={NavLink} to={ROUTERS.Mission}>
						{t("header.navbar.mission")}
					</NavDropdown.Item>
					<NavDropdown.Item as={NavLink} to={ROUTERS.Vision}>
						{t("header.navbar.vision")}
					</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link as={NavLink} to={ROUTERS.Courses}>
					{t("header.navbar.courses")}
				</Nav.Link>
				<Nav.Link as={NavLink} to={ROUTERS.Gallery}>
					{t("header.navbar.gallery")}
				</Nav.Link>
				<Nav.Link as={NavLink} to={ROUTERS.FAQ}>
					{t("header.navbar.faqs")}
				</Nav.Link>
				<Nav.Link as={NavLink} to={ROUTERS.Blogs}>
					{t("header.navbar.blogs")}
				</Nav.Link>
			</Nav>
		</div>
	);
}

export default MainNavbar;
