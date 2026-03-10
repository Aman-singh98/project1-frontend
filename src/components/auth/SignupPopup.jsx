/**
 * RegisterModal.jsx
 * -----------------
 * Create account modal
 */

import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../constants/router";

function RegisterModal({ show, handleClose, openLogin }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Register Data:", data);
        // API call here
        reset();
    };

    function handleLinkNavigation() {
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} centered size="md">
            <Modal.Body className="p-4">
                <h4 className="fw-semibold mb-4">
                    Create account
                </h4>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                                    message: "Minimum 3 characters required",
                                },
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: "Only letters allowed",
                                },
                            })}
                            isInvalid={Boolean(errors.fullName)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.fullName?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
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
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter valid email",
                                },
                            })}
                            isInvalid={Boolean(errors.email)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="form-label-custom">
                            MOBILE NUMBER
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your mobile number"
                            className="input-green"
                            {...register("mobile", {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[6-9]\d{9}$/,
                                    message: "Enter valid 10-digit mobile number",
                                },
                            })}
                            isInvalid={Boolean(errors.mobile)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.mobile?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label className="form-label-custom">
                            AADHAAR NUMBER
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your 12-digit Aadhaar number"
                            className="input-green"
                            {...register("aadhaar", {
                                required: "Aadhaar number is required",
                                pattern: {
                                    value: /^\d{12}$/,
                                    message: "Aadhaar must be exactly 12 digits",
                                },
                            })}
                            isInvalid={Boolean(errors.aadhaar)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.aadhaar?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        type="submit"
                        className="w-100 btn-orange mb-3"
                        style={{ color: "#fff" }}
                    >
                        Create account
                    </Button>
                    <p className="text-center small mb-2">
                        By continuing, you agree to our{" "}
                        <Link to={ROUTERS.Terms} className="text-orange" onClick={handleLinkNavigation}>
                            terms & conditions
                        </Link>
                    </p>
                    <hr className="my-3 border-success opacity-25" />
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
