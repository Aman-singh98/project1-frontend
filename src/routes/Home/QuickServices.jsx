import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import QueryCard from "../../components/global/QueryCard";
import FAQAccordion from "../../components/global/FAQAccordion";


const services = [
	{
		icon: "bi-heart",
		title: "CPR & Life Saving Training",
		desc: "Learn CPR, AED usage, and essential life-saving techniques from certified instructors",
		popular: true,
	},
	{
		icon: "bi-box-seam",
		title: "First Aid Kits",
		desc: "Purchase emergency first aid kits and supplies suitable for home, office, and travel",
		popular: true,
	},
	{
		icon: "bi-book",
		title: "Burns & Wound Care",
		desc: "Guidance and tutorials on managing burns, cuts, and other injuries effectively",
		popular: true,
	},
	{
		icon: "bi-people",
		title: "Child & Infant First Aid",
		desc: "Specialized first aid techniques for infants and children to handle emergencies safely",
	},
	{
		icon: "bi-telephone",
		title: "Emergency Helpline",
		desc: "Call our 24/7 helpline for immediate guidance during medical emergencies",
		popular: true,
	},
	{
		icon: "bi-geo-alt",
		title: "Training Centers & Offices",
		desc: "Find nearest training centers, office locations, and contact details for assistance",
	},
];

const quickLinks = [
	{
		label: "Ambulance Service",
		link: "ambulance",
		subtitle: 'Emergency ambulance kit'
	},
	{
		label: "First Aid Kit",
		link: "first-add-kit",
		subtitle: 'Browser and order first aid kits'
	},
	{
		label: "About Us",
		link: "about",
		subtitle: 'Get in touch with us'
	},
	{
		label: "Skill Centre",
		link: "courses",
		subtitle: 'Find skill centers and batches.'
	}
];

function QuickServices() {
	return (
		<section className="quick-section">
			<Container className="quick-services-container">
				<Row>
					<Col lg={8}>
						<h3 className="section-title">Quick Services</h3>
						<p className="section-subtitle">
							Access essential municipal services with just a few clicks.
						</p>
						<Row className="g-3">
							{services.map((service, index) => (
								<Col lg={4} md={6} key={index}>
									<Card className="service-card">
										{service.popular && (
											<Badge className="popular-badge">
												Popular
											</Badge>
										)}
										<div className="service-icon">
											<i className={`bi ${service.icon}`} />
										</div>
										<Card.Body>
											<Card.Title>
												{service.title}
											</Card.Title>
											<Card.Text>
												{service.desc}
											</Card.Text>
										</Card.Body>
									</Card>
								</Col>
							))}
						</Row>
					</Col>
					<Col lg={4} className="quick-links">
						<h3 className="section-title">What we do</h3>
						<p className="section-subtitle">
							Navigate to important sections quickly.
						</p>
						{quickLinks.map((item, index) => (
							<NavLink
								key={index}
								to={item.link}
								className="quick-link-item text-decoration-none"
							>
								<i className="bi bi-file-text link-icon" />
								<div>
									<span className="title d-block">{item.label}</span>
									<span className="subtitle">{item.subtitle}</span>
								</div>
								<i className="bi bi-chevron-right ms-auto" />
							</NavLink>
						))}
					</Col>
				</Row>
			</Container>
			<Container style={{ padding: "10px 0" }}>
				<Row>
					<Col xs={12} lg={5}>
						<FAQAccordion />
					</Col>
					<Col xs={12} lg={7}>
						<QueryCard title="Have a question? Contact us directly!" />
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default QuickServices;
