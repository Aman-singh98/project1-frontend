/**
 * FAQ section
 * Mobile‑first, searchable, categorized accordion + contact/query section
 */
import { useMemo, useState, useCallback } from "react";
import { Container, Row, Col, Accordion, Form, Dropdown, DropdownButton, Badge} from "react-bootstrap";
import HeroSection from "../components/global/HeroSection";
import { IMAGES } from "../constants/images";
import ContactQuerySection from "../components/global/ContactQuerySection";
import { FAQ_ITEMS } from "../assets/data/faq";

// Constants
const ALL_CATEGORIES = ["All Categories", ...Array.from(new Set(FAQ_ITEMS?.map((f) => f.category)))];

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
            <section className="py-5 faq-page">
                <Container>
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
                                {ALL_CATEGORIES?.map((cat) => (
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
                    <Row className="gy-3">
                        <Col xs={12}>
                            <Accordion activeKey={activeKey} onSelect={handleAccordionSelect}>
                                {filteredFaqs?.map((item) => (
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
                                                <Badge bg={item.badgeType || "primary"}>
                                                    {item.category}
                                                </Badge>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className="faq-answer-text">{item.answer}</p>
                                            {item.tags?.length > 0 && (
                                                <div className="faq-tags">
                                                    {item.tags?.map((tag) => (
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
            <ContactQuerySection />
        </>
    );
}

export default Faq;
