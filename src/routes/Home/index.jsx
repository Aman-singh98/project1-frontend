// src/routes/Home/index.jsx

import { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IMAGES } from "../../constants/images";
import FirstAidTrainingPrograms from "./FirstAidTrainingPrograms";

const HERO_SLIDES = [
  {
    id: 1,
    image: IMAGES.AMBULANCE,
    altKey: "home.hero.slides.1.alt",
    captionKey: "home.hero.slides.1.caption",
  },
  {
    id: 2,
    image: IMAGES.EMS,
    altKey: "home.hero.slides.2.alt",
    captionKey: "home.hero.slides.2.caption",
  },
  {
    id: 3,
    image: IMAGES.AED,
    altKey: "home.hero.slides.3.alt",
    captionKey: "home.hero.slides.3.caption",
  },
  {
    id: 4,
    image: IMAGES.VIKASH_BHARAT,
    altKey: "home.hero.slides.4.alt",
    captionKey: "home.hero.slides.4.caption",
  },
  {
    id: 5,
    image: IMAGES.SIKSHA,
    altKey: "home.hero.slides.5.alt",
    captionKey: "home.hero.slides.5.caption",
  },
];

const HERO_STATS = [
  { id: 1, labelKey: "home.stats.volunteer", value: "109,000+", icon: "bi-people-fill" },
  { id: 2, labelKey: "home.stats.training", value: "120,000+", icon: "bi-mortarboard-fill" },
  { id: 3, labelKey: "home.stats.skillCentre", value: "20,000+", icon: "bi-building-check" },
  { id: 4, labelKey: "home.stats.faculty", value: "15,000+", icon: "bi-award-fill" },
];

const WHAT_WE_DO_ITEMS = [
  {
    id: 1,
    titleKey: "home.whatWeDo.items.firstAidTraining.title",
    descriptionKey: "home.whatWeDo.items.firstAidTraining.description",
    icon: "bi-heart-pulse-fill",
  },
  {
    id: 2,
    titleKey: "home.whatWeDo.items.communityOutreach.title",
    descriptionKey: "home.whatWeDo.items.communityOutreach.description",
    icon: "bi-people-fill",
  },
  {
    id: 3,
    titleKey: "home.whatWeDo.items.institutionalPartnerships.title",
    descriptionKey: "home.whatWeDo.items.institutionalPartnerships.description",
    icon: "bi-building-fill-check",
  },
];

const JOURNEY_STEPS = [
  {
    id: 1,
    stepKey: "home.journey.steps.step01.label",
    titleKey: "home.journey.steps.step01.title",
    descriptionKey: "home.journey.steps.step01.description",
    icon: "bi-person-plus-fill",
  },
  {
    id: 2,
    stepKey: "home.journey.steps.step02.label",
    titleKey: "home.journey.steps.step02.title",
    descriptionKey: "home.journey.steps.step02.description",
    icon: "bi-journal-medical",
  },
  {
    id: 3,
    stepKey: "home.journey.steps.step03.label",
    titleKey: "home.journey.steps.step03.title",
    descriptionKey: "home.journey.steps.step03.description",
    icon: "bi-clipboard-check-fill",
  },
  {
    id: 4,
    stepKey: "home.journey.steps.step04.label",
    titleKey: "home.journey.steps.step04.title",
    descriptionKey: "home.journey.steps.step04.description",
    icon: "bi-patch-check-fill",
  },
  {
    id: 5,
    stepKey: "home.journey.steps.step05.label",
    titleKey: "home.journey.steps.step05.title",
    descriptionKey: "home.journey.steps.step05.description",
    icon: "bi-briefcase-fill",
  },
];

