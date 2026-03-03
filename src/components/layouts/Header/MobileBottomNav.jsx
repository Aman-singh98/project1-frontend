/**
 * Mobile bottom nav links
 */
// import { Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { ROUTERS } from "../../../constants/router";

// function MobileBottomNav() {
// 	const mobileNavItems = [
// 		{ path: "/", label: "Home", icon: "bi-house-door-fill", end: true },
// 		{ path: ROUTERS.About, label: "About", icon: "bi-info-circle-fill" },
// 		{ path: ROUTERS.Courses, label: "Courses", icon: "bi-mortarboard-fill" },
// 		{ path: ROUTERS.Gallery, label: "Gallery", icon: "bi-newspaper" },
// 		{ path: ROUTERS.FAQ, label: "FAQ", icon: "bi-question-circle-fill" }
// 	];

// 	return (
// 		<div className="mobile-bottom-nav d-lg-none">
// 			<Nav className="justify-content-around text-center">
// 				{mobileNavItems?.map((item) => (
// 					<Nav.Link
// 						key={item.path}
// 						as={NavLink}
// 						to={item.path}
// 						end={item.end}
// 					>
// 						<i className={`bi ${item.icon}`} />
// 						<div>{item.label}</div>
// 					</Nav.Link>
// 				))}
// 			</Nav>
// 		</div>
// 	);
// }

// export default MobileBottomNav;

/**
 * Mobile Bottom Navigation with More Bottom Sheet
 */
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MoreBottomSheet from "./MoreBottomSheet";
import { ROUTERS } from "../../../constants/router";

function MobileBottomNav() {
	const [showMore, setShowMore] = useState(false);

	const navItems = [
		{ path: "/", label: "Home", icon: "bi-house-door-fill", end: true },
		{ path: ROUTERS.About, label: "About", icon: "bi-info-circle-fill" },
		{ path: ROUTERS.Courses, label: "Courses", icon: "bi-mortarboard-fill" },
		{ path: ROUTERS.Gallery, label: "Gallery", icon: "bi-images" }
	];

	return (
		<>
			<div className={`mobile-bottom-nav d-lg-none ${showMore ? "hide-nav" : ""}`}>
				<Nav className="mobile-nav-wrapper">
					{navItems.map((item) => (
						<Nav.Link
							key={item.path}
							as={NavLink}
							to={item.path}
							end={item.end}
							className="mobile-nav-link"
						>
							<i className={`bi ${item.icon}`} />
							<span>{item.label}</span>
						</Nav.Link>
					))}

					<Nav.Link
						onClick={() => setShowMore(true)}
						className="mobile-nav-link"
					>
						<i className="bi bi-grid-fill" />
						<span>More</span>
					</Nav.Link>
				</Nav>
			</div>

			<MoreBottomSheet
				show={showMore}
				handleClose={() => setShowMore(false)}
			/>
		</>
	);
}

export default MobileBottomNav;
