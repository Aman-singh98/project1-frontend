import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function ForgotPasswordModal({ show, handleClose, openLogin, openOtp }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { t } = useTranslation();

	const onSubmit = (data) => {
		console.log("Send reset OTP to:", data.identifier);
		toast.success(t("auth.forgotPassword.toastSuccess"));
		openOtp(data.identifier);
	};

	return (
		<Modal show={show} onHide={handleClose} centered backdrop="static">
			<Modal.Header closeButton>
				<Modal.Title>{t("auth.forgotPassword.title")}</Modal.Title>
			</Modal.Header>
			<Modal.Body className="p-4">
				<p>{t("auth.forgotPassword.description")}</p>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group className="mb-4">
						<Form.Label className="small fw-semibold">
							{t("auth.forgotPassword.labelIdentifier")}
						</Form.Label>
						<Form.Control
							type="text"
							placeholder={t("auth.forgotPassword.placeholderIdentifier")}
							{...register("identifier", {
								required: t("auth.forgotPassword.errorRequired"),
								validate: (value) => {
									const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
									const mobileRegex = /^[6-9]\d{9}$/;

									return (
										emailRegex.test(value) ||
										mobileRegex.test(value) ||
										t("auth.forgotPassword.errorInvalid")
									);
								},
							})}
							isInvalid={errors.identifier}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.identifier?.message}
						</Form.Control.Feedback>
					</Form.Group>
					<Button
						type="submit"
						className="w-100 btn-orange mb-3"
						variant="secondary"
					>
						{t("auth.forgotPassword.sendOtp")}
					</Button>
					<div className="text-center">
						<span
							className="text-decoration-underline cursor-pointer"
							onClick={() => {
								handleClose();
								openLogin();
							}}
						>
							{t("auth.forgotPassword.backToLogin")}
						</span>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default ForgotPasswordModal;