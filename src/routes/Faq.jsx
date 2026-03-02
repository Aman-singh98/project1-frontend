/**
 * FAQ section
 * Mobile‑first, searchable, categorized accordion + contact/query section
 */
import { useMemo, useState, useCallback } from "react";
import {
    Container,
    Row,
    Col,
    Accordion,
    Form,
    Dropdown,
    DropdownButton,
    Badge,
} from "react-bootstrap";
import HeroSection from "../components/global/HeroSection";
import { IMAGES } from "../constants/images";
import ContactQuerySection from "../components/global/ContactQuerySection";

// ---------- Static FAQ data ----------
const FAQ_ITEMS = [
    {
        id: "1",
        question: "What courses do you offer?",
        answer:
            "We offer a comprehensive range of healthcare training courses including First Aid & CPR, Advanced Cardiac Life Support (ACLS), Pediatric Advanced Life Support (PALS), Basic Life Support (BLS), Disaster Management, Workplace Safety, Mental Health First Aid, Wilderness First Aid, and Emergency Medical Technician (EMT) programs.",
        category: "Courses",
        tags: ["courses", "training", "programs"],
    },
    {
        id: "2",
        question: "How long are the certification courses valid?",
        answer:
            "Most of our certifications are valid for 2 years from the date of completion. Some specialized courses may have different validity periods. We’ll notify you when it’s time to renew your certification.",
        category: "Certification",
        tags: ["certification", "validity", "renewal"],
    },
    {
        id: "3",
        question: "Do you offer online courses?",
        answer:
            "Yes, we offer both in‑person and online training options for most of our courses. Our online courses include interactive modules, virtual simulations, and live instructor sessions. However, some hands‑on practical components may require in‑person attendance.",
        category: "Online Learning",
        tags: ["online", "virtual", "remote", "learning"],
    },
    {
        id: "4",
        question: "What is the minimum age requirement for courses?",
        answer:
            "The minimum age requirement varies by course. Basic First Aid courses are available for ages 12 and up, while more advanced courses like ACLS require participants to be at least 18 years old. Some courses may have additional prerequisites.",
        category: "Requirements",
        tags: ["age", "requirements", "prerequisites"],
    },
    {
        id: "5",
        question: "How do I register for a course?",
        answer:
            "You can register for courses through our website by selecting your preferred course and batch, or by calling our registration hotline. We accept online payments, bank transfers, and in some cases, installment plans for longer courses.",
        category: "Registration",
        tags: ["registration", "enrollment", "payment"],
    },
    {
        id: "6",
        question: "Do you offer group discounts?",
        answer:
            "Yes, we offer group discounts for organizations enrolling 10 or more participants. Discounts range from 10% to 25% depending on the group size and course type. Contact our sales team for custom pricing.",
        category: "Pricing",
        tags: ["group", "discount", "pricing", "organization"],
    },
    {
        id: "7",
        question: "Do you provide course materials?",
        answer:
            "Yes, all course materials including textbooks, handouts, and digital resources are provided as part of the course fee. You’ll also receive access to our online learning portal with additional resources and practice materials.",
        category: "Materials",
        tags: ["materials", "textbooks", "resources", "handouts"],
    },
    {
        id: "8",
        question: "Can I get a refund if I cancel my enrollment?",
        answer:
            "We offer a full refund if you cancel at least 7 days before the course start date. Cancellations within 7 days are subject to a 25% cancellation fee. No refunds are available after the course has started.",
        category: "Refunds",
        tags: ["refund", "cancellation", "policy"],
    },
    {
        id: "9",
        question: "What should I bring to the course?",
        answer:
            "Please bring a valid ID, comfortable clothing suitable for hands‑on practice, and any specific items mentioned in your course confirmation email. We provide all necessary equipment and materials for the training.",
        category: "Preparation",
        tags: ["preparation", "what to bring", "equipment", "materials"],
    },
    {
        id: "10",
        question: "Do you offer continuing education credits?",
        answer:
            "Yes, many of our courses provide continuing education credits (CEUs) for healthcare professionals. The number of credits varies by course and is recognized by most professional licensing boards.",
        category: "Continuing Education",
        tags: ["continuing education", "CEUs", "credits", "professional"],
    },
    {
        id: "11",
        question: "How do I access my digital certificate?",
        answer:
            "Once you complete the course and pass the exam, your digital certificate will be available in your student portal within 24–48 hours. You can download and print it, or share it directly with employers through our secure sharing system.",
        category: "Certificates",
        tags: ["certificate", "digital", "download", "access"],
    },
    {
        id: "12",
        question: "What happens if I fail the certification exam?",
        answer:
            "If you don’t pass the certification exam on your first attempt, you can retake it within 30 days at no additional cost. We also provide additional study materials and practice sessions to help you prepare for the retake.",
        category: "Exams",
        tags: ["exam", "failure", "retake", "certification"],
    },
    {
        id: "13",
        question: "Are your instructors certified?",
        answer:
            "All our instructors are certified by recognized organizations and have extensive experience in healthcare and emergency response. They regularly update their skills to stay current with best practices and international guidelines.",
        category: "Instructors",
        tags: ["instructors", "certified", "qualified", "experience"],
    },
    {
        id: "14",
        question: "What is your rescheduling policy?",
        answer:
            "You can reschedule your course up to 48 hours before the start date at no additional cost. Rescheduling within 48 hours may incur a small fee. We’ll work with you to find an alternative date that fits your schedule.",
        category: "Scheduling",
        tags: ["reschedule", "policy", "timing", "flexibility"],
    },
    {
        id: "15",
        question: "Do you offer corporate training programs?",
        answer:
            "Yes, we provide customized corporate training programs for organizations of all sizes. Our corporate programs can be conducted at your location or ours, and we can tailor the content to your specific industry needs and requirements.",
        category: "Corporate",
        tags: ["corporate", "business", "customized", "training"],
    },
];

