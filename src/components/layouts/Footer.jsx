/**
 * Footer section
 * it contain slider and footer content.
 */
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IMAGES } from "../../constants/images";
import { ICONS } from "../../constants/icons";
import { FacebookLink, InstagramLink, LinkedinLink, NoshCompanyLink, TwitterLink, YoutubeLink } from "../../constants/app";
import { ROUTERS } from "../../constants/router";
import ContinuousFooterSlider from "../global/ContinuousFooterSlider";
import { quickLinks, popularCourses } from "../../assets/data/footer";
import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";

function Footer() {
	// States
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubscribe = async (e) => {
		e.preventDefault();

		if (!email) {
			alert("Please enter your email");
			return;
		}
		try {
			setLoading(true);
			const res = await axiosInstance.post("/subscribe", {
				email
			});
			alert(res.data.message);
			setEmail("");
		} catch (error) {
			alert(error?.response?.data?.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="footer-partner-wrapper">
				<Container>
					<div className="partner-floating-box">
						<ContinuousFooterSlider />
					</div>
				</Container>
			</div>
			<footer className="footer-main">
				<Container>
					<Row className="gy-4">
						<Col lg={3} md={6}>
							<Row className="align-items-center footer-logo-wrapper g-2">
								<Col xs="auto">
									<Image
										src={IMAGES.BLACK_LOGO}
										alt="St John Ambulance Logo"
										className="footer-logo"
										fluid
									/>
								</Col>
								<Col>
									<div className="footer-text-wrapper">
										<h5 className="footer-title mb-0">
											ST JOHN AMBULANCE
										</h5>
										<p className="footer-subtitle mb-0">
											INTERNATIONAL ASSOCIATION
										</p>
									</div>
								</Col>
							</Row>
							<p className="footer-text">
								Empowering individuals and communities with essential first-aid knowledge and life-saving skills.
							</p>
							<p className="footer-text">
								<i className={`${ICONS.Location} me-2 text-orange`} />
								Corporate Office: SCO-99, 2nd floor, Urban Estate-II, Hissar, Haryana (125001)
							</p>
							<p className="footer-text d-flex align-items-center">
								<i className={`${ICONS.Phone} me-2 text-orange`} />
								<a href="tel:+917404425125" className="footer-link">
									+91-7404425125
								</a>
							</p>
							<p className="footer-text d-flex align-items-center">
								<i className={`${ICONS.Email} me-2 text-orange`} />
								<a href="mailto:ceo@stjohncouncil.co.in" className="footer-link">
									ceo@stjohncouncil.co.in
								</a>
							</p>
						</Col>
						<Col lg={3} md={6}>
							<h5 className="footer-title">Quick Links</h5>
							<ul className="footer-list">
								{quickLinks?.map(({ label, path }) => (
									<li key={label}>
										<Link to={path} className="footer-link">
											<i className={`${ICONS.ArrowRightShort} me-1 text-orange`} />
											{label}
										</Link>
									</li>
								))}
							</ul>
						</Col>
						<Col lg={3} md={6}>
							<h5 className="footer-title">Popular Courses</h5>
							<ul className="footer-list">
								{popularCourses?.map(({ label, path }) => (
									<li key={label}>
										<Link to={path} className="footer-link">
											{label}
										</Link>
									</li>
								))}
							</ul>
						</Col>
						<Col lg={3} md={6}>
							<h5 className="footer-title">Stay Updated</h5>
							<p className="footer-text">
								Subscribe to get the latest updates on first-aid courses, resources, and events.
							</p>
							<Form className="mb-3" onSubmit={handleSubscribe}>
								<Form.Control
									type="email"
									placeholder="Enter your email"
									className="footer-input mb-2"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<Button type="submit" className="btn-orange w-100" disabled={loading}>
									{loading ? "Subscribing..." : "Subscribe"}
								</Button>
							</Form>
							<div className="social-container">
								<a href={FacebookLink} target="_blank" rel="noopener noreferrer" className="social-box facebook">
									<i className={ICONS.Facebook} />
								</a>
								<a href={TwitterLink} target="_blank" rel="noopener noreferrer" className="social-box twitter">
									<i className={ICONS.Twitter} />
								</a>
								<a href={InstagramLink} target="_blank" rel="noopener noreferrer" className="social-box instagram">
									<i className={ICONS.Instagram} />
								</a>
								<a href={YoutubeLink} target="_blank" rel="noopener noreferrer" className="social-box youtube">
									<i className={ICONS.YouTube} />
								</a>
								<a href={LinkedinLink} target="_blank" rel="noopener noreferrer" className="social-box linkedin">
									<i className={ICONS.Linkedin} />
								</a>
							</div>
						</Col>
					</Row>
				</Container>
				<div className="footer-bottom mt-4">
					<Container className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
						<p className="mb-2 mb-lg-0">
							© 2026 ST. John Ambulance. All rights reserved.
						</p>
						<div className="footer-policies">
							<Link to={ROUTERS.Privacy}>Privacy Policy</Link>
							<Link to={ROUTERS.Terms}>Terms & Conditions</Link>
							<Link to={ROUTERS.Refund}>Refund Policy</Link>
						</div>
						<p className="mb-0">
							Designed & Developed by{" "}
							<a
								href={NoshCompanyLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange"
							>
								DIGITAL CHAMPS
							</a>
						</p>
					</Container>
				</div>
			</footer>
		</>
	);
}

export default Footer;
