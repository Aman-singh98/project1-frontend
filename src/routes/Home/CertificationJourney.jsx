import { Container, Row, Col } from "react-bootstrap";
// import "./certificationJourney.css";

const steps = [
	{
		icon: "bi-person-plus",
		step: "STEP 01",
		title: "Enrolment",
		desc: "Register online or in-person"
	},
	{
		icon: "bi-book",
		step: "STEP 02",
		title: "Training",
		desc: "Training with hands-on practice"
	},
	{
		icon: "bi-clipboard-check",
		step: "STEP 03",
		title: "Assessment",
		desc: "Complete assessment, get certified"
	},
	{
		icon: "bi-award",
		step: "STEP 04",
		title: "Certificate",
		desc: "Receive your certification"
	},
	{
		icon: "bi-file-earmark-text",
		step: "STEP 05",
		title: "Placement",
		desc: "Apply skills, save lives"
	}
];

function CertificationJourney() {
	return (
		<section className="journey-section">
			<Container>
				<h2 className="journey-title">
					Your Journey to Certification
				</h2>
				<p className="journey-subtitle">
					Follow our simple 5-step process to become a certified first aid professional
				</p>
				<div className="journey-steps">
					<div className="journey-line"></div>
					<Row className="text-center justify-content-center">
						{steps.map((item, index) => (
							<Col key={index} lg={2} md={4} sm={6} xs={12} className="step-col">
								<div className="step-icon">
									<i className={`bi ${item.icon}`}></i>

								</div>
								<div className="step-label">
									{item.step}
								</div>
								<h6 className="step-title">
									{item.title}
								</h6>

								<p className="step-desc">
									{item.desc}
								</p>

							</Col>
						))}

					</Row>

				</div>

			</Container>

		</section>
	);
}

export default CertificationJourney;
