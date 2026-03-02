/**
 * Refunds Policy
 */
import { Card, Col, Row } from "react-bootstrap";
import { IMAGES } from "../constants/images";
import HeroSection from "../components/global/HeroSection";

function RefundsPolicy() {
    return (
        <>
            <HeroSection
                title="Refund Policy"
                subtitle="Our policy on refunds and cancellations for courses, certifications, and related services."
                backgroundImage={IMAGES.AMBULANCE}
            />
            <section className="policy-section py-5">
                <Row>
                    <Col lg={10} className="mx-auto">
                        <p className="text-muted">
                            Last updated: March 2025
                        </p>
                        <h5 className="policy-heading">1. Overview</h5>
                        <p>
                            First Aid For All is committed to fair and transparent refund practices.
                            This Refund Policy explains when and how we process refunds for course fees, certifications, and
                            related payments. Please read this policy before enrolling or making a payment.
                            By completing a purchase, you agree to the terms set out below.
                        </p>
                        <h5 className="policy-heading mt-4">
                            2. Eligibility for Refunds
                        </h5>
                        <span>We may collect the following types of information:</span>
                        <ul className="policy-list">
                            <li>
                                <strong>Personal identification: </strong> Name, email address, phone number, postal address.
                            </li>
                            <li>
                                <strong>Course and enrolment data:</strong> Course preferences, attendance records,
                                assessment results, and certification details.
                            </li>
                            <li>
                                <strong>Payment information:</strong> Billing address and transaction history. We do not store full
                                credit card numbers; payments are processed through secure third-party gateways.
                            </li>
                            <li>
                                <strong>Technical data:</strong> IP address, browser type, device information, and usage data when you visit our website.
                            </li>
                            <li>
                                <strong>Communications:</strong> Records of correspondence when you contact us via email, phone, or contact forms.
                            </li>
                        </ul>
                        <h5 className="policy-heading mt-4">
                            3. How We Use Your Information
                        </h5>
                        <span>We use the information we collect to:</span>
                        <ul className="policy-list">
                            <li>Process course enrolments, certifications, and renewals.</li>
                            <li>Send you course confirmations, reminders, and certificates.</li>
                            <li>Respond to your enquiries and provide customer support.</li>
                            <li>Improve our website, courses, and services.</li>
                            <li>Send newsletters and updates (only with your consent; you may opt out anytime).</li>
                            <li>Comply with legal obligations and protect our rights.</li>
                        </ul>
                        <h5 className="policy-heading mt-4">
                            4. Sharing and Disclosure
                        </h5>
                        <span>We do not sell your personal information. We may share your data with:</span>
                        <ul className="policy-list">
                            <li>Certification bodies and partner organisations where required for issuing recognised certificates.</li>
                            <li>Payment processors and service providers who assist our operations under strict confidentiality.</li>
                            <li>Legal or regulatory authorities when required by law.</li>
                            <li>We ensure that any third party handling your data adheres to appropriate security and privacy standards.</li>
                        </ul>
                        <h5 className="policy-heading mt-4">
                            5. Data Security
                        </h5>
                        <p>
                            We implement technical and organisational measures to protect your personal information against
                            unauthorised access, alteration, disclosure, or destruction. This includes secure servers,
                            encryption where appropriate, and limited access to personal data. Despite our efforts,
                            no method of transmission over the internet is 100% secure;
                            we encourage you to use strong passwords and keclassName="footer-link"ep your login details confidential.
                        </p>
                        <h5 className="policy-heading mt-4">
                            6. Your Rights
                        </h5>
                        <span>Depending on applicable law, you may have the right to:</span>
                        <ul className="policy-list">
                            <li>Access the personal data we hold about you.className="footer-link"</li>
                            <li>Request correction of inaccurate or incomplete data.</li>
                            <li>Request deletion of your data (subject to legal and contractual retention requirements).</li>
                            <li>Object to or restrict certain processing.</li>
                            <li>Withdraw consent where processing is based on consent.</li>
                        </ul>
                        <span>To exercise these rights, contact us at the email or address provided below.</span>
                        <h5 className="policy-heading mt-4">
                            7. Cookies and Tracking
                        </h5>
                        <p>
                            Our website may use cookies and similar technologies to enhance your experience,
                            remember preferences, and analyse traffic. You can control cookie settings through your
                            browser. Disabling certain cookies may affect the functionality of the site.
                        </p>
                        <h5 className="policy-heading mt-4">
                            8. Retention
                        </h5>
                        <p>
                            We retain your personal information only for as long as necessary to fulfil the purposes
                            for which it was collected, including to satisfy legal, accounting, or reporting requirements.
                            Certification and enrolment records may be retained for longer periods as required by certification
                            bodies or law.
                        </p>
                        <h5 className="policy-heading mt-4">
                            9. Children's Privacy
                        </h5>
                        <p>
                            Our services are not directed at individuals under the age of 16. We do not knowingly collect
                            personal information from children. If you believe we have collected data from a minor.
                            Please contact us and we will take steps to delete such information.
                        </p>
                        <h5 className="policy-heading mt-4">
                            10. Changes to This Policy
                        </h5>
                        <p>
                            We may update this Privacy Policy from time to time. The revised
                            version will be posted on this page with an updated "Last updated" date.
                            We encourage you to review this policy periodically. Continued use of our
                            services after changes constitutes acceptance of the updated policy.
                        </p>
                        <Card className="contact-card mt-4">
                            <Card.Body>
                                <h6>Contact Us</h6>
                                <p>
                                    For any questions about this Privacy Policy or your personal data, please contact us at:{" "}
                                    <a href="mailto:ceo@saintcouncil.co.in" className="footer-link">
                                        ceo@saintcouncil.co.in
                                    </a>{" "}
                                    or write to our registered address. We will respond to your request in accordance with applicable law.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default RefundsPolicy;
