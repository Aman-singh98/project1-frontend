import { Container, Row, Col, Image } from "react-bootstrap";
import { stats } from "../../assets/data/home";
import { IMAGES } from "../../constants/images";

function KeyHighlights() {
	return (
		<section className="highlights-section">
			<Container>
				<Row className="align-items-stretch">
					<Col lg={6} className="left-content">
						<h2>Key Highlights of First Aid Training</h2>
						<p className="subtitle">
							Explore the growth and accomplishments of our first aid training
							programs in promoting safety across the community and empowering
							individuals through life-saving skills.
						</p>
						<ul className="highlight-list">
							<li>Affiliated with National First Aid Association</li>
							<li>Regularly hosts state & district-level training programs</li>
							<li>Actively promotes first aid in schools & workplaces</li>
							<li>Focuses on community safety and emergency preparedness</li>
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
									<strong>Global Recognition</strong>
									<span>International Standards</span>
								</div>
							</div>
							<div className="glass-card bottom">
								<i className="bi bi-book" />
								<div>
									<strong>Expert Training</strong>
									<span>Certified Programs</span>
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
