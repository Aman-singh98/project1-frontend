/**
 * Header top bar
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, OverlayTrigger, Tooltip, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LoginModal from "../../auth/LoginPopup";
import RegisterModal from "../../auth/SignupPopup";
import VerifyOtpModal from "../../global/popups/VerifyOtpModal";
import ForgotPasswordModal from "../../global/popups/ForgotPasswordModal";

// API calling for login
import axiosInstance from "../../../api/axiosInstance";
import ProfileDropdown from "../../global/ProfileDropdown";

function TopBar() {
	const { t, i18n } = useTranslation();
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);
	const [verification, setVerification] = useState(false);
	const [showForgot, setShowForgot] = useState(false);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function restoreSession() {
			try {
				const response = await axiosInstance.get("/user/profile");
				setUser(response.data.user);
			} catch {
				setUser(null);
			} finally {
				setLoading(false);
			}
		}

		restoreSession();
	}, []);

	function openLoginPopup() {
		setShowLogin(true);
	}

	/**
	 * handleLogout
	 * ------------
	 * Performs complete logout process.
	 *
	 * Flow:
	 * 1. Calls backend /auth/logout endpoint.<Image src={IMAGES.BLACK_LOGO} style={{ height: "80px" }} roundedCircle />
	 * 2. Backend clears refresh token cookie.
	 * 3. Frontend clears local user state.
	 * 4. Redirects user to homepage.
	 */
	async function handleLogout() {
		try {
			// Call backend logout API
			await axiosInstance.post("/auth/logout");
		} catch (error) {
			// Even if API fails, continue logout locally
			console.error("Logout API error:", error);
		} finally {
			// Clear any local state if stored
			setUser(null); // Only if you are using user state in Header

			// Redirect to home page
			// window.location.href = "/";
		}
	}

	const currentLang = i18n.language || "en";
	const languageLabelMap = {
		en: t("language.english"),
		hi: t("language.hindi"),
		bn: t("language.bengali"),
	};

	function handleLanguageChange(languageCode) {
		if (languageCode === currentLang) return;
		i18n.changeLanguage(languageCode);
	}

	return (
		<>
			<div className="bg-dark text-white topbar-wrapper">
				<Container fluid>
					<Row className="justify-content-center align-items-center py-1 gy-2">
						<Col xs={12} lg={7}>
							<div className="d-flex flex-wrap align-items-center top-links">
								<Link to="/ambulance">
									<i className="bi-truck me-1" />
									{t("header.topbar.ambulance")}
								</Link>
								<Link to="/internship">
									<i className="bi bi-mortarboard me-1" />
									{t("header.topbar.internship")}
								</Link>
								<Link to="/first-add-kit">
									<i className="bi bi-bag-plus me-1" />
									{t("header.topbar.firstAidKit")}
								</Link>
							</div>
						</Col>
						<Col xs={12} lg={5}>
							<div className="d-flex flex-wrap justify-content-lg-end gap-2">
								<Button size="sm" variant="danger" className="fw-bold">
									<i className="bi bi-telephone-fill me-1" />
									{t("header.topbar.helpline")}
								</Button>
								<Button
									as={Link}
									to="/courses"
									variant="success"
									size="sm"
									className="fw-semibold text-white"
								>
									<i className="bi bi-mortarboard-fill me-1" />
									{t("header.topbar.courses")}
								</Button>
								<OverlayTrigger
									placement="bottom"
									overlay={<Tooltip>{t("language.select")}</Tooltip>}
								>
									<Dropdown align="end">
										<Dropdown.Toggle
											variant="secondary"
											size="sm"
											id="language-switcher"
											className="d-inline-flex align-items-center gap-1"
										>
											<i className="bi bi-globe" />
											<span className="d-none d-sm-inline">
												{languageLabelMap[currentLang] ?? languageLabelMap.en}
											</span>
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item
												active={currentLang === "en"}
												onClick={() => handleLanguageChange("en")}
											>
												{t("language.english")}
											</Dropdown.Item>
											<Dropdown.Item
												active={currentLang === "hi"}
												onClick={() => handleLanguageChange("hi")}
											>
												{t("language.hindi")}
											</Dropdown.Item>
											<Dropdown.Item
												active={currentLang === "bn"}
												onClick={() => handleLanguageChange("bn")}
											>
												{t("language.bengali")}
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</OverlayTrigger>
								{loading ? null : !user ? (
									<Button
										variant="light"
										size="sm"
										onClick={openLoginPopup}
									>
										<i className="bi bi-person-circle me-1" />
										{t("header.topbar.login")}
									</Button>
								) : (
									<ProfileDropdown user={user} handleLogout={handleLogout} />
								)}
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<LoginModal
				show={showLogin}
				handleClose={() => setShowLogin(false)}
				openSignup={() => setShowRegister(true)}
				openVerificationPopup={() => setVerification(true)}
				openForgotPassword={() => {
					setShowForgot(true)
					setShowLogin(false)
				}}
			/>
			<RegisterModal
				show={showRegister}
				handleClose={() => setShowRegister(false)}
				openLogin={() => setShowLogin(true)}
			/>
			<VerifyOtpModal
				show={verification}
				handleClose={() => setVerification(false)}
				mobile="Mobile"
			/>
			<ForgotPasswordModal
				show={showForgot}
				handleClose={() => setShowForgot(false)}
				openLogin={() => setShowLogin(true)}
				openOtp={() => {
					setShowForgot(false);
					setVerification(false);
					// setUserMobile(mobile);
				}}
			/>
		</>
	);
}

export default TopBar;