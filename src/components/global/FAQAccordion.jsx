import { Container, Accordion } from "react-bootstrap";

const faqs = [
	{
		question: "What types of first aid training courses do you offer?",
		answer:
			"We offer a comprehensive range of first aid training courses including Basic First Aid, CPR Certification, Advanced Cardiac Life Support (ACLS), Pediatric First Aid, Workplace First Aid, and Emergency Response Training. All our courses are designed to meet international standards and are suitable for individuals, families, and organizations."
	},
	{
		question: "How long is the certification valid?",
		answer:
			"Most of our first aid and CPR certifications are valid for 2 years from the date of completion. After the expiration date, you'll need to take a refresher course to maintain your certification. We also offer renewal courses that are shorter and more cost-effective than the full initial training."
	},
	{
		question: "Do you provide on-site training for companies?",
		answer:
			"Yes, we offer customized on-site training programs for companies and organizations. Our team can come to your location and provide training tailored to your industry's specific needs. We can accommodate groups of various sizes and provide all necessary training equipment and materials. Please contact us to discuss your requirements and get a customized quote."
	},
	{
		question: "What is included in the training course fee?",
		answer:
			"The course fee includes: All training materials, Access to our learning resources,Hands-on practice sessions with professional equipment,Certification card upon successful completion,Ongoing support"
	},
	{
		question: "Is prior medical knowledge required to join the courses?",
		answer:
			"No, prior medical knowledge is not required for most of our basic and intermediate courses. Our courses are designed for people from all backgrounds and experience levels. Our experienced instructors will guide you through every step, making the training accessible and easy to understand. However, for advanced courses like ACLS, some medical background may be recommended."
	},
	{
		question: "How can I register for a training course?",
		answer:
			"You can register for our training courses through our website by selecting your preferred course and available dates. You can also call our helpline or visit our training center in person. We accept online payments, bank transfers, and cash payments at our office. Once registered, you'll receive a confirmation email with all course details, venue information, and what to bring on the training day."
	}
];

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
