import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RegisterModal({ show, handleClose, openLogin }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Register Data:", data);
        // API call here
        reset();
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            backdrop="static"
            size="md"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Create account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label className="small fw-semibold">
                            Full name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your full name"
                            {...register("fullName", {
                                required: "Full name is required",
                                minLength: {
                                    value: 3,
                                    message: "Minimum 3 characters required",
                                },
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: "Only letters allowed",
                                },
                            })}
                            isInvalid={errors.fullName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.fullName?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="small fw-semibold">
                            Email address
                        </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter valid email",
                                },
                            })}
                            isInvalid={errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="small fw-semibold">
                            Mobile number
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your mobile number"
                            {...register("mobile", {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[6-9]\d{9}$/,
                                    message: "Enter valid 10-digit mobile number",
                                },
                            })}
                            isInvalid={errors.mobile}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.mobile?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="small fw-semibold">
                            Aadhaar number
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your 12-digit Aadhaar number"
                            {...register("aadhaar", {
                                required: "Aadhaar number is required",
                                pattern: {
                                    value: /^\d{12}$/,
                                    message: "Aadhaar must be exactly 12 digits",
                                },
                            })}
                            isInvalid={errors.aadhaar}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.aadhaar?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" variant="secondary" className="w-100 mb-3">
                        Create account
                    </Button>
                    <p className="text-center small">
                        By continuing, you agree to our{" "}
                        <Link to="#" className="text-orange">
                            terms & conditions
                        </Link>
                    </p>
                    <hr />
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
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default RegisterModal;
