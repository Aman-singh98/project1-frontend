import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { leaders } from "../../assets/data/home";

function Leadership() {
	const { t } = useTranslation();

	return (
		<section className="leadership-section">
			<Container>
				<div className="section-header">
					<h2>{t("home.leadership.title")}</h2>
					<p>{t("home.leadership.subtitle")}</p>
				</div>
				<Row className="g-4">
					{leaders?.map((item, index) => (
						<Col xs={12} md={6} lg={3} key={index}>
							<div className="leader-card">
								<div className="leader-image" />
								<div className="leader-content">
									<h6>{item.title}</h6>
									<span className="role">{item.role}</span>
									<p className="dept">{item.dept}</p>
									<small>{item.desc}</small>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
}

export default Leadership;