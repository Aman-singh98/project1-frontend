/**
 * RegisterModal.jsx
 * -----------------
 * Create account modal
 */

import { Modal, Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTERS } from "../../constants/router";
import { toast } from "react-toastify";
import axiosInstance, { setCurrentUser } from "../../api/axiosInstance";
import { setAccessToken } from "../../utils/tokenManger";
import { useState } from "react";

function RegisterModal({ show, handleClose, openLogin }) {

	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();

	async function onSubmit(data) {

		try {

			setLoading(true);

			const response = await axiosInstance.post(
				"/auth/register",
				{
					fullName: data.fullName,
					email: data.email,
					mobileNumber: data.mobile,
					aadhaarNumber: data.aadhaar,
					password: data.password
				}
			);

			const { accessToken } = response.data;

			/* store access token */

			setAccessToken(accessToken);

			/* fetch user profile */

			const profileResponse =
				await axiosInstance.get("/user/profile");

			const user = profileResponse.data.user;

			setCurrentUser(user);

			toast.success("Account created successfully");

			reset();

			handleClose();

			navigate("/");

		} catch (error) {

			const message =
				error.response?.data?.message ||
				"Registration failed";

			toast.error(message);

		} finally {

			setLoading(false);

		}

	}

	function handleLinkNavigation() {
		handleClose();
	}

	return (
		<Modal
			show={show}
			onHide={handleClose}
			centered
			size="md"
			backdrop="static"
		>
			<Modal.Body className="p-4">

				<h4 className="fw-semibold mb-4">
					Create account
				</h4>

				<Form onSubmit={handleSubmit(onSubmit)}>

					{/* FULL NAME */}

					<Form.Group className="mb-3">
						<Form.Label className="form-label-custom">
							FULL NAME
						</Form.Label>

						<Form.Control
							type="text"
							placeholder="Enter your full name"
							className="input-green"
							{...register("fullName", {
								required: "Full name is required",
								minLength: {
									value: 3,
									message: "Minimum 3 characters required"
								},
								pattern: {
									value: /^[A-Za-z\s]+$/,
									message: "Only letters allowed"
								}
							})}
							isInvalid={Boolean(errors.fullName)}
						/>

						<Form.Control.Feedback type="invalid">
							{errors.fullName?.message}
						</Form.Control.Feedback>
					</Form.Group>

					{/* EMAIL */}

					<Form.Group className="mb-3">
						<Form.Label className="form-label-custom">
							EMAIL ADDRESS
						</Form.Label>

						<Form.Control
							type="email"
							placeholder="Enter your email"
							className="input-green"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value:
										/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: "Enter valid email"
								}
							})}
							isInvalid={Boolean(errors.email)}
						/>

						<Form.Control.Feedback type="invalid">
							{errors.email?.message}
						</Form.Control.Feedback>
					</Form.Group>

					{/* MOBILE */}

					<Form.Group className="mb-3">
						<Form.Label className="form-label-custom">
							MOBILE NUMBER
						</Form.Label>

						<Form.Control
							type="text"
							placeholder="Enter your mobile number"
							className="input-green"
							{...register("mobile", {
								required:
									"Mobile number is required",
								pattern: {
									value: /^[6-9]\d{9}$/,
									message:
										"Enter valid 10-digit mobile number"
								}
							})}
							isInvalid={Boolean(errors.mobile)}
						/>

						<Form.Control.Feedback type="invalid">
							{errors.mobile?.message}
						</Form.Control.Feedback>
					</Form.Group>

					{/* AADHAAR */}

					<Form.Group className="mb-3">
						<Form.Label className="form-label-custom">
							AADHAAR NUMBER
						</Form.Label>

						<Form.Control
							type="text"
							placeholder="Enter your 12-digit Aadhaar number"
							className="input-green"
							{...register("aadhaar", {
								required:
									"Aadhaar number is required",
								pattern: {
									value: /^\d{12}$/,
									message:
										"Aadhaar must be exactly 12 digits"
								}
							})}
							isInvalid={Boolean(errors.aadhaar)}
						/>

						<Form.Control.Feedback type="invalid">
							{errors.aadhaar?.message}
						</Form.Control.Feedback>
					</Form.Group>

					{/* PASSWORD */}

					<Form.Group className="mb-4">
						<Form.Label className="form-label-custom">
							PASSWORD
						</Form.Label>

						<Form.Control
							type="password"
							placeholder="Enter password"
							className="input-green"
							{...register("password", {
								required:
									"Password is required",
								minLength: {
									value: 6,
									message:
										"Password must be at least 6 characters"
								}
							})}
							isInvalid={Boolean(errors.password)}
						/>

						<Form.Control.Feedback type="invalid">
							{errors.password?.message}
						</Form.Control.Feedback>
					</Form.Group>

					{/* SUBMIT BUTTON */}

					<Button
						type="submit"
						className="w-100 btn-orange mb-3"
						style={{ color: "#fff" }}
						disabled={loading}
					>

						{loading ? (
							<>
								<Spinner
									size="sm"
									animation="border"
									className="me-2"
								/>
								Creating account...
							</>
						) : (
							"Create account"
						)}

					</Button>

					{/* TERMS */}

					<p className="text-center small mb-2">
						By continuing, you agree to our{" "}
						<Link
							to={ROUTERS.Terms}
							className="text-orange"
							onClick={handleLinkNavigation}
						>
							terms & conditions
						</Link>
					</p>

					<hr className="my-3 border-success opacity-25" />

					{/* LOGIN LINK */}

					<p className="text-center small mb-0">
						Already have an account?{" "}
						<span
							className="text-orange cursor-pointer"
							onClick={() => {
								handleClose();
								openLogin();
							}}
						>
							Sign in here
						</span>
					</p>

				</Form>

			</Modal.Body>
		</Modal>
	);
}

export default RegisterModal;
