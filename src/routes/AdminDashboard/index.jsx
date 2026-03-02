import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Button,
	Table,
	Form,
	Row,
	Col,
	Card,
	Badge
} from "react-bootstrap";
import {
	createKit,
	getAdminKits,
	deleteKit
} from "../../services/kitService";
import {
	getInternships,
	updateInternshipStatus,
	deleteInternship,
	getInternshipById
} from "../../services/internshipService";
import InternshipDetailsModal from "../../components/global/popups/InternshipDetailsModal";
import Courses from "../AdminDashboard/components/Courses";

function AdminDashboard() {
	const navigate = useNavigate();

	// =========================
	// KIT STATE
	// =========================
	const [kits, setKits] = useState([]);
	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		oldPrice: "",
		newPrice: "",
		image: null
	});

	// =========================
	// INTERNSHIP STATE
	// =========================
	const [internships, setInternships] = useState([]);
	const [selectedInternship, setSelectedInternship] = useState(null);
	const [showModal, setShowModal] = useState(false);

	// ================= FETCH KITS =================
	const fetchKits = async () => {
		try {
			const res = await getAdminKits();
			console.log(res.data.data, 'res.data.data');
			setKits(res.data.data);
		} catch (error) {
			console.error("Fetch Kits Error:", error);
		}
	};

	// ================= FETCH INTERNSHIPS =================
	const fetchInternships = async () => {
		try {
			const res = await getInternships();
			setInternships(res.data.data);
		} catch (error) {
			console.error("Fetch Internship Error:", error);
		}
	};

	useEffect(() => {
		fetchKits();
		fetchInternships();
	}, []);

	// ================= HANDLE KIT FORM =================
	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	function handleFileChange(e) {
		setFormData((prev) => ({
			...prev,
			image: e.target.files[0]
		}));
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const data = new FormData();
			Object.keys(formData).forEach((key) =>
				data.append(key, formData[key])
			);

			await createKit(data);
			fetchKits();

			setFormData({
				title: "",
				description: "",
				oldPrice: "",
				newPrice: "",
				image: null
			});
		} catch (error) {
			console.error("Create Kit Error:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleDeleteKit = async (id) => {
		await deleteKit(id);
		fetchKits();
	};

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
		<div className="container mt-4">

			<Button onClick={() => navigate("/")}>Home</Button>

			{/* ================= TOP HEADING ================= */}
			<h2 className="text-center my-4 fw-bold">
				Admin Dashboard Management
			</h2>

			{/* ================= SECTION 1: KIT MANAGEMENT ================= */}
			<h4 className="mb-3">Kit Management</h4>
			<Row className="mb-5">
				<Col md={5}>
					<Card>
						<Card.Body>
							<h5>Add New Kit</h5>
							<Form onSubmit={handleSubmit}>
								<Form.Control
									className="mb-2"
									name="title"
									placeholder="Title"
									value={formData.title}
									onChange={handleChange}
									required
								/>
								<Form.Control
									className="mb-2"
									name="description"
									placeholder="Description"
									value={formData.description}
									onChange={handleChange}
								/>
								<Form.Control
									className="mb-2"
									type="number"
									name="oldPrice"
									placeholder="Old Price"
									value={formData.oldPrice}
									onChange={handleChange}
									required
								/>
								<Form.Control
									className="mb-2"
									type="number"
									name="newPrice"
									placeholder="New Price"
									value={formData.newPrice}
									onChange={handleChange}
									required
								/>
								<Form.Control
									className="mb-3"
									type="file"
									onChange={handleFileChange}
									required
								/>
								<Button type="submit" disabled={loading}>
									{loading ? "Saving..." : "Add Kit"}
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>

				<Col md={7}>
					<Card>
						<Card.Body>
							<h5>All Kits</h5>
							<Table bordered responsive>
								<thead>
									<tr>
										<th>Image</th>
										<th>Title</th>
										<th>Price</th>
										<th>Status</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{kits?.map((kit) => (
										<tr key={kit._id}>
											<td>
												<img src={kit.imageUrl} width="60" alt="" />
											</td>
											<td>{kit.title}</td>
											<td>₹{kit.newPrice}</td>
											<td>
												{kit.isActive ? "Active" : "Inactive"}
											</td>
											<td>
												<Button
													size="sm"
													variant="danger"
													onClick={() => handleDeleteKit(kit._id)}
												>
													Delete
												</Button>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			{/* ================= SECTION 2: INTERNSHIP MANAGEMENT ================= */}
			<h4 className="mb-3 text-center">Internship Applications</h4>
			<Card>
				<Card.Body>
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
											onClick={() =>
												handleStatusUpdate(item._id, "approved")
											}
										>
											Approve
										</Button>{" "}
										<Button
											size="sm"
											variant="warning"
											onClick={() =>
												handleStatusUpdate(item._id, "rejected")
											}InternshipDetailsModal
										>
											Reject
										</Button>{" "}
										<Button
											size="sm"
											variant="danger"
											onClick={() =>
												handleDeleteInternship(item._id)
											}
										>
											Delete
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
			<Courses />

			{/* ================= MODAL ================= */}
			<InternshipDetailsModal
				show={showModal}
				onHide={() => setShowModal(false)}
				data={selectedInternship}
			/>
		</div>
	);
}

export default AdminDashboard;
