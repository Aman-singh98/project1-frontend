/**
 * Admin Profile Modal
 */
import { Modal, Button, Row, Col, Badge, Image } from "react-bootstrap";
import { IMAGES } from "../../../constants/images";

function maskAadhaar(aadhaar) {
	if (!aadhaar) return "";
	return `XXXX-XXXX-${aadhaar.slice(-4)}`;
}

function ProfileModal({ show, onHide, user }) {
	if (!user) return null;

	const initials = user.fullName ?.split(" ").map((n) => n[0]).join("").toUpperCase();

	return (
		<Modal
			show={show}
			onHide={onHide}
			centered
			dialogClassName="gov-profile-dialog"
			className="gov-profile-modal"
		>
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
			<Modal.Body>
				<div className="profile-header">
					<div className="profile-avatar">
						{initials}
					</div>
					<div className="profile-info">
						<h5>{user.fullName}</h5>
						<Badge
							bg={user.role === "admin" ? "danger" : "secondary"}
							className="role-badge"
						>
							{user.role.toUpperCase()}
						</Badge>
					</div>
				</div>
				<hr />
				<Row className="profile-details">
					<Col xs={12}>
						<label>Email Address</label>
						<div>{user.email}</div>
					</Col>
					<Col xs={12}>
						<label>Mobile Number</label>
						<div>{user.mobileNumber}</div>
					</Col>
					<Col xs={12}>
						<label>Aadhaar Number</label>
						<div>{maskAadhaar(user.aadhaarNumber)}</div>
					</Col>
					<Col xs={12}>
						<label>Account Created</label>
						<div>
							{new Date(user.createdAt).toLocaleDateString()}
						</div>
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Button className="gov-btn" onClick={onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ProfileModal;
