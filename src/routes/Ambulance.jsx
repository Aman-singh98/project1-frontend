/**
 * AmbulancePage
 * -----------------
 * Fully Responsive Ambulance Services Page
 * Built with React-Bootstrap
 * Styled to match St. John Ambulance India design
 */
import { Container, Row, Col, Card, ListGroup, Button, Image } from "react-bootstrap";
import { IMAGES } from "../constants/images";
import HeroSection from "../components/global/HeroSection";

function AmbulancePage() {
	return (
		<>
			<HeroSection
				title="Ambulances"
				subtitle="24x7 emergency medical support when you need it most."
				backgroundImage={IMAGES.AMBULANCE}
			/>
			<section className="py-4 py-md-5 bg-white">
				<Container>
					<Row className="g-4 g-lg-5">
						<Col xs={12} lg={8}>
							<h2 className="fw-bold mb-3 text-dark">
								St. John Ambulance India{" "}
								<span className="text-danger">Ambulance Services</span>
							</h2>
							<p className="text-dark mb-3">
								In an emergency situation, prompt medical attention along with the right medical equipment can save your life. Most experts agree that medical help received within the first 60 minutes of a trauma incident can vastly improve the odds of survival.
							</p>
							<p className="text-dark mb-4">
								St. John Ambulance India operates Basic Life Support (BLS) and Advanced Life Support (ALS) ambulances that respond to medical emergencies on a 24×7 basis.
							</p>
							<div className="bg-light rounded-3 p-4" style={{ backgroundColor: "#f8f9fa" }}>
								<h5 className="fw-bold mb-3 text-dark">Key Features</h5>
								<p className="text-muted small mb-3">
									Our ambulance fleet is equipped to handle a wide range of medical emergencies.
								</p>
								<ListGroup variant="flush" className="bg-transparent">
									<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-2 bg-transparent">
										<i className="bi bi-check-circle-fill text-success me-3 mt-1 flex-shrink-0" style={{ fontSize: "1.1rem" }} />
										<span className="text-dark">Packed with equipment necessary to manage over 15 medical emergencies</span>
									</ListGroup.Item>
									<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-2 bg-transparent">
										<i className="bi bi-check-circle-fill text-success me-3 mt-1 flex-shrink-0" style={{ fontSize: "1.1rem" }} />
										<span className="text-dark">Easy to carry</span>
									</ListGroup.Item>
									<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-2 bg-transparent">
										<i className="bi bi-check-circle-fill text-success me-3 mt-1 flex-shrink-0" style={{ fontSize: "1.1rem" }} />
										<span className="text-dark">Modular pouches with sterile packaging</span>
									</ListGroup.Item>
									<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-2 bg-transparent">
										<i className="bi bi-check-circle-fill text-success me-3 mt-1 flex-shrink-0" style={{ fontSize: "1.1rem" }} />
										<span className="text-dark">Available in two different sizes</span>
									</ListGroup.Item>
								</ListGroup>
							</div>
						</Col>
						<Col xs={12} lg={4}>
							<div className="position-sticky" style={{ top: "100px" }}>
								<Card className="border-0 rounded-3 shadow-sm overflow-hidden" style={{ backgroundColor: "#f8f8f8" }}>
									<Card.Body className="p-4">
										<h4 className="fw-bold mb-4 text-dark">Need Help?</h4>
										<ListGroup variant="flush" className="border-0">
											<ListGroup.Item className="border-0 px-0 py-3 d-flex align-items-center bg-transparent">
												<div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3" style={{ width: "44px", height: "44px" }}>
													<i className="bi bi-telephone-fill" />
												</div>
												<div>
													<small className="text-muted d-block">Call Us</small>
													<a href="tel:+918814088115" className="fw-semibold text-dark text-decoration-none">+91 8814088115</a>
												</div>
											</ListGroup.Item>
											<ListGroup.Item className="border-0 px-0 py-3 d-flex align-items-center bg-transparent">
												<div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3" style={{ width: "44px", height: "44px" }}>
													<i className="bi bi-whatsapp" />
												</div>
												<div>
													<small className="text-muted d-block">WhatsApp</small>
													<a href="https://wa.me/918814088115" className="fw-semibold text-dark text-decoration-none">+91 8814088115</a>
												</div>
											</ListGroup.Item>
											<ListGroup.Item className="border-0 px-0 py-3 d-flex align-items-center bg-transparent">
												<div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3" style={{ width: "44px", height: "44px" }}>
													<i className="bi bi-envelope-fill" />
												</div>
												<div>
													<small className="text-muted d-block">Email</small>
													<a href="mailto:ceo@stjohncouncil.co.in" className="fw-semibold text-dark text-decoration-none">ceo@stjohncouncil.co.in</a>
												</div>
											</ListGroup.Item>
										</ListGroup>
									</Card.Body>
								</Card>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="py-4 py-md-5 bg-white">
				<Container>
					<Row className="mt-4 align-items-center g-4">
						<Col xs={12} md={6}>
							<h3 className="fw-bold text-uppercase mb-3 text-dark">Emergency Response Handbook (EMS)</h3>
							<p className="text-dark mb-4">
								Our easy to read Emergency Response Handbook is a must have for companies, schools, factories and individuals. The book covers most essential medical situations and advises readers on how to correctly respond to various emergencies. Whether you are a first-time responder or need a quick reference at work or home, this handbook provides clear, actionable guidance to help save lives before professional help arrives.
							</p>
							<h4 className="fw-bold text-uppercase mb-3 text-dark">Key Features</h4>
							<ListGroup variant="flush">
								<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-2">
									<i className="bi bi-check-circle-fill text-success me-3 mt-1 flex-shrink-0" />
									<span className="text-dark">Simple lucid language with pictorial illustrations</span>
								</ListGroup.Item>
								<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-2">
									<i className="bi bi-check-circle-fill text-success me-3 mt-1 flex-shrink-0" />
									<span className="text-dark">Specific DO's and DON'T's for over 40 medical emergencies</span>
								</ListGroup.Item>
								<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-2">
									<i className="bi bi-check-circle-fill text-success me-3 mt-1 flex-shrink-0" />
									<span className="text-dark">Common myths associated with various ailments and why to avoid them</span>
								</ListGroup.Item>
								<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-2">
									<i className="bi bi-check-circle-fill text-success me-3 mt-1 flex-shrink-0" />
									<span className="text-dark">How to measure and monitor vital signs</span>
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col xs={12} md={6}>
							<Image src={IMAGES.EMS} alt="EMS" fluid rounded className="shadow-sm" />
						</Col>
					</Row>
				</Container>
			</section>
			<section className="py-4 py-md-5 bg-light">
				<Container>
					<Card className="border-0 shadow-sm rounded-3 overflow-hidden">
						<Row className="g-0">
							<Col xs={12} md={5} className="d-none d-md-block">
								<div className="p-3 bg-white h-100">
									<Image src={IMAGES.AED} alt="AED Device" className="full-height-image shadow-sm" fluid rounded />
								</div>
							</Col>
							<Col xs={12} md={7}>
								<Card.Body className="p-4">
									<h3 className="fw-bold text-uppercase mb-3 text-dark">Automated External Defibrillator (AED)</h3>
									<p className="text-dark small mb-3">
										Over 100,000 individuals all around the world die everyday due to cardiac arrest. According to experts, the chances of surviving a cardiac arrest are increased manifold through the combination of CPR and AED usage.
									</p>
									<h5 className="fw-bold text-uppercase mb-2 text-dark">Key Features</h5>
									<ListGroup variant="flush">
										<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-1">
											<i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0" />
											<span className="text-dark small">Automatically analyses and detects shock-able heart rhythms</span>
										</ListGroup.Item>
										<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-1">
											<i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0" />
											<span className="text-dark small">Voice and visual prompts guide the user step-by-step</span>
										</ListGroup.Item>
										<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-1">
											<i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0" />
											<span className="text-dark small">Designed for use by trained first aiders alongside CPR</span>
										</ListGroup.Item>
										<ListGroup.Item className="d-flex align-items-start border-0 px-0 py-1">
											<i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0" />
											<span className="text-dark small">Commonly placed in malls, schools, corporate offices</span>
										</ListGroup.Item>
									</ListGroup>
								</Card.Body>
							</Col>
						</Row>
					</Card>
				</Container>
			</section>
			<section className="py-4 py-md-5 bg-white">
				<Container>
					<Row>
						<Col xs={12} lg={8}>
							<h2 className="fw-bold mb-3 text-dark">Need an Ambulance?</h2>
							<p className="text-muted mb-4">
								Contact us for emergency ambulance services or enquiries. For emergency assistance or to know more about our ambulance services, reach out to us:
							</p>
							<div className="d-flex align-items-start mb-3 fw-medium">
								<i className="bi bi-envelope-fill text-danger me-2" />
								<a href="mailto:ceo@stjohncouncil.co.in" className="text-decoration-none text-dark">Email: ceo@stjohncouncil.co.in</a>
							</div>
							<div className="d-flex align-items-start mb-3 fw-medium">
								<i className="bi bi-telephone-fill text-success me-2" />
								<a href="tel:+917404425125" className="text-decoration-none text-dark">Phone: +91 7404425125</a>
							</div>
							<div className="d-flex align-items-start mb-4 fw-medium">
								<i className="bi bi-geo-alt-fill text-danger me-2" />
								<span className="text-dark">Contact your nearest branch for location and availability.</span>
							</div>
							<div className="d-flex flex-wrap gap-2 gap-md-3">
								<Button variant="danger">Contact Us</Button>
								<Button variant="outline-success" href="tel:+917404425125">Call Now</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}

export default AmbulancePage;
