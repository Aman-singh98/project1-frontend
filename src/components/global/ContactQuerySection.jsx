/**
 * Contact + Submit Query Section
 * Reusable component (can also be used on Home route)
 */
import { Container, Row, Col } from "react-bootstrap";
import QueryCard from "./QueryCard";


function ContactQuerySection() {
	return (
		<section className="faq-contact-section py-5">
			<Container>
				<Row className="g-4 align-items-start">
					<Col xs={12} lg={5}>
						<h2 className="contact-title mb-3">Contact Us</h2>
						<p className="contact-subtitle mb-4">
							Complete the form to send us any query or feedback about the website.
							Your opinion, suggestions, and feedback will be very much appreciated.
						</p>

						<div className="contact-info-block mb-3">
							<div className="contact-icon">
								<i className="bi bi-telephone-fill" />
							</div>
							<div>
								<h6 className="contact-label mb-1">Contact Number</h6>
								<a href="tel:+917414425125" className="contact-link">
									+91 7414425125
								</a>
							</div>
						</div>

						<div className="contact-info-block mb-3">
							<div className="contact-icon">
								<i className="bi bi-geo-alt-fill" />
							</div>
							<div>
								<h6 className="contact-label mb-1">Address</h6>
								<p className="mb-1 contact-text">
									<strong>Corporate Office:</strong> 99 Urban Estate 2 Hisar
									Haryana 125001
								</p>
								<p className="mb-0 contact-text">
									<strong>Registered Office:</strong> 102/7 Gautam Colony Narela
									New Delhi 110042
								</p>
							</div>
						</div>
						<div className="contact-info-block">
							<div className="contact-icon">
								<i className="bi bi-envelope-fill" />
							</div>
							<div>
								<h6 className="contact-label mb-1">Email</h6>
								<a
									href="mailto:co@stjohncouncil.co.in"
									className="contact-link contact-email"
								>
									co@stjohncouncil.co.in
								</a>
							</div>
						</div>
					</Col>
					<Col xs={12} lg={7}>
						<QueryCard />
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default ContactQuerySection;
