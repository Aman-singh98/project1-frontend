import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { JOURNEY_STEPS } from "../../assets/data/home";

function CertificationJourney() {
  const { t } = useTranslation();

  return (
    <section className="journey-section">
      <Container>
        <h2 className="journey-title">{t("home.journey.title")}</h2>
        <p className="journey-subtitle">
          {t("home.journey.subtitle")}
        </p>
        <div className="journey-steps">
          <div className="journey-line"></div>
          <Row className="text-center justify-content-center">
            {JOURNEY_STEPS.map((item) => (
              <Col
                key={item.id}
                lg={2}
                md={4}
                sm={6}
                xs={12}
                className="step-col"
              >
                <div className="step-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div className="step-label">
                  {t(item.stepKey)}
                </div>
                <h6 className="step-title">
                  {t(item.titleKey)}
                </h6>
                <p className="step-desc">
                  {t(item.descriptionKey)}
                </p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default CertificationJourney;
