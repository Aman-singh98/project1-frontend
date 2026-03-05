import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import QueryCard from "../../components/global/QueryCard";
import FAQAccordion from "../../components/global/FAQAccordion";

function QuickServices() {
	const { t } = useTranslation();

	const services = [
		{
			icon: "bi-heart",
			title: t("quickServices.services.cpr.title"),
			desc: t("quickServices.services.cpr.description"),
			popular: true,
		},
		{
			icon: "bi-box-seam",
			title: t("quickServices.services.firstAidKits.title"),
			desc: t("quickServices.services.firstAidKits.description"),
			popular: true,
		},
		{
			icon: "bi-book",
			title: t("quickServices.services.burnsCare.title"),
			desc: t("quickServices.services.burnsCare.description"),
			popular: true,
		},
		{
			icon: "bi-people",
			title: t("quickServices.services.childFirstAid.title"),
			desc: t("quickServices.services.childFirstAid.description"),
		},
		{
			icon: "bi-telephone",
			title: t("quickServices.services.helpline.title"),
			desc: t("quickServices.services.helpline.description"),
			popular: true,
		},
		{
			icon: "bi-geo-alt",
			title: t("quickServices.services.trainingCenters.title"),
			desc: t("quickServices.services.trainingCenters.description"),
		},
	];

	const quickLinks = [
		{
			label: t("quickServices.quickLinks.items.ambulance.label"),
			link: "ambulance",
			subtitle: t("quickServices.quickLinks.items.ambulance.subtitle"),
		},
		{
			label: t("quickServices.quickLinks.items.firstAidKit.label"),
			link: "first-add-kit",
			subtitle: t("quickServices.quickLinks.items.firstAidKit.subtitle"),
		},
		{
			label: t("quickServices.quickLinks.items.about.label"),
			link: "about",
			subtitle: t("quickServices.quickLinks.items.about.subtitle"),
		},
		{
			label: t("quickServices.quickLinks.items.skillCentre.label"),
			link: "courses",
			subtitle: t("quickServices.quickLinks.items.skillCentre.subtitle"),
		},
	];

	return (
		<section className="quick-section">
			<Container className="quick-services-container">
				<Row>
					<Col lg={8}>
						<h3 className="section-title">
							{t("quickServices.title")}
						</h3>
						<p className="section-subtitle">
							{t("quickServices.subtitle")}
						</p>
						<Row className="g-3">
							{services.map((service, index) => (
								<Col lg={4} md={6} key={index}>
									<Card className="service-card">
										{service.popular && (
											<Badge className="popular-badge">
												{t("quickServices.popularBadge")}
											</Badge>
										)}
										<div className="service-icon">
											<i className={`bi ${service.icon}`} />
										</div>
										<Card.Body>
											<Card.Title>{service.title}</Card.Title>
											<Card.Text>{service.desc}</Card.Text>
										</Card.Body>
									</Card>
								</Col>
							))}
						</Row>
					</Col>
					<Col lg={4} className="quick-links">
						<h3 className="section-title">
							{t("quickServices.quickLinks.title")}
						</h3>
						<p className="section-subtitle">
							{t("quickServices.quickLinks.subtitle")}
						</p>
						{quickLinks.map((item, index) => (
							<NavLink
								key={index}
								to={item.link}
								className="quick-link-item text-decoration-none"
							>
								<i className="bi bi-file-text link-icon" />
								<div>
									<span className="title d-block">
										{item.label}
									</span>
									<span className="subtitle">
										{item.subtitle}
									</span>
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
						<QueryCard title={t("quickServices.queryCardTitle")} />
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default QuickServices;
