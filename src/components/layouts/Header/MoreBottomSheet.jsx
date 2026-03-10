/**
 * Bottom Sheet for More Options
 */
import { Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ROUTERS } from "../../../constants/router";

function MoreBottomSheet({ show, handleClose }) {
	const moreItems = [
		{ path: ROUTERS.Mission, label: "Mission", icon: "bi-bullseye" },
		{ path: ROUTERS.Vision, label: "Vision", icon: "bi-eye-fill" },
		{ path: ROUTERS.FAQ, label: "FAQ", icon: "bi-question-circle-fill" }
	];

	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			placement="bottom"
			className="mobile-more-sheet"
		>
			<div className="sheet-handle" />
			<Offcanvas.Body className="p-0">
				<div className="more-grid">
					{moreItems.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							onClick={handleClose}
							className="more-item"
						>
							<i className={`bi ${item.icon}`} />
							<span>{item.label}</span>
						</NavLink>
					))}
				</div>
			</Offcanvas.Body>
		</Offcanvas>
	);
}

export default MoreBottomSheet;