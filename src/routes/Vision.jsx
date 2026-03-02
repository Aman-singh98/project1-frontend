/**
 * Vision
 */
import { Container, Row, Col, Card } from "react-bootstrap";
import HeroSection from "../components/global/HeroSection";
import { IMAGES } from "../constants/images";
import "bootstrap-icons/font/bootstrap-icons.css";

const VISION_PILLARS = [
	{
		id: 1,
		icon: "bi-shield-check",
		title: "A Safer India",
		description:
			"We envision an India where every citizen has access to first aid knowledge and where no life is lost for want of basic emergency care. Road accidents, cardiac arrests, and everyday injuries can be mitigated when people know what to do in the first few minutes.",
	},
	{
		id: 2,
		icon: "bi-globe2",
		title: "National Reach",
		description:
			"To be present in every state and union territory with accredited training centres, volunteer units, and community programmes. We aim to have at least one recognised centre in every major city and district.",
	},
	{
		id: 3,
		icon: "bi-award",
		title: "Gold Standard in Training",
		description:
			"To be the most trusted name in first aid and CPR training, recognised by employers, institutions, and government bodies across the country. Our certificates should be the default choice for compliance and employability.",
	},
	{
		id: 4,
		icon: "bi-people-fill",
		title: "Volunteer Movement",
		description:
			"To build a large trained volunteer force that can support disaster response, public events, and community health initiatives. Volunteers are the backbone of our outreach and emergency response.",
	},
	{
		id: 5,
		icon: "bi-heart",
		title: "Humanity First",
		description:
			"To uphold the values of service, compassion, and acting in the interest of humanity without distinction. Our work is for everyone, regardless of background or ability to pay.",
	},
	{
		id: 6,
		icon: "bi-lightning-charge",
		title: "Innovation & Impact",
		description:
			"To use technology, partnerships, and modern pedagogy to scale our impact and measure outcomes in lives saved and communities strengthened. We invest in digital learning and data-driven improvement.",
	},
];

const VISION_PATH = [
	{
		id: 1,
		icon: "bi-flag",
		title: "Short term",
		description:
			"Expand skill centres and training partners in all regions, increase corporate and institutional tie-ups, and launch digital learning modules.",
	},
	{
		id: 2,
		icon: "bi-clipboard-check",
		title: "Medium term",
		description:
			"Establish volunteer units in every state, achieve recognition from key government and industry bodies, and measure and publish impact metrics annually.",
	},
	{
		id: 3,
		icon: "bi-diagram-3",
		title: "Longer horizon",
		description:
			"Standardise instructor development and refresher cycles nationwide, strengthen quality audits, and ensure consistent certification and training outcomes across all centres and partners.",
	},
	{
		id: 4,
		icon: "bi-building",
		title: "Long term",
		description:
			"Become the default choice for first aid and CPR training in India, build a volunteer force that contributes meaningfully to national emergency response capacity.",
	},
];

function Vision() {
	return (
		<>
			<HeroSection
				title="Vision"
				subtitle="We aim to be the leading organisation in India for first aid training, emergency response, and community health—empowering individuals and institutions to act with confidence when it matters most."
				backgroundImage={IMAGES.AMBULANCE}
			/>

			{/* Intro */}
			<section className="py-5 vision-page bg-white">
				<Container>
					<Row>
						<Col xs={12} lg={10}>
							<h2 className="h3 fw-bold text-dark mb-3">Our Vision</h2>
							<p className="text-secondary mb-3 lh-base">
								We envision an India where first aid is not a rare skill but a
								common one—where schools teach it, corporates mandate it, and
								communities expect it. If every public space has trained first
								aiders and every family has at least one person who can respond
								in an emergency, our nation becomes safer and more resilient.
							</p>
							<p className="text-secondary mb-0 lh-base">
								We work towards this vision through accredited training centres,
								partnerships with institutions and corporates, volunteer
								programmes, and public awareness campaigns. We align with national
								initiatives and support state and central bodies to integrate
								first aid into education and workplace safety norms.
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Pillars */}
			<section className="py-5 vision-section-soft">
				<Container>
					<Row className="mb-4">
						<Col xs={12} lg={10}>
							<h2 className="h3 fw-bold text-dark mb-2">Pillars of Our Vision</h2>
							<p className="text-secondary mb-0 lh-base">
								The core themes that guide how we scale training, strengthen
								communities, and deliver measurable impact.
							</p>
						</Col>
					</Row>

					<Row className="gy-4">
						{VISION_PILLARS.map((item) => (
							<Col xs={12} md={6} lg={4} key={item.id}>
								<Card className="vision-card h-100 border-0 shadow-sm">
									<Card.Body className="d-flex flex-column">
										<div className="vision-icon-circle mb-3">
											<i className={`${item.icon} vision-icon`} aria-hidden="true" />
										</div>
										<Card.Title className="h6 fw-semibold mb-2">
											{item.title}
										</Card.Title>
										<Card.Text className="text-muted small mb-0">
											{item.description}
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</section>

			{/* Path to Vision */}
			<section className="py-5 bg-white">
				<Container>
					<Row className="mb-4">
						<Col xs={12} lg={10}>
							<h2 className="h3 fw-bold text-dark mb-2">
								<i className="bi bi-calendar3 me-2 text-orange" aria-hidden="true" />
								Path to Our Vision
							</h2>
						</Col>
					</Row>

					<Row className="gy-4">
						{VISION_PATH.map((item) => (
							<Col xs={12} sm={6} lg={3} key={item.id}>
								<Card className="vision-path-card h-100 border-0 shadow-sm">
									<Card.Body>
										<div className="d-flex align-items-center gap-2 mb-2">
											<span className="vision-path-icon">
												<i className={item.icon} aria-hidden="true" />
											</span>
											<Card.Title className="h6 fw-semibold mb-0">
												{item.title}
											</Card.Title>
										</div>
										<Card.Text className="text-muted small mb-0">
											{item.description}
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</section>
		</>
	);
}

export default Vision;
