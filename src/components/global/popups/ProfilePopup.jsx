/**
 * User/Admin Profile Modal
 */
import { useEffect, useState } from "react";
import { Modal, Button, Row, Col, Badge, Image, Spinner } from "react-bootstrap";
import { IMAGES } from "../../../constants/images";
import axiosInstance from "../../../api/axiosInstance";

function maskAadhaar(aadhaar) {
	if (!aadhaar) return "";
	return `XXXX-XXXX-${aadhaar.slice(-4)}`;
}

function ProfileModal({ show, onHide, user }) {
	const [courses, setCourses] = useState([]);
	const [kits, setKits] = useState([]);
	const [loading, setLoading] = useState(false);

	const identifier = user?.email || user?.mobileNumber;

	/**
	 * Fetch user data (courses + kits)
	 */
	useEffect(() => {
		if (!show) return;

		// Only for normal users
		if (user?.role === "admin") return;

		async function fetchUserData() {
			try {
				setLoading(true);

				const [coursesRes, kitsRes] = await Promise.all([
					axiosInstance.get(`/enrolled-courses/${identifier}`),
					axiosInstance.get(`/orders/purchased-kits/${identifier}`)
				]);

				setCourses(coursesRes.data || []);
				setKits(kitsRes.data || []);
			} catch (error) {
				console.error("Profile fetch error:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchUserData();
	}, [show, identifier, user?.role]);


	if (!user) return null;

	const initials = user?.fullName
		?.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase();

	return (
		<Modal
			show={show}
			onHide={onHide}
			centered
			dialogClassName="gov-profile-dialog"
			className="gov-profile-modal"
			size="lg"
		>
			{/* Header */}
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

				{/* Profile Header */}
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

				{/* Profile Details */}
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

				{/* USER SECTION ONLY */}
				{user.role !== "admin" && (
					<>
						<hr />

						{loading && (
							<div className="text-center py-3">
								<Spinner animation="border" />
							</div>
						)}

						{/* My Courses */}
						<h6 className="mt-3 mb-2">My Courses</h6>

						{courses.length === 0 ? (
							<div className="text-muted small">
								No courses enrolled
							</div>
						) : (
							courses.map((course) => (
								<div
									key={course.courseId}
									className="border rounded p-2 mb-2"
								>
									<strong>{course.title}</strong>
									<div className="small text-muted">
										Status: {course.status}
									</div>
								</div>
							))
						)}

						{/* My Kits / Orders */}
						<h6 className="mt-4 mb-2">My Kits</h6>

						{kits.length === 0 ? (
							<div className="text-muted small">
								No kits purchased
							</div>
						) : (
							kits.map((kit) => (
								<div
									key={kit.kitId}
									className="border rounded p-2 mb-2"
								>
									<strong>{kit.title}</strong>

									<div className="small text-muted">
										Payment: {kit.paymentStatus}
									</div>
								</div>
							))
						)}
					</>
				)}

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
