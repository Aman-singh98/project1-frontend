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
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosInstance, { setCurrentUser } from "../../api/axiosInstance";
import { setAccessToken } from "../../utils/tokenManger";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^[6-9]\d{9}$/;

const defaultValues={
  "identifier": "user@test.com",
  "password": "Test@123"
};

function LoginModal({ show, handleClose }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({defaultValues});

    async function onSubmit(data) {
        try {
            setLoading(true);
            // Step 1: Login
            const loginResponse = await axiosInstance.post(
                "/auth/login",
                {
                    identifier: data.identifier,
                    password: data.password,
                }
            );
            const { accessToken } = loginResponse.data;
            // Step 2: Store access token in memory
            setAccessToken(accessToken);
            // Step 3: Fetch profile from backend
            const profileResponse = await axiosInstance.get(
                "/user/profile"
            );
            const user = profileResponse.data.user;
            // Update the current user for add condition, user is logged in or not
            setCurrentUser(user);
            const role = profileResponse.data.user.role;
            toast.success("Login successful");
            reset();
            handleClose();
            // Step 4: Redirect based on role
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

    return (
        <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email or Mobile</Form.Label>
                        <Form.Control
                            type="text"
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
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            {...register("password", {
                                required: "Password required",
                            })}
                            isInvalid={Boolean(errors.password)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        type="submit"
                        className="w-100"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Spinner size="sm" animation="border" className="me-2" />
                                Logging in...
                            </>
                        ) : (
                            "Login"
                        )}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;
