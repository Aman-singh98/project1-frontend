/**
 * ForgotPasswordModal.jsx
 * -----------------------
 * Forgot password flow
 *
 * Step:
 * - Enter email or mobile
 * - Send OTP
 */
import { useState } from "react";
import { Modal, Button, Form, Spinner, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IMAGES } from "../../../constants/images";
import { useTranslation } from "react-i18next";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^[6-9]\d{9}$/;

function ForgotPasswordModal({ show, handleClose, openLogin, openOtp }) {

	const { t } = useTranslation();
	const [loading, setLoading] = useState(false);

	const { register, handleSubmit, formState: { errors }} = useForm();

	const onSubmit = (data) => {
		console.log("Send reset OTP to:", data.identifier);
		toast.success(t("auth.forgotPassword.toastSuccess"));
		openOtp(data.identifier);
	};

	return (
		<Modal centered show={show} onHide={handleClose}>
			<Modal.Body className="p-4">
				<div className="text-center mb-3">
					<Image
						src={IMAGES.RED_LOGO}
						style={{ height: "50px" }}
					/>
				</div>
				<h4 className="text-center mb-2">
					Forgot password?
				</h4>
				<p
					className="text-center mb-4"
					style={{
						color: "#2e7d32",
						fontSize: "14px",
					}}
				>
					{t("auth.forgotPassword.description")}
				</p>

				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group className="mb-3">
						<Form.Label>
							Email or Mobile Number
						</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your email or mobile number"
							{...register("identifier", {
								required: "Email or mobile required",
								validate: (value) =>
									EMAIL_REGEX.test(value) ||
									MOBILE_REGEX.test(value) ||
									"Enter valid email or mobile",
							})}
							isInvalid={Boolean(errors.identifier)}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.identifier?.message}
						</Form.Control.Feedback>

					</Form.Group>
					<Button
						type="submit"
						className="w-100 btn-orange mb-3 fs-14"
						variant="link"
						style={{ color: "white" }}
						disabled={loading}
					>

						{loading ? (
							<>
								<Spinner
									size="sm"
									animation="border"
									className="me-2"
								/>
								Sending OTP...
							</>
						) : (
							"Send OTP"
						)}

					</Button>
				</Form>
				<div className="text-center">
					<button
						type="button"
						className="btn btn-link text-dark p-0 fs-14"
						onClick={() => {
							handleClose();
							openLogin();
						}}
					>
						Back to login
					</button>
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default ForgotPasswordModal;
