import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { INDIA_STATE_DISTRICTS } from "../../assets/data/faq";
import axiosInstance from "../../api/axiosInstance";

const STATE_OPTIONS = Object.keys(INDIA_STATE_DISTRICTS);
// Feedback type options
const FEEDBACK_TYPES = ["Suggestion", "Complaints", "Query", "Others"];
const formDefaultData = {
	name: "",
	mobile: "",
	email: "",
	state: "",
	district: "",
	feedbackType: "",
	message: "",
};

function QueryCard({ title }) {
	const [formData, setFormData] = useState(formDefaultData);

	const handleChange = (field) => (e) => {
		const value = e.target.value;
		setFormData((prev) => {
			if (field === "state") {
				// Reset district when state changes
				return { ...prev, state: value, district: "" };
			}
			return { ...prev, [field]: value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axiosInstance.post("/query", formData);
			alert(res.data.message);
			setFormData(formDefaultData);
		} catch (error) {
			alert(error?.response?.data?.message || "Error");
		}
	};

	const districtOptions =
		formData.state && INDIA_STATE_DISTRICTS[formData.state]
			? INDIA_STATE_DISTRICTS[formData.state]
			: [];

	return (
		<div className="query-card">
			<h3 className="query-title mb-3">{title ?? "Submit Query"}</h3>
			<Form onSubmit={handleSubmit} className="query-form">
				<Row className="g-3">
					<Col xs={12} md={6}>
						<Form.Group controlId="queryName">
							<Form.Label>
								Name <span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your name"
								value={formData.name}
								onChange={handleChange("name")}
								required
							/>
						</Form.Group>
					</Col>
					<Col xs={12} md={6}>
						<Form.Group controlId="queryMobile">
							<Form.Label>
								Mobile <span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="tel"
								placeholder="Enter your mobile number"
								value={formData.mobile}
								onChange={handleChange("mobile")}
								required
							/>
						</Form.Group>
					</Col>
					<Col xs={12} md={6}>
						<Form.Group controlId="queryEmail">
							<Form.Label>
								Email <span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter your email"
								value={formData.email}
								onChange={handleChange("email")}
								required
							/>
						</Form.Group>
					</Col>
					<Col xs={12} md={6}>
						<Form.Group controlId="queryState">
							<Form.Label>
								State <span className="text-danger">*</span>
							</Form.Label>
							<Form.Select
								value={formData.state}
								onChange={handleChange("state")}
								required
							>
								<option value="">Select State</option>
								{STATE_OPTIONS?.map((state) => (
									<option key={state} value={state}>
										{state}
									</option>
								))}
							</Form.Select>
						</Form.Group>
					</Col>
					<Col xs={12} md={6}>
						<Form.Group controlId="queryDistrict">
							<Form.Label>
								District <span className="text-danger">*</span>
							</Form.Label>
							<Form.Select
								value={formData.district}
								onChange={handleChange("district")}
								required
								disabled={!formData.state}
							>
								<option value="">
									{formData.state
										? "Select District"
										: "Select state first"}
								</option>
								{districtOptions?.map((district) => (
									<option key={district} value={district}>
										{district}
									</option>
								))}
							</Form.Select>
						</Form.Group>
					</Col>
					<Col xs={12} md={6}>
						<Form.Group controlId="queryFeedbackType">
							<Form.Label>
								Feedback Type <span className="text-danger">*</span>
							</Form.Label>
							<Form.Select
								value={formData.feedbackType}
								onChange={handleChange("feedbackType")}
								required
							>
								<option value="">Select Feedback Type</option>
								{FEEDBACK_TYPES?.map((type) => (
									<option key={type} value={type}>
										{type}
									</option>
								))}
							</Form.Select>
						</Form.Group>
					</Col>
					<Col xs={12}>
						<Form.Group controlId="queryMessage">
							<Form.Label>
								Comments/Suggestion{" "}
								<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								as="textarea"
								rows={4}
								placeholder="Message"
								value={formData.message}
								onChange={handleChange("message")}
								required
							/>
						</Form.Group>
					</Col>
					<Col xs={12}>
						<Button type="submit" className="w-100 btn-orange rounded-5" variant="">
							SUBMIT
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	)
}

export default QueryCard;
