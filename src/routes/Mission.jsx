/**
 * Mission
 * Production-ready Mission page: Statement, Strategic Objectives,
 * Impact in Numbers, and Commitment sections.
 */
import { Container, Row, Col, Card } from "react-bootstrap";
import HeroSection from "../components/global/HeroSection";
import { IMAGES } from "../constants/images";
import "bootstrap-icons/font/bootstrap-icons.css";

// ===== Strategic Objectives =====
const STRATEGIC_OBJECTIVES = [
    {
        id: 1,
        icon: "bi-bullseye",
        title: "Save Lives",
        description:
            "To equip individuals and communities across India with life-saving first aid and CPR skills, reducing preventable deaths and injuries in emergencies.",
    },
    {
        id: 2,
        icon: "bi-heart",
        title: "Community First",
        description:
            "To put community wellbeing at the centre of everything we do, ensuring that first aid training reaches those who need it most, regardless of location or background.",
    },
    {
        id: 3,
        icon: "bi-people-fill",
        title: "Train the Nation",
        description:
            "To build a nationwide network of certified first aiders through scalable, accessible training programmes that meet international standards.",
    },
    {
        id: 4,
        icon: "bi-shield-check",
        title: "Quality & Standards",
        description:
            "To deliver training that meets national and international standards, with certified instructors and up-to-date curricula in first aid, CPR, and AED.",
    },
    {
        id: 5,
        icon: "bi-journal-bookmark",
        title: "Awareness & Education",
        description:
            "To promote public awareness about first aid, road safety, and emergency response through schools, colleges, corporates, and community outreach.",
    },
    {
        id: 6,
        icon: "bi-graph-up-arrow",
        title: "Partnership & Growth",
        description:
            "To work with government bodies, hospitals, NGOs, and corporates to scale our reach and strengthen India's emergency response capacity.",
    },
];

// ===== Impact in Numbers =====
const IMPACT_STATS = [
    { id: 1, icon: "bi-people-fill", value: "1L+", label: "Lives trained in first aid" },
    { id: 2, icon: "bi-person-badge-fill", value: "109K+", label: "Volunteers & first aiders" },
    { id: 3, icon: "bi-calendar-check", value: "50+", label: "Years of service" },
    { id: 4, icon: "bi-bar-chart-fill", value: "120K+", label: "Training programmes delivered" },
];

// ===== Our Commitment =====
const COMMITMENTS = [
    "We train only using evidence-based, medically approved first aid and CPR guidelines.",
    "We maintain transparency in our programmes, certifications, and use of resources.",
    "We treat every learner with respect and ensure inclusive, accessible training.",
    "We measure and report our impact in terms of people trained and certifications issued.",
    "We support our trainers and volunteers with continuous learning and recognition.",
];

function Mission() {
    return (
        <>
            <HeroSection
                title="Mission"
                subtitle="Our mission at St. John Ambulance India is to save lives and build a nation of first aiders."
                backgroundImage={IMAGES.AMBULANCE}
            />

            {/* ===== 1. OUR MISSION STATEMENT ===== */}
            <section className="py-5 mission-page bg-white">
                <Container>
                    <Row>
                        <Col xs={12} lg={10}>
                            <h2 className="h3 fw-bold text-dark mb-4">
                                Our Mission Statement
                            </h2>
                            <p className="text-secondary mb-3 lh-base">
                                St. John Ambulance India exists to empower every Indian with the
                                skills to save lives. Our mission is to deliver high-quality first
                                aid and CPR training that meets international standards, while
                                making it accessible to communities across the country.
                            </p>
                            <p className="text-secondary mb-3 lh-base">
                                Rooted in a heritage of service dating back over a century, we
                                combine proven methodologies with modern teaching approaches. We
                                work with schools, colleges, corporates, government bodies, and
                                community organisations to build a nation of confident first
                                aiders.
                            </p>
                            <p className="text-secondary mb-0 lh-base">
                                Our approach is evidence-based, inclusive, and aligned with
                                national health priorities. We believe that when more people know
                                first aid, fewer lives are lost to preventable emergencies.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===== 2. OUR STRATEGIC OBJECTIVES ===== */}
            <section className="py-5 mission-section-soft">
                <Container>
                    <Row className="mb-4">
                        <Col xs={12} lg={10}>
                            <h2 className="h3 fw-bold text-dark mb-2">
                                Our Strategic Objectives
                            </h2>
                            <p className="text-secondary mb-0 lh-base">
                                Clear, measurable goals that guide our programmes and partnerships
                                across India.
                            </p>
                        </Col>
                    </Row>

                    <Row className="gy-4">
                        {STRATEGIC_OBJECTIVES.map((item) => (
                            <Col xs={12} md={6} lg={4} key={item.id}>
                                <Card className="mission-objective-card h-100 border-0 shadow-sm">
                                    <Card.Body className="d-flex flex-column">
                                        <div className="mission-icon-circle mb-3">
                                            <i
                                                className={`${item.icon} mission-icon`}
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <Card.Title className="h6 fw-semibold mb-2">
                                            {item.title}
                                        </Card.Title>
                                        <Card.Text className="text-muted small mb-0">
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ===== 3. OUR IMPACT IN NUMBERS ===== */}
            <section className="py-5 bg-white">
                <Container>
                    <Row className="mb-4">
                        <Col xs={12} lg={10}>
                            <h2 className="h3 fw-bold text-dark mb-2">
                                Our Impact in Numbers
                            </h2>
                            <p className="text-secondary mb-0 lh-base">
                                Measurable outcomes that reflect our reach and effectiveness.
                            </p>
                        </Col>
                    </Row>

                    <Row className="gy-4">
                        {IMPACT_STATS.map((item) => (
                            <Col xs={12} sm={6} lg={3} key={item.id}>
                                <Card className="mission-impact-card h-100 border-0 shadow-sm text-center">
                                    <Card.Body className="py-4">
                                        <div className="mission-impact-icon mb-2">
                                            <i
                                                className={`${item.icon} mission-icon`}
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="mission-impact-value mb-1">
                                            {item.value}
                                        </div>
                                        <Card.Text className="text-muted small mb-0">
                                            {item.label}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ===== 4. OUR COMMITMENT ===== */}
            <section className="py-5 mission-section-soft">
                <Container>
                    <Row>
                        <Col xs={12} lg={10}>
                            <h2 className="h3 fw-bold text-dark mb-3">
                                Our Commitment
                            </h2>
                            <p className="text-secondary mb-4 lh-base">
                                In pursuit of our mission, we are committed to the following
                                principles. These guide how we design programmes, train
                                instructors, issue certificates, and work with partners.
                            </p>

                            <Card className="mission-commitment-card border-0 shadow-sm">
                                <Card.Body className="p-4 p-md-5">
                                    <ul className="list-unstyled mb-0">
                                        {COMMITMENTS.map((text, index) => (
                                            <li
                                                key={index}
                                                className="d-flex align-items-start mb-3 mission-commitment-item"
                                            >
                                                <span className="mission-commitment-check flex-shrink-0 me-3">
                                                    <i
                                                        className="bi-check2"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                                <span className="text-dark">{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Mission;
