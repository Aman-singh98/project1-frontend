import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IMAGES } from "../../constants/images";

const HERO_SLIDES = [
  { id: 1, image: IMAGES.IMAGE27, altKey: "home.hero.slides.1.alt", captionKey: "home.hero.slides.1.caption" },
  { id: 2, image: IMAGES.IMAGE30, altKey: "home.hero.slides.2.alt", captionKey: "home.hero.slides.2.caption" },
  { id: 3, image: IMAGES.IMAGE16, altKey: "home.hero.slides.3.alt", captionKey: "home.hero.slides.3.caption" },
  { id: 4, image: IMAGES.IMAGE12, altKey: "home.hero.slides.4.alt", captionKey: "home.hero.slides.4.caption" },
  { id: 5, image: IMAGES.IMAGE31, altKey: "home.hero.slides.5.alt", captionKey: "home.hero.slides.5.caption" },
  { id: 6, image: IMAGES.IMAGE10, altKey: "home.hero.slides.6.alt", captionKey: "home.hero.slides.6.caption" },
  { id: 7, image: IMAGES.IMAGE19, altKey: "home.hero.slides.7.alt", captionKey: "home.hero.slides.7.caption" },
  { id: 8, image: IMAGES.IMAGE18, altKey: "home.hero.slides.8.alt", captionKey: "home.hero.slides.8.caption" }
];

const HERO_STATS = [
  { id: 1, labelKey: "home.stats.volunteer", value: "109,000+", icon: "bi-people-fill" },
  { id: 2, labelKey: "home.stats.training", value: "120,000+", icon: "bi-mortarboard-fill" },
  { id: 3, labelKey: "home.stats.skillCentre", value: "20,000+", icon: "bi-building-check" },
  { id: 4, labelKey: "home.stats.faculty", value: "15,000+", icon: "bi-award-fill" }
];

function HomeHeroCarousel() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="home-hero" aria-label={t("home.hero.ariaLabel")}>
      <div className="home-hero__slides">
        {HERO_SLIDES.map((slide, index) => (
          <figure
            key={slide.id}
            className={`home-hero__slide ${
              index === activeIndex ? "home-hero__slide--active" : ""
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
      <div className="home-hero__stats" aria-hidden="true">
        {HERO_STATS.map(item => (
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
    </section>
  );
}

export default HomeHeroCarousel;
