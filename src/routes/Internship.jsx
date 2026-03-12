/**
 * Internship
 * -----------------
 * Fully Responsive Internship Page
 */
import { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { IMAGES } from '../constants/images';
import { applyInternship } from "../services/internshipService";
import HeroSection from "../components/global/HeroSection";
import { durationOptions, internshipAreas, modeOptions, qualificationOptions } from "../assets/data/internship";

// Constants
const formDefaultValues = {
	fullName: "",
	email: "",
	mobile: "",
	age: "",
	qualification: "",
	area: "",
	mode: "",
	duration: "",
	resume: null,
	message: ""
};

function Internship() {
	// States
	const [formData, setFormData] = useState(formDefaultValues);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	function handleChange(e) {
		const { name, value, files } = e.target;
		if (files) {
			const file = files[0];
			if (file.size > 5 * 1024 * 1024) {
				setError("File size must be less than 5MB");
				return;
			}
			const allowedTypes = [
				"application/pdf",
				"application/msword",
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
			];
			if (!allowedTypes.includes(file.type)) {
				setError("Only PDF or DOC files allowed");
				return;
			}
			setError("");
			setFormData((prev) => ({ ...prev, resume: file }));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccess(false);
		if (!formData.fullName || !formData.email || !formData.mobile || !formData.qualification || !formData.area || !formData.duration || !formData.resume) {
			setError("Please fill all required fields");
			return;
		}
		try {
			setLoading(true);
			const data = new FormData();
			Object.keys(formData).forEach((key) => {
				if (formData[key]) data.append(key, formData[key]);
			});
			await applyInternship(data);
			setSuccess(true);
			setFormData(formDefaultValues);
		} catch (err) {
			setError(err?.response?.data?.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	// Render internship form.
	function renderForm() {
		return (
			<Card className="shadow-sm border-0 rounded-3 overflow-hidden">
				<Card.Body className="p-3 p-md-4">
					<h5 className="fw-bold mb-3 mb-md-4">Internship Application Form</h5>
					{error && <Alert variant="danger" className="mb-3">{error}</Alert>}
					{success && <Alert variant="success" className="mb-3">Application submitted successfully!</Alert>}
					<Form onSubmit={handleSubmit}>
						<Row className="g-3">
							<Col xs={12} sm={6}>
								<Form.Group>
									<Form.Label>Full Name *</Form.Label>
									<Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
								</Form.Group>
							</Col>
							<Col xs={12} sm={6}>
								<Form.Group>
									<Form.Label>Email *</Form.Label>
									<Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
								</Form.Group>
							</Col>
							<Col xs={12} sm={6}>
								<Form.Group>
									<Form.Label>Mobile *</Form.Label>
									<Form.Control type="tel" name="mobile" pattern="[0-9]{10}" value={formData.mobile} onChange={handleChange} />
								</Form.Group>
							</Col>
							<Col xs={12} sm={6}>
								<Form.Group>
									<Form.Label>Age</Form.Label>
									<Form.Control type="number" name="age" value={formData.age} onChange={handleChange} />
								</Form.Group>
							</Col>
							<Col xs={12} sm={6}>
								<Form.Group>
									<Form.Label>Qualification *</Form.Label>
									<Form.Select name="qualification" value={formData.qualification} onChange={handleChange}>
										<option value="">Select</option>
										{qualificationOptions.map((item, i) => <option key={i} value={item}>{item}</option>)}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col xs={12} sm={6}>
								<Form.Group>
									<Form.Label>Internship Area *</Form.Label>
									<Form.Select name="area" value={formData.area} onChange={handleChange}>
										<option value="">Select</option>
										{internshipAreas.map((item, i) => <option key={i} value={item}>{item}</option>)}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col xs={12} sm={6}>
								<Form.Group>
									<Form.Label>Mode</Form.Label>
									<Form.Select name="mode" value={formData.mode} onChange={handleChange}>
										<option value="">Select</option>
										{modeOptions.map((item, i) => <option key={i} value={item}>{item}</option>)}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col xs={12} sm={6}>
								<Form.Group>
									<Form.Label>Duration *</Form.Label>
									<Form.Select name="duration" value={formData.duration} onChange={handleChange}>
										<option value="">Select</option>
										{durationOptions.map((item, i) => <option key={i} value={item}>{item}</option>)}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col xs={12}>
								<Form.Group>
									<Form.Label>Upload Resume *</Form.Label>
									<Form.Control type="file" name="resume" accept=".pdf" onChange={handleChange} />
									<small className="text-muted">PDF or DOC. Max 5MB</small>
								</Form.Group>
							</Col>
							<Col xs={12}>
								<Form.Group>
									<Form.Label>Why do you want to join?</Form.Label>
									<Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} />
								</Form.Group>
							</Col>
							<Col xs={12}>
								<Button type="submit" variant="warning" className="w-100 fw-semibold" disabled={loading}>
									{loading ? "Submitting..." : "Submit Application"}
								</Button>
							</Col>
						</Row>
					</Form>
				</Card.Body>
			</Card>
		);
	}

	return (
		<>
			<HeroSection title="Internship Program" backgroundImage={IMAGES.AMBULANCE} />
			<section className="py-4 py-md-5 bg-light">
				<Container>
					<Row className="g-4 g-lg-5">
						<Col xs={12} lg={6} className="order-2 order-lg-1">
							<h2 className="fw-bold mb-3 text-dark">
								St. John Ambulance India <span className="text-danger">Internship Program</span>
							</h2>
							<p className="text-dark mb-3">
								At St. John Ambulance India, we believe in nurturing the next generation of changemakers. Our Internship Program offers young individuals an opportunity to gain real-world experience in first aid, emergency response, and community health while making a meaningful difference.
							</p>
							<p className="text-dark mb-4">
								Whether you're a student, recent graduate, or passionate learner, this internship allows you to contribute to causes such as first aid training, healthcare awareness, disaster preparedness, and community development — all while developing valuable professional and leadership skills.
							</p>
							<Card className="custom-card mb-4 shadow-sm border-0 rounded-3">
								<Card.Body className="p-3 p-md-4">
									<h4 className="section-title mb-3">Why Join St. John Ambulance India as an Intern?</h4>
									<p className="mb-2"><strong>Hands-on Experience</strong> – Work directly with our field teams on active community projects.</p>
									<p className="mb-2"><strong>Skill Development</strong> – Build expertise in project management, communication, and teamwork.</p>
									<p className="mb-2"><strong>Social Impact</strong> – Contribute to initiatives that uplift underprivileged communities.</p>
									<p className="mb-2"><strong>Networking Opportunities</strong> – Collaborate with social workers, educators, and community leaders.</p>
									<p className="mb-0"><strong>Certificate & Recognition</strong> – Receive an official Internship Certificate upon successful completion.</p>
								</Card.Body>
							</Card>
							<Card className="custom-card mb-4 shadow-sm border-0 rounded-3">
								<Card.Body className="p-3 p-md-4">
									<h4 className="section-title mb-3">Internship Areas</h4>
									<p className="text-muted mb-3">You can choose your area of interest based on your passion and skills:</p>
									<p className="mb-2"><strong>Education Support</strong> – Assist in teaching, tutoring, or organizing learning sessions.</p>
									<p className="mb-2"><strong>Healthcare Awareness</strong> – Help in medical camps, awareness drives, and health campaigns.</p>
									<p className="mb-2"><strong>Women Empowerment Projects</strong> – Support training programs and awareness workshops.</p>
									<p className="mb-2"><strong>Community Development</strong> – Participate in social outreach and environmental initiatives.</p>
									<p className="mb-2"><strong>Digital Media & Promotion</strong> – Create content, manage social media, or design awareness materials.</p>
									<p className="mb-0"><strong>Fundraising & Events</strong> – Help plan and organize donation drives and charity events.</p>
								</Card.Body>
							</Card>
							<Card className="custom-card mb-4 shadow-sm border-0 rounded-3">
								<Card.Body className="p-3 p-md-4">
									<h4 className="section-title mb-3">Duration & Mode</h4>
									<p className="mb-2"><strong>Duration:</strong> 1 to 3 Months (Flexible based on student availability)</p>
									<p className="mb-2"><strong>Mode:</strong> Online / Offline (based on location and project type)</p>
									<p className="mb-0"><strong>Location:</strong> Patna, Bihar (Head Office) or Remote</p>
								</Card.Body>
							</Card>
							<Card className="custom-card mb-4 shadow-sm border-0 rounded-3">
								<Card.Body className="p-3 p-md-4">
									<h4 className="section-title mb-3">Eligibility Criteria</h4>
									<ul className="custom-list mb-0">
										<li>Open to students, graduates, and individuals aged 18 years and above.</li>
										<li>Strong communication, teamwork, and leadership skills.</li>
										<li>Passionate about social service and community welfare.</li>
									</ul>
								</Card.Body>
							</Card>
							<Card className="custom-card mb-4 shadow-sm border-0 rounded-3">
								<Card.Body className="p-3 p-md-4">
									<h4 className="section-title mb-3">How to Apply</h4>
									<ul className="custom-list mb-0">
										<li>Fill out the Internship Application Form on our website.</li>
										<li>Upload your resume and a short statement about why you wish to intern with us.</li>
										<li>Shortlisted candidates will be contacted for an interview or orientation session.</li>
									</ul>
								</Card.Body>
							</Card>
							<Card className="custom-card shadow-sm border-0 rounded-3">
								<Card.Body className="p-3 p-md-4">
									<h4 className="section-title mb-3">Join Us — Be a Catalyst for Change</h4>
									<p className="mb-3">Every effort counts. As an intern at St. John Ambulance India, your time, energy, and ideas can light the path to a better tomorrow.</p>
									<hr />
									<h6 className="fw-semibold mb-2">St. John Ambulance India</h6>
									<div className="d-flex align-items-start mb-3">
										<i className="bi bi-envelope-fill text-danger me-2" />
										<a href="mailto:ceo@stjohncouncil.co.in" className="text-decoration-none text-dark">Email: ceo@stjohncouncil.co.in</a>
									</div>
									<div className="d-flex align-items-start mb-3">
										<i className="bi bi-telephone-fill text-success me-2" />
										<a href="tel:+917404425125" className="text-decoration-none text-dark">Phone: +91 7404425125</a>
									</div>
									<div className="d-flex align-items-start mb-4">
										<i className="bi bi-geo-alt-fill text-danger me-2" />
										<span className="text-dark">Contact your nearest branch for location and availability.</span>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} lg={6} className="order-1 order-lg-2">
							<div className="internship-form-sticky">
								{renderForm()}
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}

export default Internship;
