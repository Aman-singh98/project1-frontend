import { useEffect, useState } from "react";
import { Button, Card, Table, Badge, Spinner } from "react-bootstrap";
import {
	getInternships, updateInternshipStatus, deleteInternship, getInternshipById
} from "../../../services/internshipService";
import InternshipDetailsModal from "../../../components/global/popups/InternshipDetailsModal";

function InternshipManagement() {
	// States
	const [internships, setInternships] = useState([]);
	const [selectedInternship, setSelectedInternship] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [tableLoading, setTableLoading] = useState(true);

	// ================= FETCH INTERNSHIPS =================
	const fetchInternships = async () => {
		try {
			setTableLoading(true);
			const res = await getInternships();
			setInternships(res.data.data);
		} catch (error) {
			console.error("Fetch Internship Error:", error);
		}finally {
			setTableLoading(false);
		}
	};

	useEffect(() => {
		fetchInternships();
	}, []);

	// ================= INTERNSHIP ACTIONS =================
	const handleStatusUpdate = async (id, status) => {
		await updateInternshipStatus(id, { status });
		fetchInternships();
	};

	const handleDeleteInternship = async (id) => {
		if (!window.confirm("Delete this internship?")) return;
		await deleteInternship(id);
		fetchInternships();
	};

	const handleViewDetails = async (id) => {
		const res = await getInternshipById(id);
		setSelectedInternship(res.data);
		setShowModal(true);
	};


	return (
		<>
			<h4 className="mb-3 text-center">Internship Applications</h4>
			<Card>
				<Card.Body>
					{tableLoading ? (
						<div className="text-center py-5">
							<Spinner animation="border" />
						</div>
					) : (
						<Table bordered hover responsive>
							<thead>
								<tr>
									<th>Name</th>
									<th>Email</th>
									<th>Area</th>
									<th>Duration</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{internships.map((item) => (
									<tr key={item._id}>
										<td>{item.fullName}</td>
										<td>{item.email}</td>
										<td>{item.area}</td>
										<td>{item.duration}</td>
										<td>
											<Badge
												bg={
													item.status === "approved"
														? "success"
														: item.status === "rejected"
															? "danger"
															: "warning"
												}
											>
												{item.status}
											</Badge>
										</td>
										<td>
											<Button
												size="sm"
												variant="info"
												onClick={() => handleViewDetails(item._id)}
											>
												View
											</Button>{" "}
											<Button
												size="sm"
												variant="success"
												onClick={() => handleStatusUpdate(item._id, "approved")}
											>
												Approve
											</Button>{" "}
											<Button
												size="sm"
												variant="warning"
												onClick={() => handleStatusUpdate(item._id, "rejected")}
											>
												Reject
											</Button>{" "}
											<Button
												size="sm"
												variant="danger"
												onClick={() => handleDeleteInternship(item._id)}
											>
												Delete
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					)}
				</Card.Body>
			</Card>
			<InternshipDetailsModal
				show={showModal}
				onHide={() => setShowModal(false)}
				data={selectedInternship}
			/>
		</>
	);

}

export default InternshipManagement;
