// src/components/home/FirstAidTrainingPrograms.jsx

import { Container, Row, Col, Card, Image, Badge } from "react-bootstrap";
import { IMAGES } from "../../constants/images";

const PROGRAMS = [
  {
    id: 1,
    title: "Basic First Aid",
    level: "Beginner",
    duration: "1 Day",
    audience: "Students, volunteers, community members",
    image: IMAGES.EMS,
  },
  {
    id: 2,
    title: "Workplace Safety & First Aid",
    level: "Intermediate",
    duration: "2 Days",
    audience: "Corporate teams, factories, SMEs",
    image: IMAGES.AED,
  },
  {
    id: 3,
    title: "Advanced First Responder",
    level: "Advanced",
    duration: "3 Days",
    audience: "Healthcare staff, emergency responders",
    image: IMAGES.AMBULANCE,
  },
];

function FirstAidTrainingPrograms() {
  return (
    <section className="home-section home-programs">
      <Container>
        <header className="section-header text-center mb-4 mb-md-5">
          <h2 className="section-title">First Aid Training Programs</h2>
          <p className="section-subtitle">
            Structured, hands-on training designed to build real-world lifesaving
            skills for every learner profile.
          </p>
        </header>

        <Row className="g-3 g-md-4">
          {PROGRAMS.map((program) => (
            <Col key={program.id} xs={12} md={4}>
              <Card className="home-program-card h-100 shadow-sm border-0">
                <div className="home-program-card__media">
                  <Image
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                    fluid
                  />
                </div>

                <Card.Body className="d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h3 className="home-program-card__title mb-0">
                      {program.title}
                    </h3>
                    <Badge bg="success" pill className="home-program-card__badge">
                      {program.level}
                    </Badge>
                  </div>

                  <p className="home-program-card__meta mb-1">
                    <span className="home-program-card__meta-label">Duration:</span>{" "}
                    {program.duration}
                  </p>

                  <p className="home-program-card__meta mb-0">
                    <span className="home-program-card__meta-label">Ideal for:</span>{" "}
                    {program.audience}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FirstAidTrainingPrograms;