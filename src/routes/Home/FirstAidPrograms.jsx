import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import lastCard from "../../assets/images/FistAidKit.jpeg"; // adjust path
import { courses } from "../../assets/data/home";
import { ROUTERS } from "../../constants/router";


function FirstAidPrograms() {
    const navigate = useNavigate();

    return (
        <section className="program-section">
            <Container>
                <div className="mb-3 mb-md-0 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                    <div className="section-header">
                        <h2 className="text-orange">First Aid Training Programs</h2>
                        <p>
                            Empowering individuals with essential life-saving skills through hands-on training
                            and certified programs. Learn CPR, wound care, emergency response, and child first
                            aid to confidently handle real-life situations.
                        </p>
                    </div>
                    <Button
                        className="btn-orange rounded-pill border-0 px-4 py-2 mt-3 mt-md-0 d-flex align-items-center fw-medium"
                        onClick={() => navigate(ROUTERS.Courses)}
                    >
                        View All <i className="bi bi-arrow-right ms-2" />
                    </Button>
                </div>
                <Row className="g-4">
                    <Col lg={9}>
                        <Row className="g-4">
                            {courses.map((course, index) => (
                                <Col md={6} lg={4} key={index}>
                                    <div
                                        className="program-card fixed-card"
                                        style={{ backgroundImage: `url(${course.img})` }}
                                    >
                                        <div className="card-overlay">
                                            <div className="glass-box">
                                                <h5 className="truncate-1">
                                                    {course.title}
                                                </h5>

                                                <p className="truncate-2">
                                                    {course.desc}
                                                </p>

                                                <div className="price-row">
                                                    <span className="price">
                                                        {course.price}
                                                    </span>
                                                    <span className="old-price">
                                                        {course.oldPrice}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col lg={3}>
                        <div
                            className="program-card tall-card"
                            style={{ backgroundImage: `url(${lastCard})` }}
                        >
                            <div className="tall-overlay">
                                <div className="right-content">
                                    <h4>
                                        Learn First Aid <br />
                                        Training <br />
                                        Save Lives <br />
                                        Today
                                    </h4>
                                </div>

                                <div className="view-all-btn" onClick={() => navigate("/courses")}>
                                    View All Courses →
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default FirstAidPrograms;
