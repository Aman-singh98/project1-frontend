import { Container, Row, Col } from "react-bootstrap";
import { leaders } from "../../assets/data/home";

function Leadership() {
    return (
        <section className="leadership-section">
            <Container>
                <div className="section-header">
                    <h2>Our Leadership</h2>
                    <p>Meet the team that makes our training programs possible.</p>
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