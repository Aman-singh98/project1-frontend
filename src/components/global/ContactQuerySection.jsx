/**
 * Contact + Submit Query Section
 * Reusable component (can also be used on Home route)
 */
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { INDIA_STATE_DISTRICTS } from "../../assets/data/faq";
import axiosInstance from "../../api/axiosInstance";

const STATE_OPTIONS = Object.keys(INDIA_STATE_DISTRICTS);

// Feedback type options
const FEEDBACK_TYPES = ["Suggestion", "Complaints", "Query", "Others"];
const formDefaultData = {
    name: "",
    mobile: "",
    email: "",
    state: "",
    district: "",
    feedbackType: "",
    message: "",
};

function ContactQuerySection() {
    const [formData, setFormData] = useState(formDefaultData);

    const handleChange = (field) => (e) => {
        const value = e.target.value;
        setFormData((prev) => {
            if (field === "state") {
                // Reset district when state changes
                return { ...prev, state: value, district: "" };
            }
            return { ...prev, [field]: value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post("/query", formData);
            alert(res.data.message);
            setFormData({
                name: "",
                email: "",
                mobile: "",
                state: "",
                district: "",
                feedbackType: "",
                message: ""
            });
        } catch (error) {
            alert(error?.response?.data?.message || "Error");
        }
    };

    const districtOptions =
        formData.state && INDIA_STATE_DISTRICTS[formData.state]
            ? INDIA_STATE_DISTRICTS[formData.state]
            : [];

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
                        <div className="query-card">
                            <h3 className="query-title mb-3">Submit Query</h3>
                            <Form onSubmit={handleSubmit} className="query-form">
                                <Row className="g-3">
                                    <Col xs={12} md={6}>
                                        <Form.Group controlId="queryName">
                                            <Form.Label>
                                                Name <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange("name")}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group controlId="queryMobile">
                                            <Form.Label>
                                                Mobile <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="tel"
                                                placeholder="Enter your mobile number"
                                                value={formData.mobile}
                                                onChange={handleChange("mobile")}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group controlId="queryEmail">
                                            <Form.Label>
                                                Email <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange("email")}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group controlId="queryState">
                                            <Form.Label>
                                                State <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Select
                                                value={formData.state}
                                                onChange={handleChange("state")}
                                                required
                                            >
                                                <option value="">Select State</option>
                                                {STATE_OPTIONS?.map((state) => (
                                                    <option key={state} value={state}>
                                                        {state}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group controlId="queryDistrict">
                                            <Form.Label>
                                                District <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Select
                                                value={formData.district}
                                                onChange={handleChange("district")}
                                                required
                                                disabled={!formData.state}
                                            >
                                                <option value="">
                                                    {formData.state
                                                        ? "Select District"
                                                        : "Select state first"}
                                                </option>
                                                {districtOptions?.map((district) => (
                                                    <option key={district} value={district}>
                                                        {district}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group controlId="queryFeedbackType">
                                            <Form.Label>
                                                Feedback Type <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Select
                                                value={formData.feedbackType}
                                                onChange={handleChange("feedbackType")}
                                                required
                                            >
                                                <option value="">Select Feedback Type</option>
                                                {FEEDBACK_TYPES?.map((type) => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group controlId="queryMessage">
                                            <Form.Label>
                                                Comments/Suggestion{" "}
                                                <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={4}
                                                placeholder="Message"
                                                value={formData.message}
                                                onChange={handleChange("message")}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Button type="submit" className="w-100 btn-orange rounded-5" variant="">
                                            SUBMIT
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContactQuerySection;