const ALL_CATEGORIES = ["All Categories", ...Array.from(new Set(FAQ_ITEMS.map((f) => f.category)))];

function Faq() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All Categories");
    const [activeKey, setActiveKey] = useState(FAQ_ITEMS[0]?.id ?? null);

    const handleSearchChange = useCallback((e) => {
        setSearchQuery(e.target.value);
    }, []);

    const handleCategoryChange = useCallback((category) => {
        setActiveCategory(category);
    }, []);

    const handleAccordionSelect = useCallback(
        (key) => {
            if (!key) return;
            setActiveKey((current) => (current === key ? null : key));
        },
        []
    );

    const filteredFaqs = useMemo(() => {
        const term = searchQuery.trim().toLowerCase();

        return FAQ_ITEMS.filter((item) => {
            const matchesCategory =
                activeCategory === "All Categories" || item.category === activeCategory;

            if (!term) return matchesCategory;

            const haystack = `${item.question} ${item.answer} ${item.category} ${item.tags.join(
                " "
            )}`.toLowerCase();

            return matchesCategory && haystack.includes(term);
        });
    }, [searchQuery, activeCategory]);

    const total = filteredFaqs.length;

    return (
        <>
            <HeroSection
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our courses, 
                certification process, and services. Can't find what you're looking for? 
                Contact us directly."
                backgroundImage={IMAGES.AMBULANCE}
            />

            {/* ===== FAQ LIST SECTION ===== */}
            <section className="py-5 faq-page">
                <Container>
                    {/* Toolbar: Search + Category filter + status text */}
                    <div className="faq-toolbar">
                        <div className="faq-search position-relative">
                            <i className="bi bi-search search-icon" aria-hidden="true" />
                            <Form.Control
                                size="sm"
                                type="search"
                                placeholder="Search FAQs, questions, or topics..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                aria-label="Search FAQs"
                            />
                        </div>

                        <div className="faq-toolbar-right">
                            <span className="faq-status">
                                Showing {total} of {FAQ_ITEMS.length} frequently asked questions
                            </span>

                            <DropdownButton
                                id="faq-category-dropdown"
                                title={activeCategory}
                                variant="light"
                                className="faq-category-dropdown"
                                align="end"
                            >
                                {ALL_CATEGORIES.map((cat) => (
                                    <Dropdown.Item
                                        key={cat}
                                        active={cat === activeCategory}
                                        onClick={() => handleCategoryChange(cat)}
                                    >
                                        {cat}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </div>
                    </div>

                    {/* Accordion list */}
                    <Row className="gy-3">
                        <Col xs={12}>
                            <Accordion activeKey={activeKey} onSelect={handleAccordionSelect}>
                                {filteredFaqs.map((item) => (
                                    <Accordion.Item
                                        eventKey={item.id}
                                        key={item.id}
                                        className="faq-item"
                                    >
                                        <Accordion.Header>
                                            <div className="faq-item-header">
                                                <span className="faq-question-text">
                                                    {item.question}
                                                </span>
                                                <Badge bg="light" className="faq-category-badge">
                                                    {item.category}
                                                </Badge>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className="faq-answer-text">{item.answer}</p>
                                            {item.tags?.length > 0 && (
                                                <div className="faq-tags">
                                                    {item.tags.map((tag) => (
                                                        <span key={tag} className="faq-tag-pill">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===== CONTACT + QUERY SECTION ===== */}
            <ContactQuerySection />
        </>
    );
}

export default Faq;
