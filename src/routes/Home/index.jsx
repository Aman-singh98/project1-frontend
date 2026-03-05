// src/routes/Home/index.jsx
import { Container, Row, Col, Image } from "react-bootstrap";
import WhatWeDo from "./WhatWeDo";
import FirstAidPrograms from "./FirstAidPrograms";
import StudentTestimonials from "./StudentTestimonials";
import Leadership from "./Leadership";
import TrainingAction from "./TrainingAction";
import KeyHighlights from "./KeyHighlights";
import HomeHeroCarousel from "./HomeHeroCarousel";
import { JOURNEY_STEPS } from "../../assets/data/home";
import QuickServices from "./QuickServices";
import CertificationJourney from "./CertificationJourney";

function Home() {
	return (
		<main className="home-page">
			<HomeHeroCarousel />
			<WhatWeDo />
			<FirstAidPrograms />
			<CertificationJourney />
			<StudentTestimonials />
			<Leadership />
			<KeyHighlights />
			<TrainingAction />
			<QuickServices />
		</main>
	);
}

export default Home;
