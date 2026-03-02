import { Modal, Button } from "react-bootstrap";

function InternshipDetailsModal({ show, onHide, data }) {
	if (!data) return null;

	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title>Internship Details</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p><strong>Name:</strong> {data.fullName}</p>
				<p><strong>Email:</strong> {data.email}</p>
				<p><strong>Mobile:</strong> {data.mobile}</p>
				<p><strong>Qualification:</strong> {data.qualification}</p>
				<p><strong>Area:</strong> {data.area}</p>
				<p><strong>Duration:</strong> {data.duration}</p>
				<p><strong>Status:</strong> {data.status}</p>

				<p>
					<strong>Resume:</strong>{" "}
					<a href={data.resumeUrl} target="_blank" rel="noreferrer">
						View Resume
					</a>
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default InternshipDetailsModal;
