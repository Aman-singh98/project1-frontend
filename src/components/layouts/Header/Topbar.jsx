/**
 * Header top bar
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Container,
	Row,
	Col,
	OverlayTrigger,
	Tooltip,
	Dropdown
} from "react-bootstrap";
import { useTranslation } from "react-i18next";

import LoginModal from "../../auth/LoginPopup";
import RegisterModal from "../../auth/SignupPopup";
import VerifyOtpModal from "../../global/popups/VerifyOtpModal";
import ForgotPasswordModal from "../../global/popups/ForgotPasswordModal";
import ProfileDropdown from "../../global/ProfileDropdown";
import ProfileModal from "../../global/popups/ProfilePopup";

import axiosInstance from "../../../api/axiosInstance";

function TopBar() {
	const { t, i18n } = useTranslation();

	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);
	const [verification, setVerification] = useState(false);
	const [showForgot, setShowForgot] = useState(false);
	const [showProfile, setShowProfile] = useState(false);
	const [user, setUser] = useState(null);

	/* ---------------- Restore user session ---------------- */

	useEffect(() => {
		async function restoreSession() {
			try {
				const response = await axiosInstance.get("/user/profile");
				setUser(response.data.user);
			} catch {
				setUser(null);
			}
		}
		restoreSession();
	}, []);

	/* ---------------- Logout ---------------- */

	async function handleLogout() {
		try {
			await axiosInstance.post("/auth/logout");
		} catch (error) {
			console.error("Logout API error:", error);
		} finally {
			setUser(null);
		}
	}

	function openLoginPopup() {
		setShowLogin(true);
	}

	/* ---------------- Language ---------------- */

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

					<Row className="align-items-center py-1 gy-2">

						{/* LEFT LINKS */}
						<Col xs={12} lg={7}>

							<div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 small top-links">

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

						{/* RIGHT ACTIONS */}
						<Col xs={12} lg={5}>

							<div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-2">

								<Button
									size="sm"
									variant="danger"
									className="fw-bold"
								>
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

								{/* Language */}
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
												{languageLabelMap[currentLang] ??
													languageLabelMap.en}
											</span>

										</Dropdown.Toggle>

										<Dropdown.Menu>

											<Dropdown.Item
												active={currentLang === "en"}
												onClick={() =>
													handleLanguageChange("en")
												}
											>
												{t("language.english")}
											</Dropdown.Item>

											<Dropdown.Item
												active={currentLang === "hi"}
												onClick={() =>
													handleLanguageChange("hi")
												}
											>
												{t("language.hindi")}
											</Dropdown.Item>

											<Dropdown.Item
												active={currentLang === "bn"}
												onClick={() =>
													handleLanguageChange("bn")
												}
											>
												{t("language.bengali")}
											</Dropdown.Item>

										</Dropdown.Menu>

									</Dropdown>

								</OverlayTrigger>

								{/* Login/Profile */}

								{user ? (

									<ProfileDropdown
										user={user}
										handleLogout={handleLogout}
										setShowProfile={setShowProfile}
									/>

								) : (

									<Button
										variant="light"
										size="sm"
										onClick={openLoginPopup}
									>
										<i className="bi bi-person-circle me-1" />
										{t("header.topbar.login")}
									</Button>

								)}

							</div>

						</Col>

					</Row>

				</Container>
			</div>

			{/* Modals */}

			<LoginModal
				show={showLogin}
				setUser={setUser}
				handleClose={() => setShowLogin(false)}
				openSignup={() => setShowRegister(true)}
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
				handleForgot={() => setShowForgot(true)}
				openLogin={() => {
					setShowLogin(true);
					setVerification(false);
				}}
			/>

			<ForgotPasswordModal
				show={showForgot}
				handleClose={() => setShowForgot(false)}
				openLogin={() => setShowLogin(true)}
				openOtp={() => {
					setShowForgot(false);
					setVerification(true);
				}}
			/>

			<ProfileModal
				show={showProfile}
				onHide={() => setShowProfile(false)}
				user={user}
			/>

		</>
	);
}

export default TopBar;
