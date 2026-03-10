/**
 * FirstAddKit
 * -----------------
 * Fully Responsive FirstAddKit Page
 */
import { useEffect, useState } from 'react';
import { IMAGES } from '../constants/images';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axiosInstance from '../api/axiosInstance';
import { getPublicKits } from '../services/kitService';
import HeroSection from "../components/global/HeroSection";
import DeliveryForm from '../components/global/DeliveryForm';

function FirstAddKit() {
	const [kits, setKits] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [selectedKit, setSelectedKit] = useState(null);

	// Fetch all kits data.
	const fetchKits = async () => {
		try {
			const res = await getPublicKits();
			setKits(res.data?.data ?? res.data ?? []);
		} catch (error) {
			console.error("Fetch public kits error:", error);
		}
	};

	useEffect(() => {
		fetchKits();
	}, []);

	const openForm = (kit) => {
		setSelectedKit(kit);
		setShowForm(true);
	};

	const handleFormSubmit = async (formData) => {
		try {

			const orderRes = await axiosInstance.post("/payment/create-order", {
				kitId: selectedKit._id,
				price: selectedKit.newPrice || selectedKit.price,
				customer: formData
			});

			const order = orderRes.data;

			const options = {
				key: import.meta.env.VITE_RAZORPAY_KEY_ID,
				amount: order.amount,
				currency: order.currency,
				name: "First Aid Kit",
				description: selectedKit.title,
				order_id: order.id,

				handler: async function (response) {

					await axiosInstance.post(
						"/payment/verify-payment",
						{
							...response,
							customer: formData,
							kitId: selectedKit._id
						}
					);

					alert("Payment Successful");
					setShowForm(false);

				}
			};

			const razor = new window.Razorpay(options);
			razor.open();

		} catch (error) {
			console.error("Payment error:", error);
		}
	};

	return (
		<>
			<HeroSection
				title="First Aid Kit"
				subtitle="Be prepared. Stock up on essential first aid supplies."
				backgroundImage={IMAGES.AMBULANCE}
			/>
			<Container>
				<div className="px-2 px-sm-3 px-md-4 py-4 py-md-5">
					<Row className="g-2 g-lg-3">
						<Col xs={12} lg={8} xl={9}>
							<h2 className="fw-bold mb-3 text-dark">
								St. John Ambulance India <span className="text-danger">First Aid Kit</span>
							</h2>
							<p className="text-dark mb-3">
								A well-stocked first-aid kit can help you respond effectively to common injuries and emergencies. Keep at least one first-aid kit in your home and one in your car. Store your kits someplace easy to get to and out of the reach of young children. Make sure children old enough to understand the purpose of the kits know where they're stored.
							</p>
							<p className="text-dark mb-4">
								You can buy first aid kits from your pharmacy or from providers such as St. John Ambulance India. Specialty kits are also available to meet specific needs. You can buy first-aid kits at many drugstores or assemble your own. You may want to tailor your kit based on your activities and needs.
							</p>
							<h3 className="fw-bold mb-4 text-dark">Available Kits</h3>
							<Row className="g-4">
								{kits?.map((kit) => (
									<Col xs={12} sm={6} key={kit.id}>
										<Card className="h-100 border-0 shadow-sm rounded-3 overflow-hidden">
											<div className="card-img-wrapper">
												<Card.Img
													src={kit.imageUrl}
													alt={kit.title}
													className="h-100 w-100"
													style={{ objectFit: 'cover' }}
													fluid
												/>
											</div>
											<Card.Body className="p-3 p-md-4">
												<Card.Title className="fw-bold mb-2 text-dark">
													<i className="bi bi-bag-plus text-danger me-2" />
													{kit.title}
												</Card.Title>
												<Card.Text className="text-muted small mb-3">{kit.description}</Card.Text>
												<div className="mb-3">
													{kit.oldPrice && (
														<span className="text-muted text-decoration-line-through me-2">₹{kit.oldPrice}</span>
													)}
													<span className="text-danger fw-bold">₹{kit.newPrice ?? kit.price ?? "—"}</span>
												</div>
												<Button variant="warning" className="w-100 fw-semibold" onClick={() => openForm(kit)}>Buy Kit</Button>
											</Card.Body>
										</Card>
									</Col>
								))}
							</Row>
							<Card className="mt-4 mt-md-5 border-0 shadow-sm rounded-3">
								<Card.Body className="p-3 p-md-4">
									<h5 className="fw-bold mb-3 text-dark">Get in Touch</h5>
									<p className="text-muted mb-3">Reach out to order first aid kits or for any queries.</p>
									<div className="d-flex align-items-start mb-3">
										<i className="bi bi-envelope-fill text-danger me-2" />
										<a href="mailto:co@stjohncouncil.co.in" className="text-decoration-none text-dark">Email: co@stjohncouncil.co.in</a>
									</div>
									<div className="d-flex align-items-start mb-3">
										<i className="bi bi-telephone-fill text-success me-2" />
										<a href="tel:+917414425125" className="text-decoration-none text-dark">Phone: +91 7414425125</a>
									</div>
									<div className="d-flex align-items-start mb-4">
										<i className="bi bi-geo-alt-fill text-danger me-2" />
										<span className="text-dark">Contact your nearest branch for location and availability.</span>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} lg={4} xl={3}>
							<div className="need-help-sticky">
								<Card className="border-0 shadow-sm rounded-3 overflow-hidden">
									<Card.Body className="p-4">
										<h4 className="fw-bold mb-4 text-dark">Need Help?</h4>
										<div className="d-flex align-items-center mb-3">
											<div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3" style={{ width: "44px", height: "44px" }}>
												<i className="bi bi-telephone-fill" />
											</div>
											<div>
												<small className="text-muted d-block">Call Us</small>
												<a href="tel:+917414425125" className="fw-semibold text-dark text-decoration-none">+91 7414425125</a>
											</div>
										</div>
										<div className="d-flex align-items-center mb-3">
											<div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3" style={{ width: "44px", height: "44px" }}>
												<i className="bi bi-whatsapp" />
											</div>
											<div>
												<small className="text-muted d-block">WhatsApp</small>
												<a href="https://wa.me/917414425125" className="fw-semibold text-dark text-decoration-none">+91 7414425125</a>
											</div>
										</div>
										<div className="d-flex align-items-center">
											<div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3" style={{ width: "44px", height: "44px" }}>
												<i className="bi bi-envelope-fill" />
											</div>
											<div>
												<small className="text-muted d-block">Email Us</small>
												<a href="mailto:co@stjohncouncil.co.in" className="text-decoration-none text-dark fw-semibold">Email: co@stjohncouncil.co.in</a>
											</div>
										</div>
									</Card.Body>
								</Card>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
			<DeliveryForm
				show={showForm}
				onClose={() => setShowForm(false)}
				onSubmit={handleFormSubmit}
			/>
		</>
	);
}

export default FirstAddKit;
