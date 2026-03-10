import { Modal, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const OTP_LENGTH = 6;
const RESEND_TIME = 60;

function VerifyOtpModal({ show, handleClose, mobile, openLogin, handleForgot }) {
	// States
	const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
	const [timer, setTimer] = useState(RESEND_TIME);
	const [canResend, setCanResend] = useState(false);

	const inputRefs = useRef([]);

	/* ================= TIMER ================= */

	useEffect(() => {
		if (!show) return;

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

		return () => clearInterval(interval);
	}, [show]);

	/* ================= INPUT HANDLER ================= */

	const handleChange = (value, index) => {
		if (!/^\d?$/.test(value)) return;

		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		if (value && index < OTP_LENGTH - 1) {
			inputRefs.current[index + 1].focus();
		}
	};

	const handleKeyDown = (e, index) => {
		if (e.key === "Backspace" && !otp[index] && index > 0) {
			inputRefs.current[index - 1].focus();
		}
	};

	const handleVerify = () => {
		const finalOtp = otp.join("");
		if (finalOtp.length === OTP_LENGTH) {
			console.log("OTP:", finalOtp);
			// API verify call here
			toast.success(' Log in successfully!');
		}
	};

	const handleResend = () => {
		if (!canResend) return;
		console.log("Resend OTP");
		setTimer(RESEND_TIME);
		setCanResend(false);
	};

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
					Code sent to <span className="text-orange">{mobile}</span>
				</p>
				<div className="d-flex justify-content-center gap-2 my-4">
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
				<p className="small text-decoration-underline cursor-pointer text-orange" onClick={handleChangeCred}>
					Change credential
				</p>
				<Button
					className="w-100 btn-orange mt-1"
					disabled={!isOtpComplete}
					onClick={handleVerify}
				>
					Verify OTP
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