/**
 * Kit management
 */
import { useEffect, useState } from "react";
import { Card, Row, Col, Form, Button, Table, Spinner, Image } from "react-bootstrap";
import { createKit, getAdminKits, deleteKit } from "../../../services/kitService";
import { ROUTERS } from "../../../constants/router";
import { Navigate } from "react-router-dom";

const defaultValues = {
	title: "",
	description: "",
	oldPrice: "",
	newPrice: "",
	image: null
};

function KitManagement() {
	// States
	const [kits, setKits] = useState([]);
	const [loading, setLoading] = useState(false);
	const [tableLoading, setTableLoading] = useState(true);
	const [formData, setFormData] = useState(defaultValues);

	// ================= FETCH KITS =================
	const fetchKits = async () => {
		try {
			setTableLoading(true);
			const res = await getAdminKits();
			setKits(res?.data?.data || []);
		} catch (error) {
			console.error("Fetch Kits Error:", error);
		} finally {
			setTableLoading(false);
		}
	};

	useEffect(() => {
		fetchKits();
	}, []);

	// ================= HANDLE FORM =================
	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
	}

	function handleFileChange(e) {
		setFormData((prev) => ({
			...prev,
			image: e.target.files[0]
		}));
	}

	// ================= SUBMIT KIT =================
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const data = new FormData();
			Object.keys(formData).forEach((key) => {
				data.append(key, formData[key]);
			});
			await createKit(data);
			await fetchKits();
			setFormData(defaultValues);
		} catch (error) {
			console.error("Create Kit Error:", error);
		} finally {
			setLoading(false);
		}
	};

	// ================= DELETE KIT =================
	const handleDeleteKit = async (id) => {
		if (!window.confirm("Delete this kit?")) return;
		try {
			await deleteKit(id);
			await fetchKits();
		} catch (error) {
			console.error("Delete Kit Error:", error);
		}
	};

	return (
		<>
			<h4 className="mb-4 fw-bold">Kit Management</h4>
			<Card className="mb-4 shadow-sm">
				<Card.Body>
					<h5 className="mb-4">Add New Kit</h5>
					<Form onSubmit={handleSubmit}>
						<Row className="g-3">
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>Title</Form.Label>
									<Form.Control
										name="title"
										value={formData.title}
										onChange={handleChange}
										placeholder="Kit Title"
										required
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>Description</Form.Label>
									<Form.Control
										name="description"
										value={formData.description}
										onChange={handleChange}
										placeholder="Kit Description"
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>Old Price</Form.Label>
									<Form.Control
										type="number"
										name="oldPrice"
										value={formData.oldPrice}
										onChange={handleChange}
										required
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>New Price</Form.Label>
									<Form.Control
										type="number"
										name="newPrice"
										value={formData.newPrice}
										onChange={handleChange}
										required
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>Kit Image</Form.Label>
									<Form.Control type="file" onChange={handleFileChange} required />
								</Form.Group>
							</Col>
							<Col xs={12} md={6} className="d-flex align-items-end">
								<Button type="submit" className="w-100 btn-orange" disabled={loading}>
									{loading ? (
										<>
											<Spinner size="sm" animation="border" className="me-2" />
											Saving...
										</>
									) : (
										"Add Kit"
									)}
								</Button>
							</Col>
						</Row>
					</Form>
				</Card.Body>
			</Card>
			<Card className="shadow-sm">
				<Card.Body>
					<h5 className="mb-4">All Kits</h5>
					{tableLoading ? (
						<div className="text-center py-5">
							<Spinner animation="border" />
						</div>
					) : kits.length === 0 ? (
						<div className="text-center text-muted py-4">
							No kits available
						</div>
					) : (
						<Table bordered hover responsive className="align-middle">
							<thead>
								<tr>
									<th>Image</th>
									<th>Title</th>
									<th>Description</th>
									<th>Price</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{kits?.map((kit) => (
									<tr key={kit._id}>
										<td>
											<div style={{ width: 60, height: 60, overflow: "hidden", borderRadius: 6 }}>
												<Image src={kit.imageUrl} alt={kit.title} fluid />
											</div>
										</td>
										<td>{kit.title}</td>
										<td>{kit.description}</td>
										<td>₹{kit.newPrice}</td>
										<td>
											<span className={kit.isActive ? "text-success" : "text-muted"}>
												{kit.isActive ? "Active" : "Inactive"}
											</span>
										</td>
										<td>
											<Button
												size="sm"
												variant="danger"
												disabled={kits.length <= 4}
												onClick={() => handleDeleteKit(kit._id)}
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
		</>
	);
}

export default KitManagement;