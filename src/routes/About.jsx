/**
 * About
 * Haryana‑gov style about page with program, mission/vision,
 * why‑choose‑us, and journey sections.
 */
import {
    Container,
    Row,
    Col,
    Card,
    Badge,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/global/HeroSection";
import { IMAGES } from "../constants/images";
import "bootstrap-icons/font/bootstrap-icons.css";

// ===== static content =====

const TRAINING_PROGRAMS = [
    {
        id: 1,
        icon: "bi-heart",
        title: "Basic First Aid",
        description:
            "Essential life‑saving techniques for everyday emergencies and accident situations.",
    },
    {
        id: 2,
        icon: "bi-lightning-charge",
        title: "CPR & AED Training",
        description:
            "Cardiopulmonary resuscitation and automated external defibrillator certification programs.",
    },
    {
        id: 3,
        icon: "bi-activity",
        title: "Advanced Life Support",
        description:
            "Advanced cardiac and trauma life support training for healthcare professionals.",
    },
    {
        id: 4,
        icon: "bi-shield-check",
        title: "Workplace Safety",
        description:
            "Customized training for organizations to ensure workplace safety compliance.",
    },
    {
        id: 5,
        icon: "bi-people",
        title: "Pediatric First Aid",
        description:
            "Specialised first aid training for handling medical emergencies involving children and infants.",
    },
    {
        id: 6,
        icon: "bi-buildings",
        title: "Community Programs",
        description:
            "Public awareness campaigns and free training sessions for community empowerment.",
    },
];

const WHY_CHOOSE_US = [
    {
        id: 1,
        icon: "bi-patch-check",
        title: "Internationally Recognized",
        description:
            "Certifications accepted worldwide with partnerships across leading healthcare and emergency services.",
    },
    {
        id: 2,
        icon: "bi-person-badge",
        title: "Expert Instructors",
        description:
            "Highly qualified trainers with years of hands‑on experience in first aid and emergency response.",
    },
    {
        id: 3,
        icon: "bi-people-heart",
        title: "Community Focused",
        description:
            "Dedicated to serving communities with life‑saving skills training and emergency preparedness programs.",
    },
    {
        id: 4,
        icon: "bi-journal-medical",
        title: "Comprehensive Training",
        description:
            "From basic first aid to advanced life support, we offer structured programs for all levels.",
    },
    {
        id: 5,
        icon: "bi-hospital",
        title: "Hospital Partnerships",
        description:
            "Strong collaborations with hospitals and institutes to provide real‑world clinical exposure.",
    },
    {
        id: 6,
        icon: "bi-globe2",
        title: "Global Network",
        description:
            "Part of a global movement in emergency care with a legacy of service and compassion.",
    },
];

const JOURNEY_MILESTONES = [
    {
        id: 1,
        year: "1907",
        title: "Foundation",
        description:
            "St. John Ambulance India was established as part of the international St. John organisation, beginning our legacy of service.",
    },
    {
        id: 2,
        year: "1920",
        title: "National Expansion",
        description:
            "Expanded operations across India with training centres in major cities, bringing first aid training to communities nationwide.",
    },
    {
        id: 3,
        year: "1950",
        title: "Community Programs",
        description:
            "Launched community first aid programs to promote public safety awareness and emergency preparedness.",
    },
    {
        id: 4,
        year: "2000",
        title: "Modern Training",
        description:
            "Introduced modern training methodologies and digital learning platforms to enhance training effectiveness.",
    },
    {
        id: 5,
        year: "2020",
        title: "Global Recognition",
        description:
            "Achieved international recognition for excellence in first aid training and emergency response services.",
    },
    {
        id: 6,
        year: "2024",
        title: "Growing Strong",
        description:
            "Continuing to expand our reach across hospitals, schools and organisations, training thousands annually.",
    },
];

function About() {
    const { t } = useTranslation();

    return (
        <>
            <HeroSection
                title={t("about.hero.title")}
                subtitle={t("about.hero.subtitle")}
                backgroundImage={IMAGES.AMBULANCE}
            />

            {/* ===== WHO WE ARE ===== */}
            {/* ===== WHO WE ARE (Exact card structure) ===== */}
            <section className="py-5 about-page bg-light">
                <Container>
                    <Card className="who-we-are-card border-0 shadow overflow-hidden">
                        <Row className="g-0 align-items-stretch">
                            {/* Image column - exact dimensions */}
                            <Col xs={12} md={7}>
                                <div className="who-we-are-image-wrapper position-relative">
                                    <img
                                        src={IMAGES.AMBULANCE}
                                        alt="Paramedics attending to patient"
                                        className="who-we-are-image img-fluid"
                                    />
                                    <div className="who-we-are-excellence-badge position-absolute bottom-0 end-0 m-3 p-3 text-white text-center rounded-3">
                                        <span className="d-block fs-4 fw-bold mb-0">117+</span>
                                        <small className="opacity-90">Years of Excellence</small>
                                    </div>
                                </div>
                            </Col>
                            {/* Text column */}
                            <Col xs={12} md={5} className="d-flex flex-column justify-content-center">
                                <div className="p-4 p-md-5">
                                    <span className="badge who-we-are-pill-badge mb-3">
                                        {t("about.whoWeAre.badge")}
                                    </span>
                                    <h2 className="h4 h3-md fw-bold text-dark mb-3">
                                        {t("about.whoWeAre.heading")}
                                    </h2>
                                    <p className="text-secondary small mb-3 lh-base">
                                        {t("about.whoWeAre.body1")}
                                    </p>
                                    <p className="text-secondary small mb-0 lh-base">
                                        {t("about.whoWeAre.body2")}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>
            {/* ===== CORPORATE TRAINING PROGRAMS ===== */}
            <section className="py-5 about-section-soft">
                <Container>
                    {/* ===== TRAINING PROGRAMS GRID ===== */}
                    <Row className="gy-4">
                        <Col xs={12}>
                            <Badge bg="light" className="about-pill-badge mb-2">
                                <span className="text-uppercase small fw-semibold text-orange">
                                    What We Offer
                                </span>
                            </Badge>
                            <h3 className="h4 fw-semibold mb-4">Our Training Programs</h3>
                        </Col>
                        {TRAINING_PROGRAMS.map((item) => (
                            <Col xs={12} md={6} lg={4} key={item.id}>
                                <Card className="about-feature-card h-100 border-0 shadow-sm">
                                    <Card.Body className="d-flex flex-column">
                                        <div className="about-icon-circle mb-3">
                                            <i className={`${item.icon} about-icon`}></i>
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

            {/* ===== MISSION & VISION ===== */}
            <section className="py-5 bg-white">
                <Container>
                    <Row className="mb-4">
                        <Col xs={12} lg={10}>
                            <Badge bg="light" className="about-pill-badge mb-3">
                                <span className="text-uppercase small fw-semibold text-orange">
                                    What Guides Us
                                </span>
                            </Badge>
                            <h2 className="h3 fw-bold mb-2">Our Mission &amp; Vision</h2>
                            <p className="text-muted mb-0">
                                Clear goals and a strong value system drive every training
                                initiative we deliver across Haryana and India.
                            </p>
                        </Col>
                    </Row>

                    <Row className="gy-4">
                        <Col xs={12} lg={6}>
                            <Card className="about-highlight-card h-100 border-0 shadow-sm">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="about-icon-circle me-3">
                                            <i className="bi-bullseye about-icon"></i>
                                        </div>
                                        <div>
                                            <h3 className="h5 fw-bold mb-0">Our Mission</h3>
                                        </div>
                                    </div>
                                    <p className="text-muted small mb-3">
                                        To provide accessible, high‑quality first aid and emergency
                                        response training that empowers individuals to save lives and
                                        make a positive impact in their communities.
                                    </p>
                                    <ul className="list-unstyled small mb-0 text-muted">
                                        <li className="mb-2">
                                            <i className="bi-check-circle-fill text-orange me-2"></i>
                                            Provide equitable access to life‑saving skills across all
                                            sections of society.
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi-check-circle-fill text-orange me-2"></i>
                                            Promote emergency preparedness and community safety
                                            awareness.
                                        </li>
                                        <li>
                                            <i className="bi-check-circle-fill text-orange me-2"></i>
                                            Maintain national and international standards in all
                                            training programs.
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} lg={6}>
                            <Card className="about-highlight-card h-100 border-0 shadow-sm">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="about-icon-circle me-3">
                                            <i className="bi-eye about-icon"></i>
                                        </div>
                                        <div>
                                            <h3 className="h5 fw-bold mb-0">Our Vision</h3>
                                        </div>
                                    </div>
                                    <p className="text-muted small mb-3">
                                        To become India&apos;s most trusted and recognised
                                        organisation for first aid and emergency response training,
                                        aligned with the development goals of state governments.
                                    </p>
                                    <ul className="list-unstyled small mb-0 text-muted">
                                        <li className="mb-2">
                                            <i className="bi-check-circle-fill text-orange me-2"></i>
                                            Extend our presence to every district and block through
                                            partnerships.
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi-check-circle-fill text-orange me-2"></i>
                                            Continuously innovate training methodologies and digital
                                            learning tools.
                                        </li>
                                        <li>
                                            <i className="bi-check-circle-fill text-orange me-2"></i>
                                            Build a network of trained first responders across the
                                            country.
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="py-5 about-section-soft">
                <Container>
                    <Row className="mb-4">
                        <Col xs={12} lg={10}>
                            <Badge bg="light" className="about-pill-badge mb-3">
                                <span className="text-uppercase small fw-semibold text-orange">
                                    Why We Stand Out
                                </span>
                            </Badge>
                            <h2 className="h3 fw-bold mb-2">Why Choose Us?</h2>
                            <p className="text-muted mb-0">
                                Discover what makes our programs the preferred choice for first aid
                                and emergency response training across Haryana and beyond.
                            </p>
                        </Col>
                    </Row>

                    <Row className="gy-4">
                        {WHY_CHOOSE_US.map((item) => (
                            <Col xs={12} md={6} lg={4} key={item.id}>
                                <Card className="about-feature-card h-100 border-0 shadow-sm">
                                    <Card.Body>
                                        <div className="about-icon-circle mb-3">
                                            <i className={`${item.icon} about-icon`}></i>
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

            {/* ===== OUR JOURNEY ===== */}
            <section className="py-5 bg-white">
                <Container>
                    <Row className="mb-4">
                        <Col xs={12} lg={10}>
                            <Badge bg="light" className="about-pill-badge mb-3">
                                <span className="text-uppercase small fw-semibold text-orange">
                                    Our Journey
                                </span>
                            </Badge>
                            <h2 className="h3 fw-bold mb-2">Milestones Through The Years</h2>
                            <p className="text-muted mb-0">
                                Key moments that shaped our path to becoming a trusted leader in
                                first aid and emergency response training.
                            </p>
                        </Col>
                    </Row>

                    <Row className="gy-4">
                        {JOURNEY_MILESTONES.map((item) => (
                            <Col xs={12} md={6} lg={4} key={item.id}>
                                <Card className="journey-card h-100 border-0 shadow-sm position-relative overflow-hidden">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <span className="journey-year-pill">
                                                {item.year}
                                            </span>
                                            <span className="journey-icon-wrapper">
                                                <i className="bi-trophy-fill journey-icon"></i>
                                            </span>
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
            <section className="py-5 bg-white">
                <Container>
                    <Row className="gy-4">
                        <Col xs={12} lg={10}>
                            <Badge bg="light" className="about-pill-badge mb-3">
                                <span className="text-uppercase small fw-semibold text-orange">
                                    Our Programs
                                </span>
                            </Badge>
                            <h2 className="h3 fw-bold mb-3">Corporate Training Programs</h2>
                            <p className="text-muted mb-0">
                                St John Ambulance International Association offers a wide range of
                                training programs tailored for government departments, public sector
                                units and private organisations. These programs enhance the capacity
                                of professionals to manage emergencies, implement health initiatives
                                and improve the overall safety culture at workplaces and in the
                                community.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default About;