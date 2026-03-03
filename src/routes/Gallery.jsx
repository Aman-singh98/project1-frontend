/**
 * Gallery
 * Production-ready gallery with search, pagination, and image lightbox.
 */
import { useState, useMemo, useCallback } from "react";
import { Container, Row, Col, Card, Modal, Form, Pagination, Button } from "react-bootstrap";
import { IMAGES } from "../constants/images";
import { formatDisplayDate } from "../utils/dateFormat";
import HeroSection from "../components/global/HeroSection";
import { galleryImages } from "../assets/data/galleryImages";

// Constants
const ITEMS_PER_PAGE = 12;

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredImages = useMemo(() => {
        if (!searchQuery.trim()) return galleryImages;
        const term = searchQuery.toLowerCase().trim();
        return galleryImages.filter(
            (img) =>
                img.name.toLowerCase().includes(term) ||
                img.badge.toLowerCase().includes(term) ||
                img.date.includes(term)
        );
    }, [searchQuery]);

    const totalPages = Math.max(1, Math.ceil(filteredImages.length / ITEMS_PER_PAGE));
    const paginatedImages = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredImages.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredImages, currentPage]);

    const handlePageChange = useCallback((page) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    }, [totalPages]);

    const handleCardClick = useCallback((img) => {
        setSelectedImage(img);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedImage(null);
    }, []);

    const handleSearchChange = useCallback((e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    }, []);

    const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const endItem = Math.min(currentPage * ITEMS_PER_PAGE, filteredImages.length);

    return (
        <>
            <HeroSection
                title="Gallery"
                subtitle="Explore our training sessions, events, and success stories through our photo gallery."
                backgroundImage={IMAGES.AMBULANCE}
            />
            <section className="py-5 gallery-page">
                <Container>
                    <div className="gallery-toolbar">
                        <div className="gallery-search position-relative">
                            <i className="bi bi-search search-icon" aria-hidden="true" />
                            <Form.Control
                                type="search"
                                placeholder="Search gallery images, events, or activities..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                aria-label="Search gallery"
                                className="gallery-search-input"
                            />
                        </div>
                        <span className="gallery-status">
                            Showing {startItem}–{endItem} of {filteredImages.length} images
                        </span>
                    </div>
                    <Row className="g-4">
                        {paginatedImages.map((img) => (
                            <Col xs={12} sm={6} lg={3} key={img.id}>
                                <Card
                                    className="gallery-card h-100 shadow-sm"
                                    onClick={() => handleCardClick(img)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            handleCardClick(img);
                                        }
                                    }}
                                >
                                    <div className="gallery-card-img-wrapper">
                                        <Card.Img
                                            variant="top"
                                            src={img.src}
                                            alt={img.name}
                                            loading="lazy"
                                            fluid
                                        />
                                        <div className="gallery-card-overlay">
                                            <div className="gallery-card-badges">
                                                <span className="gallery-badge gallery-badge--category">
                                                    {img.badge}
                                                </span>
                                                <span className="gallery-badge gallery-badge--date">
                                                    {formatDisplayDate(img.date)}
                                                </span>
                                            </div>
                                            <h6 className="gallery-card-title">{img.name}</h6>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {totalPages > 1 && (
                        <div className="gallery-pagination">
                            <Pagination className="mb-0">
                                <Pagination.Prev
                                    disabled={currentPage <= 1}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    aria-label="Previous page"
                                />
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                    (p) => (
                                        <Pagination.Item
                                            key={p}
                                            active={p === currentPage}
                                            onClick={() => handlePageChange(p)}
                                        >
                                            {p}
                                        </Pagination.Item>
                                    )
                                )}
                                <Pagination.Next
                                    disabled={currentPage >= totalPages}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    aria-label="Next page"
                                />
                            </Pagination>
                        </div>
                    )}
                </Container>
            </section>
            <Modal
                show={!!selectedImage}
                onHide={handleCloseModal}
                size="xl"
                centered
                className="gallery-modal"
            >
                <Modal.Header>
                    <Button
                        type="button"
                        className="modal-close-btn"
                        onClick={handleCloseModal}
                        aria-label="Close"
                    >
                        &times;
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    {selectedImage && (
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.name}
                        />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Gallery;
