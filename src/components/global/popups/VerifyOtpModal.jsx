import { Modal, Button, Spinner } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../../api/axiosInstance";

const OTP_LENGTH = 6;
const RESEND_TIME = 60;

function VerifyOtpModal({
	show,
	handleClose,
	identifier,
	openLogin,
	handleForgot,
	openResetPassword
}) {

	const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
	const [timer, setTimer] = useState(RESEND_TIME);
	const [canResend, setCanResend] = useState(false);
	const [loading, setLoading] = useState(false);

	const inputRefs = useRef([]);

	/* ================= TIMER ================= */

	useEffect(() => {
		if (!show) return;
		setOtp(Array(OTP_LENGTH).fill(""));
		setTimer(RESEND_TIME);
		setCanResend(false);

		const interval = setInterval(() => {
			setTimer((prev) => {
				if (prev <= 1) {
					clearInterval(interval);
					setCanResend(true);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		// focus first input
		setTimeout(() => {
			inputRefs.current[0]?.focus();
		}, 200);
		return () => clearInterval(interval);
	}, [show]);

	/* ================= INPUT HANDLER ================= */

	const handleChange = (value, index) => {
		if (!/^\d?$/.test(value)) return;
		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);
		if (value && index < OTP_LENGTH - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (e, index) => {

		if (e.key === "Backspace" && !otp[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}

	};

	/* ================= PASTE SUPPORT ================= */

	const handlePaste = (e) => {
		const pasted = e.clipboardData.getData("text").slice(0, OTP_LENGTH);
		if (!/^\d+$/.test(pasted)) return;
		const newOtp = pasted.split("");
		setOtp(newOtp);
		newOtp.forEach((digit, i) => {
			if (inputRefs.current[i]) {
				inputRefs.current[i].value = digit;
			}
		});

	};

	/* ================= VERIFY OTP ================= */

	async function handleVerify() {
		const finalOtp = otp.join("");
		if (finalOtp.length !== OTP_LENGTH) return;
		try {
			setLoading(true);
			await axiosInstance.post("/auth/verify-otp", {
				identifier,
				otp: finalOtp
			});
			toast.success("OTP verified");
			handleClose();
			if (openResetPassword) {
				openResetPassword(identifier);
			}
		} catch (error) {
			const message =
				error.response?.data?.message ||
				"Invalid OTP";

			toast.error(message);
		} finally {
			setLoading(false);
		}

	}

	/* ================= RESEND OTP ================= */

	async function handleResend() {
		if (!canResend) return;
		try {
			await axiosInstance.post("/auth/send-otp", {
				identifier
			});
			toast.success("OTP resent");
			setTimer(RESEND_TIME);
			setCanResend(false);
		} catch (error) {
			toast.error(
				error.response?.data?.message ||
				"Failed to resend OTP"
			);
		}
	}

	const isOtpComplete = otp.every((digit) => digit !== "");

	function handleChangeCred() {
		handleClose();
		handleForgot();
	}

	return (
		<Modal show={show} onHide={handleClose} centered backdrop="static">
			<Modal.Header closeButton>
				<Modal.Title>
					Verify OTP
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="p-4 text-center">
				<p className="small">
					Code sent to{" "}
					<span className="text-orange">
						{identifier}
					</span>
				</p>
				<div
					className="d-flex justify-content-center gap-2 my-4"
					onPaste={handlePaste}
				>
					{otp.map((digit, index) => (
						<input
							key={index}
							type="text"
							maxLength="1"
							className="otp-input"
							value={digit}
							ref={(el) => (inputRefs.current[index] = el)}
							onChange={(e) =>
								handleChange(e.target.value, index)
							}
							onKeyDown={(e) =>
								handleKeyDown(e, index)
							}
						/>
					))}
				</div>
				<p className="small">
					Didn't receive the code?{" "}
					{canResend ? (
						<span
							className="text-orange cursor-pointer"
							onClick={handleResend}
						>
							Resend
						</span>
					) : (
						<>
							Resend in{" "}
							<strong>
								{timer.toString().padStart(2, "0")}
							</strong>
						</>
					)}
				</p>
				<p
					className="small text-decoration-underline cursor-pointer text-orange"
					onClick={handleChangeCred}
				>
					Change credential
				</p>
				<Button
					className="w-100 btn-orange mt-1"
					disabled={!isOtpComplete || loading}
					onClick={handleVerify}
				>
					{loading ? (
						<>
							<Spinner size="sm" className="me-2" />
							Verifying...
						</>
					) : (
						"Verify OTP"
					)}
				</Button>
				<hr className="my-4" />
				<p className="text-center small">
					Already have an account?{" "}
					<span
						className="text-orange"
						style={{ cursor: "pointer" }}
						onClick={() => {
							handleClose();
							openLogin();
						}}
					>
						Sign in here
					</span>
				</p>
			</Modal.Body>
		</Modal>
	);
}

export default VerifyOtpModal;
