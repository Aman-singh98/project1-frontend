// src/routes/Home/index.jsx

import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import WhatWeDo from "./WhatWeDo";
import FirstAidPrograms from "./FirstAidPrograms";
import StudentTestimonials from "./StudentTestimonials";
import Leadership from "./Leadership";
import TrainingAction from "./TrainingAction";
import KeyHighlights from "./KeyHighlights";
import HomeHeroCarousel from "./HomeHeroCarousel";
import { JOURNEY_STEPS } from "../../assets/data/home";

/* ================= JOURNEY TO CERTIFICATION ================= */

function JourneyToCertification() {
	const { t } = useTranslation();

	return (
		<section className="home-journey">
			<Container>
				<div className="section-header">
					<h2>{t("home.journey.title")}</h2>
					<p>
						{t("home.journey.subtitle")}
					</p>
				</div>
				<div className="home-journey__steps">
					{JOURNEY_STEPS?.map((step, index) => (
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

function Home() {
	return (
		<main className="home-page">
			<HomeHeroCarousel />
			<WhatWeDo />
			<FirstAidPrograms />
			<JourneyToCertification />
			<StudentTestimonials />
			<Leadership />
			<KeyHighlights />
			<TrainingAction />
		</main>
	);
}

export default Home;
