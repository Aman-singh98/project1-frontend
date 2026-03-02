import { Container, Row, Col } from "react-bootstrap";

function HeroSection({
    title,
    subtitle,
    backgroundImage,
    height = "300px",
    overlay = true,
}) {
    return (
        <div
            className="hero-section"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                height, 
            }}
        >
            {overlay && <div className="hero-overlay" />}
            <Container className="h-100">
                <Row className="h-100 align-items-center">
                    <Col md={8}>
                        <h1 className="hero-title">{title}</h1>
                        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeroSection;
