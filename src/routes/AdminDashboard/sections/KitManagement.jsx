/**
 * Kit management
 */
import { useEffect, useState } from "react";
import { Card, Row, Col, Form, Button, Table, Spinner, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { createKit, getAdminKits, deleteKit } from "../../../services/kitService";

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
	const { t } = useTranslation();

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
		if (!window.confirm(t("admin.kits.confirmDelete"))) return;
		try {
			await deleteKit(id);
			await fetchKits();
		} catch (error) {
			console.error("Delete Kit Error:", error);
		}
	};

	return (
		<>
			<h4 className="mb-4 fw-bold">{t("admin.kits.title")}</h4>
			<Card className="mb-4 shadow-sm">
				<Card.Body>
					<h5 className="mb-4">{t("admin.kits.addTitle")}</h5>
					<Form onSubmit={handleSubmit}>
						<Row className="g-3">
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>{t("admin.kits.form.title")}</Form.Label>
									<Form.Control
										name="title"
										value={formData.title}
										onChange={handleChange}
										placeholder={t("admin.kits.form.titlePlaceholder")}
										required
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>{t("admin.kits.form.description")}</Form.Label>
									<Form.Control
										name="description"
										value={formData.description}
										onChange={handleChange}
										placeholder={t("admin.kits.form.descriptionPlaceholder")}
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>{t("admin.kits.form.oldPrice")}</Form.Label>
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
									<Form.Label>{t("admin.kits.form.newPrice")}</Form.Label>
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
									<Form.Label>{t("admin.kits.form.image")}</Form.Label>
									<Form.Control type="file" onChange={handleFileChange} required />
								</Form.Group>
							</Col>
							<Col xs={12} md={6} className="d-flex align-items-end">
								<Button type="submit" className="w-100 btn-orange" disabled={loading}>
									{loading ? (
										<>
											<Spinner size="sm" animation="border" className="me-2" />
											{t("admin.common.saving")}
										</>
									) : (
										t("admin.kits.buttons.add")
									)}
								</Button>
							</Col>
						</Row>
					</Form>
				</Card.Body>
			</Card>
			<Card className="shadow-sm">
				<Card.Body>
					<h5 className="mb-4">{t("admin.kits.listTitle")}</h5>
					{tableLoading ? (
						<div className="text-center py-5">
							<Spinner animation="border" />
						</div>
					) : kits.length === 0 ? (
						<div className="text-center text-muted py-4">
							{t("admin.kits.empty")}
						</div>
					) : (
						<Table bordered hover responsive className="align-middle">
							<thead>
								<tr>
									<th>{t("admin.kits.table.image")}</th>
									<th>{t("admin.kits.table.title")}</th>
									<th>{t("admin.kits.table.description")}</th>
									<th>{t("admin.kits.table.price")}</th>
									<th>{t("admin.kits.table.status")}</th>
									<th>{t("admin.kits.table.action")}</th>
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
												{kit.isActive ? t("admin.common.active") : t("admin.common.inactive")}
											</span>
										</td>
										<td>
											<Button
												size="sm"
												variant="danger"
												disabled={kits.length <= 4}
												onClick={() => handleDeleteKit(kit._id)}
											>
												{t("admin.actions.delete")}
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