/* ========= NEW STATIC DATA FOR LOWER SECTIONS ========= */

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Student",
    quote:
      "Excellent training program! The instructors were very knowledgeable and the hands-on practice sessions were incredibly helpful.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Nurse",
    quote:
      "The CPR certification course was comprehensive and well structured. I now feel much more confident in emergencies.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Corporate Employee",
    quote:
      "Workplace safety training was exactly what our company needed. The practical scenarios made the concepts very clear.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Teacher",
    quote:
      "The paediatric first aid course was invaluable. The content was clear and practical for handling emergencies with children.",
    rating: 5,
  },
];

const LEADERS = [
  {
    id: 1,
    name: "Training Director",
    position: "Director – Training",
    focus: "First Aid & CPR Programmes",
    description: "Oversees curriculum, instructor certification, and training quality.",
  },
  {
    id: 2,
    name: "Operations Head",
    position: "Director – Operations",
    focus: "Skill Centres & Partnerships",
    description: "Ensures smooth operations across centres and strategic partners.",
  },
  {
    id: 3,
    name: "Medical Advisor",
    position: "Chief Medical Advisor",
    focus: "Curriculum & Standards",
    description: "Aligns all courses with clinical best practices and national guidelines.",
  },
  {
    id: 4,
    name: "Volunteer Coordinator",
    position: "Head – Volunteer Programme",
    focus: "Volunteer Units & Events",
    description: "Builds and supports volunteer networks for community outreach.",
  },
];

const TRAINING_EVENTS = [
  {
    id: 1,
    title: "CPR Training Session",
    date: "Jan 15, 2024",
    type: "Training Session",
    image: IMAGES.AMBULANCE,
  },
  {
    id: 2,
    title: "First Aid Workshop",
    date: "Jan 20, 2024",
    type: "Training Session",
    image: IMAGES.EMS,
  },
  {
    id: 3,
    title: "Emergency Response Drill",
    date: "Feb 10, 2024",
    type: "Events",
    image: IMAGES.AED,
  },
  {
    id: 4,
    title: "Community Health Camp",
    date: "Feb 23, 2024",
    type: "Events",
    image: IMAGES.VIKASH_BHARAT,
  },
  {
    id: 5,
    title: "Institutional Training",
    date: "Mar 05, 2024",
    type: "Training Session",
    image: IMAGES.SIKSHA,
  },
  {
    id: 6,
    title: "Volunteer Orientation",
    date: "Mar 18, 2024",
    type: "Events",
    image: IMAGES.DIGITALINDIA,
  },
];

/* ================= HERO (First Section) ================= */

function HomeHeroCarousel() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="home-hero" aria-label={t("home.hero.ariaLabel")}>
      <div className="home-hero__slides">
        {HERO_SLIDES.map((slide, index) => (
          <figure
            key={slide.id}
            className={`home-hero__slide ${index === activeIndex ? "home-hero__slide--active" : ""
              }`}
          >
            <Image
              src={slide.image}
              alt={t(slide.altKey)}
              loading="lazy"
              className="home-hero__image"
              fluid
            />
            <figcaption className="visually-hidden">
              {t(slide.captionKey)}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="home-hero__overlay" />

      <Container className="home-hero__content">
        <Row className="align-items-end">
          <Col xs={12} md={8}>
            <div className="home-hero__text">
              <h1 className="home-hero__title">
                {t("home.hero.titlePrefix")}{" "}
                <span className="home-hero__title--accent">
                  {t("home.hero.titleAccent")}
                </span>
              </h1>
              <p className="home-hero__subtitle">
                {t("home.hero.subtitle")}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="home-hero__stats" aria-hidden="true">
        {HERO_STATS.map((item) => (
          <div key={item.id} className="home-hero-stat">
            <div className="home-hero-stat__icon">
              <i className={`bi ${item.icon}`} />
            </div>
            <div>
              <div className="home-hero-stat__value">{item.value}</div>
              <div className="home-hero-stat__label">{t(item.labelKey)}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="home-hero__dots" role="tablist" aria-label="Hero slides">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`home-hero-dot ${index === activeIndex ? "home-hero-dot--active" : ""
              }`}
            onClick={() => handleDotClick(index)}
            aria-label={t("home.hero.goToSlide", { index: index + 1 })}
            aria-pressed={index === activeIndex}
          />
        ))}
      </div>
    </section>
  );
}

