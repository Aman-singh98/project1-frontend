/**
 * Courses
 * Mobile-first, responsive, with search + filters + pagination
 * ! Add loader if wait for the api response.
 */
import { useEffect, useMemo, useCallback, useState } from "react";
import { Container, Row, Col, Card, Form, Button, Pagination } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IMAGES } from "../constants/images";
import axiosInstance from "../api/axiosInstance";
import HeroSection from "../components/global/HeroSection";
import DeliveryForm from "../components/global/DeliveryForm";
import { SEED_COURSES, COURSES_PER_PAGE, MODES, PRICE_RANGES } from "../assets/data/courses";

function Courses() {
	const { t } = useTranslation();
	const [search, setSearch] = useState("");
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedModes, setSelectedModes] = useState([]);
	const [selectedPrices, setSelectedPrices] = useState([]);
	const [courses, setCourses] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const [showForm, setShowForm] = useState(false);
	const [selectedCourse, setSelectedCourse] = useState(null);

	const fetchCourses = async () => {
		try {
			const res = await axiosInstance.get("/courses");
			const apiCourses = Array.isArray(res.data) ? res.data : res.data?.data ?? [];
			setCourses(apiCourses);
		} catch {
			setCourses(SEED_COURSES);
		}
	};

	useEffect(() => {
		fetchCourses();
	}, []);

	const categories = useMemo(() => {
		return [...new Set(courses?.map((c) => c.category).filter(Boolean))];
	}, [courses]);

	const filteredCourses = useMemo(() => {
		const term = search.trim().toLowerCase();

		return courses.filter((course) => {
			const title = (course.title ?? "").toLowerCase();
			const desc = (course.description ?? "").toLowerCase();

			const matchesSearch = !term || title.includes(term) || desc.includes(term);

			const matchesCategory =
				selectedCategories.length === 0 || selectedCategories.includes(course.category);

			const matchesMode = selectedModes.length === 0 || selectedModes.includes(course.mode);

			const matchesPrice =
				selectedPrices.length === 0 ||
				selectedPrices.some((label) => {
					const range = PRICE_RANGES.find((r) => r.label === label);
					if (!range) return false;
					const price = Number(course.price ?? 0);
					return price >= range.min && price <= range.max;
				});

			return matchesSearch && matchesCategory && matchesMode && matchesPrice;
		});
	}, [courses, search, selectedCategories, selectedModes, selectedPrices]);

	const totalPages = Math.max(1, Math.ceil(filteredCourses.length / COURSES_PER_PAGE));

	const paginatedCourses = useMemo(() => {
		const start = (currentPage - 1) * COURSES_PER_PAGE;
		return filteredCourses.slice(start, start + COURSES_PER_PAGE);
	}, [filteredCourses, currentPage]);

	const handlePageChange = useCallback(
		(page) => setCurrentPage(Math.max(1, Math.min(page, totalPages))),
		[totalPages]
	);

	const resetToFirstPage = useCallback(() => setCurrentPage(1), []);

	const toggleValue = (value, state, setState) => {
		setState((prev) => {
			const next = prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value];
			return next;
		});
		resetToFirstPage();
	};

	const handleEnrollment = async (formData) => {
		try {

			const orderRes = await axiosInstance.post(
				"/payment/create-course-order",
				{
					courseId: selectedCourse._id,
					price: selectedCourse.price,
					student: formData
				}
			);
			const order = orderRes.data;
			const options = {
				key: import.meta.env.VITE_RAZORPAY_KEY_ID,
				amount: order.amount,
				currency: order.currency,
				name: "Course Enrollment",
				description: selectedCourse.title,
				order_id: order.id,

				handler: async function (response) {
					await axiosInstance.post(
						"/payment/verify-course-payment",
						{
							...response,
							student: formData,
							courseId: selectedCourse._id
						}
					);
					alert("Enrollment Successful");
					setShowForm(false);
				}

			};
			const razor = new window.Razorpay(options);
			razor.open();
		} catch (error) {
			console.error("Enrollment error:", error);
		}
	};

	function clearFilters() {
		setSelectedCategories([]);
		setSelectedModes([]);
		setSelectedPrices([]);
		setSearch("");
		setCurrentPage(1);
	}

	const startItem = filteredCourses.length === 0 ? 0 : (currentPage - 1) * COURSES_PER_PAGE + 1;
	const endItem = Math.min(currentPage * COURSES_PER_PAGE, filteredCourses.length);

	return (
		<>
			<HeroSection
				title={t("courses.heroTitle")}
				subtitle={t("courses.heroSubtitle")}
				backgroundImage={IMAGES.AMBULANCE}
			/>
			<section className="py-4 py-md-5" style={{ backgroundColor: "#f5f5f0" }}>
				<Container>
					<Row className="g-4">
						<Col xs={12} md={4} lg={3}>
							<Card className="border-0 shadow-sm rounded-3 overflow-hidden">
								<Card.Body className="p-4">
									<h5 className="fw-bold mb-4 text-dark">{t("courses.filters")}</h5>
									<div className="mb-4">
										<h6 className="fw-semibold mb-3 text-dark">{t("courses.category")}</h6>
										{categories?.length === 0 ? (
											<div className="text-muted small">{t("courses.noCategories")}</div>
										) : (
											categories?.map((cat) => (
												<Form.Check
													key={cat}
													type="checkbox"
													id={`cat-${cat}`}
													label={cat}
													checked={selectedCategories.includes(cat)}
													onChange={() =>
														toggleValue(cat, selectedCategories, setSelectedCategories)
													}
													className="mb-2"
												/>
											))
										)}
									</div>
									<div className="mb-4">
										<h6 className="fw-semibold mb-3 text-dark">{t("courses.mode")}</h6>
										{MODES?.map((mode) => (
											<Form.Check
												key={mode}
												type="checkbox"
												id={`mode-${mode}`}
												label={mode.charAt(0).toUpperCase() + mode.slice(1)}
												checked={selectedModes.includes(mode)}
												onChange={() => toggleValue(mode, selectedModes, setSelectedModes)}
												className="mb-2"
											/>
										))}
									</div>
									<div className="mb-4">
										<h6 className="fw-semibold mb-3 text-dark">{t("courses.priceRange")}</h6>
										{PRICE_RANGES?.map((range) => (
											<Form.Check
												key={range.label}
												type="checkbox"
												id={`price-${range.label}`}
												label={range.label}
												checked={selectedPrices.includes(range.label)}
												onChange={() => toggleValue(range.label, selectedPrices, setSelectedPrices)}
												className="mb-2"
											/>
										))}
									</div>
									<Button variant="outline-danger" size="sm" onClick={clearFilters}>
										{t("courses.clearFilters")}
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} md={8} lg={9}>
							<div className="d-flex flex-column gap-2 gap-md-3 mb-3 mb-md-4">
								<div className="course-search position-relative">
									<i className="bi bi-search course-search-icon" aria-hidden="true" />
									<Form.Control
										type="search"
										placeholder={t("courses.searchPlaceholder")}
										value={search}
										onChange={(e) => {
											setSearch(e.target.value);
											setCurrentPage(1);
										}}
										className="course-search-input"
										aria-label="Search courses"
									/>
								</div>
								<div className="text-muted small">
									{filteredCourses.length === 0
										? t("courses.showingZero")
										: t("courses.showingRange", {
											start: startItem,
											end: endItem,
											total: filteredCourses.length,
										})}
								</div>
							</div>
							{paginatedCourses?.length === 0 ? (
								<Card className="border-0 shadow-sm">
									<Card.Body className="text-center py-5 text-muted">
										{t("courses.noCourses")}
									</Card.Body>
								</Card>
							) : (
								<Row className="g-4">
									{paginatedCourses?.map((course) => (
										<Col xs={12} key={course.id}>
											<Card className="course-card border-0 shadow-sm overflow-hidden">
												<Row className="g-0">
													<Col xs={12} sm={4} md={4} lg={3}>
														<div className="course-card-img-wrap">
															<img
																src={course.image || "https://via.placeholder.com/600x400"}
																alt={course.title || "Course image"}
																className="course-card-img"
																loading="lazy"
															/>
														</div>
													</Col>
													<Col xs={12} sm={8} md={8} lg={9}>
														<Card.Body className="p-3 p-md-4 d-flex flex-column">
															<h5 className="fw-bold text-dark mb-2">{course.title}</h5>
															<div className="text-muted small mb-2">
																{t("courses.courseDuration")}:{" "}
																{course.duration ?? t("courses.fallbackDash")}{" "}
																{t("courses.daysSuffix")}{" "}
																• {t("courses.modeLabel")}:{" "}
																{course.mode ?? t("courses.fallbackDash")}{" "}
																• {t("courses.languageLabel")}:{" "}
																{Array.isArray(course.languages)
																	? course.languages.join(", ")
																	: t("courses.fallbackDash")}
															</div>
															<p className="text-dark small mb-3 course-desc">
																{course.description || "—"}
															</p>
															<div className="mt-auto d-flex justify-content-start">
																<Button
																	className="btn-orange"
																	size="sm"
																	onClick={() => {
																		setSelectedCourse(course);
																		setShowForm(true);
																	}}
																>
																	{t("courses.enrollNow")}
																</Button>
															</div>
														</Card.Body>
													</Col>
												</Row>
											</Card>
										</Col>
									))}
								</Row>
							)}
							{totalPages > 1 && (
								<div className="d-flex justify-content-center mt-4">
									<Pagination className="mb-0 gallery-pagination">
										<Pagination.Prev
											disabled={currentPage <= 1}
											onClick={() => handlePageChange(currentPage - 1)}
											aria-label={t("courses.pagination.prev")}
										/>
										{Array.from({ length: totalPages }, (_, i) => i + 1)?.map((p) => (
											<Pagination.Item
												key={p}
												active={p === currentPage}
												onClick={() => handlePageChange(p)}
											>
												{p}
											</Pagination.Item>
										))}
										<Pagination.Next
											disabled={currentPage >= totalPages}
											onClick={() => handlePageChange(currentPage + 1)}
											aria-label={t("courses.pagination.next")}
										/>
									</Pagination>
								</div>
							)}
						</Col>
					</Row>
				</Container>
			</section>
			<DeliveryForm
				show={showForm}
				onClose={() => setShowForm(false)}
				onSubmit={handleEnrollment}
			/>
		</>
	);
}

export default Courses;
