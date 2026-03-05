import { Container, Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { faqs } from "../../assets/data/faq";

function FAQAccordion() {
	const { t } = useTranslation();

	return (
		<Container className="faq-section">
			<h3 className="faq-section-title">{t("faq.sectionTitle")}</h3>
			<small className="faq-section-subtitle">
				{t("faq.sectionSubtitle")}
			</small>
			<Accordion defaultActiveKey="0" flush>
				{faqs?.map((faq, index) => (
					<Accordion.Item eventKey={String(index)} key={index}>
						<Accordion.Header>
							<span className="faq-question">{faq.question}</span>
						</Accordion.Header>
						<Accordion.Body>
							<p className="faq-answer">{faq.answer}</p>
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		</Container>
	);
}

export default FAQAccordion;
