import { Container, Row, Col, Card } from "react-bootstrap";
import { services } from "../../assets/data/home";

function WhatWeDo() {
  return (
    <section className="what-section">
      <Container>
        <div className="section-header">
          <h2>What We Do</h2>
          <p>
            Empowering individuals and organizations with life-saving skills
            through comprehensive training programs
          </p>
        </div>
        <Row className="g-4">
          {services.map((item, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <Card className={`service-card ${item.bg}`}>
                <div className="top-border"></div>
                <Card.Body>
                  <Card.Title className="card-title">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="card-text">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WhatWeDo;