/* ================= WHAT WE DO ================= */

function WhatWeDo() {
  const { t } = useTranslation();
  return (
    <section className="home-section home-what-we-do">
      <Container>
        <header className="section-header text-center mb-4 mb-md-5">
          <h2 className="section-title">{t("home.whatWeDo.title")}</h2>
          <p className="section-subtitle">
            {t("home.whatWeDo.subtitle")}
          </p>
        </header>

        <Row className="g-3 g-md-4">
          {WHAT_WE_DO_ITEMS.map((item) => (
            <Col key={item.id} xs={12} md={4}>
              <Card className="home-what-card h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="home-what-card__icon mb-3">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <h3 className="home-what-card__title">
                    {t(item.titleKey)}
                  </h3>
                  <p className="home-what-card__description">
                    {t(item.descriptionKey)}
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

/* ================= JOURNEY TO CERTIFICATION ================= */

function JourneyToCertification() {
  const { t } = useTranslation();
  return (
    <section className="home-section home-journey">
      <Container>
        <header className="section-header text-center mb-4 mb-md-5">
          <h2 className="section-title">{t("home.journey.title")}</h2>
          <p className="section-subtitle">
            {t("home.journey.subtitle")}
          </p>
        </header>

        <div className="home-journey__steps">
          {JOURNEY_STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`home-journey-step ${index === 0
                  ? "home-journey-step--first"
                  : index === JOURNEY_STEPS.length - 1
                    ? "home-journey-step--last"
                    : ""
                }`}
            >
              <div className="home-journey-step__icon-wrapper">
                <div className="home-journey-step__icon">
                  <i className={`bi ${step.icon}`} />
                </div>
              </div>
              <div className="home-journey-step__content">
                <span className="home-journey-step__step-label">
                  {t(step.stepKey)}
                </span>
                <h3 className="home-journey-step__title">
                  {t(step.titleKey)}
                </h3>
                <p className="home-journey-step__description">
                  {t(step.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ================= WHAT OUR STUDENTS SAY ================= */

function StudentTestimonials() {
  const { t } = useTranslation();
  const trackRef = useRef(null);

  const scrollByCards = (direction) => {
    const container = trackRef.current;
    if (!container) return;

    const firstCard = container.querySelector(".home-testimonial-card");
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width
      : 280;

    container.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <section className="home-section home-testimonials">
      <Container>
        <div className="home-section-header-row">
          <div className="section-header">
            <h2 className="section-title text-uppercase mb-1">
              {t("home.testimonials.title")}
            </h2>
            <p className="section-subtitle mb-0">
              {t("home.testimonials.subtitle")}
            </p>
          </div>
          <div className="home-section-header-row__actions">
            <Button
              variant="warning"
              size="sm"
              className="home-section-header-row__view-all"
            >
              {t("home.testimonials.viewAll")}
            </Button>
          </div>
        </div>

        <div className="home-carousel">
          <button
            type="button"
            className="home-carousel__arrow d-none d-sm-inline-flex"
            onClick={() => scrollByCards(-1)}
            aria-label={t("home.testimonials.ariaPrev")}
          >
            <i className="bi bi-chevron-left" />
          </button>

          <div className="home-carousel__track" ref={trackRef}>
            {TESTIMONIALS.map((item) => (
              <Card
                key={item.id}
                className="home-testimonial-card shadow-sm"
              >
                <Card.Body>
                  <div className="home-testimonial-card__stars mb-2">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <i
                        key={index}
                        className="bi bi-star-fill home-testimonial-card__star"
                      />
                    ))}
                  </div>
                  <p className="home-testimonial-card__quote">
                    {item.quote}
                  </p>
                  <div className="home-testimonial-card__footer">
                    <div className="home-testimonial-card__avatar">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="home-testimonial-card__name">
                        {item.name}
                      </div>
                      <div className="home-testimonial-card__role">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>

          <button
            type="button"
            className="home-carousel__arrow d-none d-sm-inline-flex"
            onClick={() => scrollByCards(1)}
            aria-label={t("home.testimonials.ariaNext")}
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      </Container>
    </section>
  );
}

/* ================= OUR LEADERSHIP ================= */

function LeadershipSection() {
  const { t } = useTranslation();
  const trackRef = useRef(null);

  const scrollByCards = (direction) => {
    const container = trackRef.current;
    if (!container) return;

    const firstCard = container.querySelector(".home-leader-card");
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width
      : 260;

    container.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <section className="home-section home-leadership">
      <Container>
        <div className="home-section-header-row">
          <div className="section-header">
            <h2 className="section-title">{t("home.leadership.title")}</h2>
            <p className="section-subtitle mb-0">
              {t("home.leadership.subtitle")}
            </p>
          </div>
          <div className="home-section-header-row__actions">
            <Button
              variant="outline-warning"
              size="sm"
              className="home-section-header-row__view-all"
            >
              {t("home.leadership.viewAll")}
            </Button>
          </div>
        </div>

        <div className="home-carousel">
          <button
            type="button"
            className="home-carousel__arrow d-none d-sm-inline-flex"
            onClick={() => scrollByCards(-1)}
            aria-label="Previous leaders"
          >
            <i className="bi bi-chevron-left" />
          </button>

          <div className="home-carousel__track" ref={trackRef}>
            {LEADERS.map((leader) => (
              <Card key={leader.id} className="home-leader-card shadow-sm">
                <Card.Body>
                  <div className="home-leader-card__avatar-placeholder" />
                  <h3 className="home-leader-card__name">{leader.name}</h3>
                  <p className="home-leader-card__position">
                    {leader.position}
                  </p>
                  <p className="home-leader-card__focus">{leader.focus}</p>
                  <p className="home-leader-card__description">
                    {leader.description}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>

          <button
            type="button"
            className="home-carousel__arrow d-none d-sm-inline-flex"
            onClick={() => scrollByCards(1)}
            aria-label="Next leaders"
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      </Container>
    </section>
  );
}

/* ================= TRAINING IN ACTION ================= */

function TrainingInActionSection() {
  const { t } = useTranslation();
  return (
    <section className="home-section home-training">
      <Container>
        <div className="home-section-header-row mb-3 mb-md-4">
          <div className="section-header">
            <h2 className="section-title">{t("home.training.title")}</h2>
            <p className="section-subtitle mb-0">
              {t("home.training.subtitle")}
            </p>
          </div>
          <div className="home-section-header-row__actions">
            <Button
              variant="warning"
              size="sm"
              className="home-section-header-row__view-all"
            >
              {t("home.training.viewAll")}
            </Button>
          </div>
        </div>

        <Row className="g-3 g-md-4">
          {TRAINING_EVENTS.map((event) => (
            <Col key={event.id} xs={12} sm={6} lg={3}>
              <Card className="home-training-card h-100 border-0 shadow-sm">
                <div className="home-training-card__media">
                  <Image
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    fluid
                  />
                  <div className="home-training-card__badge">
                    <span className="home-training-card__badge-label">
                      {event.type}
                    </span>
                    <span className="home-training-card__badge-date">
                      {event.date}
                    </span>
                  </div>
                </div>
                <Card.Body>
                  <h3 className="home-training-card__title">{event.title}</h3>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

/* ================= PAGE ROOT ================= */

function Home() {
  return (
    <main className="home-page">
      <HomeHeroCarousel />
      <WhatWeDo />
      <FirstAidTrainingPrograms />
      <JourneyToCertification />
      <StudentTestimonials />
      <LeadershipSection />
      <TrainingInActionSection />
    </main>
  );
}

export default Home;
