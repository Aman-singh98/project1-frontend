import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { services } from "../../assets/data/home";

function WhatWeDo() {
  const { t } = useTranslation();

  return (
    <section className="what-section">
      <Container>
        <div className="section-header">
          <h2>{t("home.whatWeDo.title")}</h2>
          <p>{t("home.whatWeDo.subtitle")}</p>
        </div>
        <Row className="g-4">
          {services.map((item, index) => (
            <Col xs={6} md={6} lg={4} key={index}>
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
