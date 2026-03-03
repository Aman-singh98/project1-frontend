import { useRef } from 'react';
import { Container, Button, Card, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { TESTIMONIALS } from '../../assets/data/home';


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
                <div className="section-header">
                    <h2>{t("home.testimonials.title")}</h2>
                    <p>
                        {t("home.testimonials.subtitle")}
                    </p>
                </div>
                <div className="home-carousel">
                    <Button
                        type="button"
                        className="home-carousel__arrow d-none d-sm-inline-flex"
                        onClick={() => scrollByCards(-1)}
                        aria-label={t("home.testimonials.ariaPrev")}
                    >
                        <i className="bi bi-chevron-left" />
                    </Button>
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
                                        <Image src ={item.image} alt={item.name.charAt(0)} className="home-testimonial-card__avatar" fluid />
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

export default StudentTestimonials
