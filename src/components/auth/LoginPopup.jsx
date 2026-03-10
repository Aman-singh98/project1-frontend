/**
 * LoginModal.jsx
 * --------------
 * Complete login flow implementation.
 *
 * Flow:
 * - Call login API
 * - Store access token in memory
 * - Fetch user profile
 * - Redirect based on role
 */
import { useState } from "react";
import { Modal, Button, Form, Spinner, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosInstance, { setCurrentUser } from "../../api/axiosInstance";
import { setAccessToken } from "../../utils/tokenManger";
import { IMAGES } from "../../constants/images";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^[6-9]\d{9}$/;

const defaultValues = {
	identifier: "user@test.com",
	password: "Test@123",
};

function LoginModal({ show, handleClose, openSignup, openForgotPassword }) {

	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ defaultValues });

	const togglePassword = () => {
		setShowPassword(prev => !prev);
	};

	async function onSubmit(data) {
		try {

			setLoading(true);
			const loginResponse = await axiosInstance.post("/auth/login", {
				identifier: data.identifier,
				password: data.password,
			});
			const { accessToken } = loginResponse.data;
			setAccessToken(accessToken);
			const profileResponse = await axiosInstance.get("/user/profile");
			const user = profileResponse.data.user;
			setCurrentUser(user);
			const role = user.role;
			toast.success("Login successful");
			reset();
			handleClose();
			if (role === "admin") {
				navigate("/admin/dashboard");
			} else {
				navigate("/");
			}
		} catch (error) {
			toast.error(
				error.response?.data?.message || "Login failed"
			);
		} finally {
			setLoading(false);
		}
	}

	function handleSignUp() {
		handleClose();
		openSignup();
	}

	function handleForgotPassword() {
		openForgotPassword();
	}

	return (
		<Modal centered show={show} onHide={handleClose}>
			<Modal.Body className="p-4">
				<div className="text-center mb-3">
					<Image src={IMAGES.RED_LOGO} style={{ height: "50px" }} />
				</div>
				<h4 className="text-center mb-4">
					Let's get started
				</h4>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group className="mb-3">
						<Form.Label>Email or Mobile</Form.Label>
						<div className="input-group">
							<span className="input-group-text">
								<i className="bi bi-person" />
							</span>
							<Form.Control
								type="text"
								placeholder="Enter email or mobile"
								{...register("identifier", {
									required: "Email or mobile required",
									validate: (value) =>
										EMAIL_REGEX.test(value) ||
										MOBILE_REGEX.test(value) ||
										"Enter valid email or mobile",
								})}
								isInvalid={Boolean(errors.identifier)}
							/>
						</div>
						<Form.Control.Feedback type="invalid">
							{errors.identifier?.message}
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Password</Form.Label>
						<div className="input-group">
							<span className="input-group-text">
								<i className="bi bi-lock" />
							</span>
							<Form.Control
								type={showPassword ? "text" : "password"}
								placeholder="Enter password"
								{...register("password", {
									required: "Password required",
								})}
								isInvalid={Boolean(errors.password)}
							/>
							<button
								type="button"
								className="input-group-text cursor-pointer"
								onClick={togglePassword}
							>
								<i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} />
							</button>
						</div>
						<Form.Control.Feedback type="invalid">
							{errors.password?.message}
						</Form.Control.Feedback>
					</Form.Group>
					<Button
						type="submit"
						className="w-100 btn-orange mb-2 fs-14"
						variant="link"
						style={{ color: "white" }}
					>
						{loading ? (
							<>
								<Spinner
									size="sm"
									animation="border"
									className="me-2"
								/>
								Logging in...
							</>
						) : (
							"Get Started"
						)}
					</Button>

				</Form>
				<p className="mb-1 text-center small">
					<span className="text-orange cursor-pointer" onClick={handleForgotPassword}>
						Forgot your password?
					</span>
				</p>
				<hr />
				<p className="text-center small mb-0">
					Don't have an account?{" "}
					<span className="text-orange cursor-pointer" onClick={handleSignUp}>
						Create one here
					</span>
				</p>
			</Modal.Body>
		</Modal>
	);
}

export default LoginModal;
