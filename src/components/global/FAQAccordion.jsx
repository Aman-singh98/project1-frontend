import { Container, Accordion } from "react-bootstrap";
import { faqs } from "../../assets/data/faq";

function FAQAccordion() {
	return (
		<Container className="faq-section">
			<h3 className="faq-section-title">Frequently asked questions</h3>
			<small className="faq-section-subtitle">Find answers to common questions about our training courses and certification.</small>
			<Accordion defaultActiveKey="0" flush>
				{faqs?.map((faq, index) => (
					<Accordion.Item eventKey={String(index)} key={index}>
						<Accordion.Header>
							<span className="faq-question">
								{faq.question}
							</span>
						</Accordion.Header>
						<Accordion.Body>
							<p className="faq-answer">
								{faq.answer}
							</p>
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		</Container>
	);
}

export default FAQAccordion;
