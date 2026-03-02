/**
 * Terms and conditions
 */
import { Card, Col, Row } from "react-bootstrap";
import { IMAGES } from "../constants/images";
import HeroSection from "../components/global/HeroSection";

function TermsAndConditions() {
    return (
        <>
            <HeroSection
                title="Terms & Conditions"
                subtitle="Terms of use governing your access to and use of our website, courses, and services."
                backgroundImage={IMAGES.AMBULANCE}
            />
            <section className="policy-section py-5">
                <Row>
                    <Col lg={10} className="mx-auto">
                        <p className="text-muted">
                            Last updated: March 2025
                        </p>
                        <h5 className="policy-heading">
                            1. Acceptance of Terms
                        </h5>
                        <p>
                            By accessing or using the First Aid For All website, enrolling in our courses, or using any
                            of our services, you agree to be bound by these Terms and Conditions. If you do not agree with
                            any part of these terms, you must not use our website or services. We reserve the right to modify
                            these terms at any time; continued use after changes constitutes acceptance.
                        </p>
                        <h5 className="policy-heading mt-4">
                            2. Use of Our Services
                        </h5>
                        <span>Our services include first aid and CPR training, certification programmes, and related educational content. You agree to:</span>
                        <ul className="policy-list">
                            <li>
                                Provide accurate and complete information when registering or enrolling.
                            </li>
                            <li>
                                Use the services only for lawful purposes and in accordance with these terms.
                            </li>
                            <li>
                                Not misuse, copy, or distribute our course materials, certificates, or content without written permission.
                            </li>
                            <li>
                                Attend scheduled sessions and complete assessments as required for certification.
                            </li>
                            <li>
                                Notify us promptly of any change in your contact or identification details.
                            </li>
                        </ul>
                        <h5 className="policy-heading">
                            3. Enrolment and Payment
                        </h5>
                        <p>
                            Course enrolment is subject to availability and acceptance. You must pay the applicable fees as stated
                            at the time of booking. Payment terms, including refunds, are governed by our Refund Policy. We reserve
                            the right to cancel or reschedule courses; in such cases, we will offer a refund or alternative date
                            as per our policy. Certificates are issued only upon successful completion of the course and
                            assessment requirements.
                        </p>
                        <h5 className="policy-heading">
                            4. Intellectual Property
                        </h5>
                        <p>
                            All content on this website and in our courses—including text, graphics, logos, images, videos, and
                            course materials—is the property of First Aid For All or our licensors and is protected by copyright
                            and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative
                            works without our prior written consent. Use of our materials is limited to personal, non-commercial
                            use in connection with your training.
                        </p>
                        <h5 className="policy-heading">
                            5. Prohibited Conduct
                        </h5>
                        <span>You must not:</span>
                        <ul className="policy-list">
                            <li>
                                Use our services for any illegal or unauthorised purpose.
                            </li>
                            <li>
                                Impersonate any person or entity or misrepresent your affiliation.
                            </li>
                            <li>
                                Transmit viruses, malware, or any harmful code.
                            </li>
                            <li>
                                Harass, abuse, or harm other participants or our staff.
                            </li>
                            <li>
                                Use our certification or branding in a manner that suggests endorsement without our permission.
                            </li>
                        </ul>
                        <h5>
                            6. Disclaimer of Warranties
                        </h5>
                        <p>
                            Our services are provided "as is" and "as available." We do not warrant that the website or courses
                            will be uninterrupted, error-free, or free of harmful components. Training and certification are for
                            educational and preparedness purposes; we do not guarantee outcomes in real-life emergencies. Please
                            refer to our Disclaimer page for full details.
                        </p>
                        <h5>
                            7. Limitation of Liability
                        </h5>
                        <p>
                            To the fullest extent permitted by law, First Aid For All and its officers, trainers, and affiliates
                            shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising
                            from your use of our services, including but not limited to loss of data, business, or profits.
                            Our total liability for any claim shall not exceed the amount you paid for the relevant course or
                            service in the twelve months preceding the claim.
                        </p>
                        <h5>
                            8. Indemnification
                        </h5>
                        <p>
                            You agree to indemnify, defend, and hold harmless First Aid For All, its affiliates, and their respective officers,
                            employees, and agents from and against any claims, damages, losses, liabilities, and expenses
                            (including reasonable legal fees) arising from your use of our services, your violation of these terms,
                            or your violation of any third-party rights.
                        </p>
                        <h5>
                            9. Governing Law and Disputes
                        </h5>
                        <p>
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
                            Any dispute arising out of or in connection with these terms or our services shall be subject to the 
                            exclusive jurisdiction of the courts of India. We encourage you to contact us first to resolve any concern amicably.
                        </p>
                        <h5>
                            10. Severability and Waiver
                        </h5>
                        <p>
                            If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. Our failure to enforce any right or provision shall not constitute a waiver of such right or provision.
                        </p>
                        <Card className="contact-card mt-4">
                            <Card.Body>
                                <h6>Contact Us</h6>
                                <p>
                                    For refund requests or questions about this policy, contact us at{" "}
                                    <a href="mailto:ceo@saintcouncil.co.in" className="footer-link">
                                        ceo@saintcouncil.co.in
                                    </a>{" "}
                                    or use our Contact Us page. Please quote your enrolment or transaction reference for faster processing.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default TermsAndConditions;
