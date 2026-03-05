import { useEffect, useState } from "react";
import {
	Card,
	Row,
	Col,
	Form,
	Button,
	Table,
	Spinner,
	Image,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axiosInstance from "../../../api/axiosInstance";

const defaultValues = {
	title: "",
	description: "",
	duration: "",
	price: "",
	mode: "offline",
	category: "",
	languages: "",
};

function AdminCourses() {
	const { t } = useTranslation();
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(false);
	const [tableLoading, setTableLoading] = useState(true);
	const [formData, setFormData] = useState(defaultValues);
	const [image, setImage] = useState(null);

	const fetchCourses = async () => {
		try {
			setTableLoading(true);
			const res = await axiosInstance.get("/courses");
			setCourses(res.data || []);
		} catch (error) {
			console.error("Fetch Courses Error:", error);
		} finally {
			setTableLoading(false);
		}
	};

	useEffect(() => {
		fetchCourses();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const data = new FormData();
			Object.keys(formData).forEach((key) => {
				data.append(key, formData[key]);
			});
			if (image) {
				data.append("image", image);
			}
			await axiosInstance.post("/courses", data);
			await fetchCourses();
			setFormData(defaultValues);
			setImage(null);
		} catch (error) {
			console.error("Create Course Error:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (id) => {
		if (!window.confirm(t("admin.courses.confirmDelete"))) return;
		try {
			await axiosInstance.delete(`/courses/${id}`);
			fetchCourses();
		} catch (error) {
			console.error("Delete Course Error:", error);
		}
	};

	return (
		<>
			<h4 className="mb-4 fw-bold">{t("admin.courses.title")}</h4>
			<Card className="mb-4 shadow-sm">
				<Card.Body>
					<h5 className="mb-4">{t("admin.courses.addTitle")}</h5>
					<Form onSubmit={handleSubmit}>
						<Row className="g-3">
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>
										{t("admin.courses.form.title")}
									</Form.Label>
									<Form.Control
										name="title"
										value={formData.title}
										onChange={handleChange}
										placeholder={t(
											"admin.courses.form.titlePlaceholder"
										)}
										required
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>
										{t("admin.courses.form.durationDays")}
									</Form.Label>
									<Form.Control
										name="duration"
										type="number"
										value={formData.duration}
										onChange={handleChange}
										required
									/>
								</Form.Group>
							</Col>
							<Col xs={12}>
								<Form.Group>
									<Form.Label>
										{t("admin.courses.form.description")}
									</Form.Label>
									<Form.Control
										as="textarea"
										rows={2}
										name="description"
										value={formData.description}
										onChange={handleChange}
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>
										{t("admin.courses.form.price")}
									</Form.Label>
									<Form.Control
										name="price"
										type="number"
										value={formData.price}
										onChange={handleChange}
										required
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>
										{t("admin.courses.form.mode")}
									</Form.Label>
									<Form.Select
										name="mode"
										value={formData.mode}
										onChange={handleChange}
									>
										<option value="online">Online</option>
										<option value="offline">Offline</option>
										<option value="hybrid">Hybrid</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>
										{t("admin.courses.form.category")}
									</Form.Label>
									<Form.Control
										name="category"
										value={formData.category}
										onChange={handleChange}
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>
										{t("admin.courses.form.languages")}
									</Form.Label>
									<Form.Control
										name="languages"
										placeholder={t(
											"admin.courses.form.languagesPlaceholder"
										)}
										value={formData.languages}
										onChange={handleChange}
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>
										{t("admin.courses.form.courseImage")}
									</Form.Label>
									<Form.Control
										type="file"
										onChange={(e) =>
											setImage(e.target.files[0])
										}
									/>
								</Form.Group>
							</Col>
							<Col
								xs={12}
								md={6}
								className="d-flex align-items-end"
							>
								<Button
									type="submit"
									className="w-100 btn-orange"
									disabled={loading}
								>
									{loading ? (
										<>
											<Spinner
												size="sm"
												animation="border"
												className="me-2"
											/>
											{t("admin.common.saving")}
										</>
									) : (
										t("admin.courses.buttons.add")
									)}
								</Button>
							</Col>
						</Row>
					</Form>
				</Card.Body>
			</Card>
			<Card className="shadow-sm">
				<Card.Body>
					<h5 className="mb-4">
						{t("admin.courses.listTitle")}
					</h5>
					{tableLoading ? (
						<div className="text-center py-5">
							<Spinner animation="border" />
						</div>
					) : courses.length === 0 ? (
						<div className="text-center text-muted py-4">
							{t("admin.courses.empty")}
						</div>
					) : (
						<Table
							bordered
							hover
							responsive
							className="align-middle"
						>
							<thead>
								<tr>
									<th>{t("admin.courses.table.image")}</th>
									<th>{t("admin.courses.table.title")}</th>
									<th>{t("admin.courses.table.duration")}</th>
									<th>{t("admin.courses.table.price")}</th>
									<th>{t("admin.courses.table.mode")}</th>
									<th>{t("admin.courses.table.action")}</th>
								</tr>
							</thead>
							<tbody>
								{courses.map((course) => (
									<tr key={course._id}>
										<td style={{ width: 70 }}>
											{course.image && (
												<div
													style={{
														width: 60,
														height: 60,
														overflow: "hidden",
														borderRadius: 6,
													}}
												>
													<Image
														src={course.image}
														fluid
													/>
												</div>
											)}
										</td>
										<td>{course.title}</td>
										<td>
											{course.duration}{" "}
											{t("courses.daysSuffix")}
										</td>
										<td>₹{course.price}</td>
										<td>{course.mode}</td>
										<td>
											<Button
												size="sm"
												variant="danger"
												onClick={() =>
													handleDelete(course._id)
												}
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

export default AdminCourses;
