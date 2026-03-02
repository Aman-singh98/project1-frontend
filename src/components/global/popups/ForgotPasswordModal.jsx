import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function ForgotPasswordModal({ show, handleClose, openLogin, openOtp }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Send reset OTP to:", data.identifier);
        toast.success("OTP sent successfully");
        openOtp(data.identifier);
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>Forgot password?</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
                <p>Enter your email or phone to receive an OTP</p>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {/* EMAIL OR MOBILE */}
                    <Form.Group className="mb-4">
                        <Form.Label className="small fw-semibold">
                            Email Or Mobile number
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your email or mobile number"
                            {...register("identifier", {
                                required: "Email or mobile number is required",
                                validate: (value) => {
                                    const emailRegex =
                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                    const mobileRegex =
                                        /^[6-9]\d{9}$/;

                                    return (
                                        emailRegex.test(value) ||
                                        mobileRegex.test(value) ||
                                        "Enter valid email or 10-digit mobile"
                                    );
                                },
                            })}
                            isInvalid={errors.identifier}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.identifier?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    {/* SEND OTP BUTTON */}
                    <Button
                        type="submit"
                        className="w-100 btn-orange mb-3"
                        variant="secondary"
                    >
                        Send OTP
                    </Button>
                    {/* BACK TO LOGIN */}
                    <div className="text-center">
                        <span
                            className="text-decoration-underline cursor-pointer"
                            onClick={() => {
                                handleClose();
                                openLogin();
                            }}
                        >
                            Back to login
                        </span>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ForgotPasswordModal;