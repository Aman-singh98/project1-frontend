import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { stats } from "../../assets/data/home";
import { IMAGES } from "../../constants/images";

function KeyHighlights() {
	const { t } = useTranslation();

	return (
		<section className="highlights-section">
			<Container>
				<Row className="align-items-stretch">
					<Col lg={6} className="left-content">
						<h2>{t("home.highlights.title")}</h2>
						<p className="subtitle">
							{t("home.highlights.subtitle")}
						</p>
						<ul className="highlight-list">
							<li>{t("home.highlights.bullets.point1")}</li>
							<li>{t("home.highlights.bullets.point2")}</li>
							<li>{t("home.highlights.bullets.point3")}</li>
							<li>{t("home.highlights.bullets.point4")}</li>
						</ul>
						<div className="stats-row">
							{stats?.map((item, index) => (
								<div className="stat-item" key={index}>
									<div className="icon-circle">
										<i className={`bi ${item.icon}`} />
									</div>
									<h5>{item.number}</h5>
									<span>{item.label}</span>
								</div>
							))}
						</div>
					</Col>
					<Col lg={6} className="image-wrapper">
						<div className="image-card">
							<Image src={IMAGES.IMAGE11} fluid alt="Training" />
							<div className="glass-card top">
								<i className="bi bi-globe2" />
								<div>
									<strong>{t("home.highlights.topBadge.title")}</strong>
									<span>{t("home.highlights.topBadge.subtitle")}</span>
								</div>
							</div>
							<div className="glass-card bottom">
								<i className="bi bi-book" />
								<div>
									<strong>{t("home.highlights.bottomBadge.title")}</strong>
									<span>{t("home.highlights.bottomBadge.subtitle")}</span>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default KeyHighlights;
