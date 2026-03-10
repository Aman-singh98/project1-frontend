import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import { Container, Table, Spinner } from "react-bootstrap";

function CourseEnrollments() {

    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEnrollments = async () => {
        try {
            const res = await axiosInstance.get("/course-enrollments");
            setEnrollments(res.data);
        } catch (error) {
            console.error("Fetch enrollments error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEnrollments();
    }, []);

    return (
        <Container className="py-4">
            <h3 className="mb-4">Course Enrollments</h3>
            {loading ? (
                <div className="text-center py-5">
                    <Spinner animation="border" />
                </div>
            ) : (
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Course ID</th>
                            <th>Amount</th>
                            <th>Payment</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map((item) => (
                            <tr key={item._id}>
                                <td>{item.student?.name}</td>
                                <td>{item.student?.phone}</td>
                                <td>{item.student?.email}</td>
                                <td>
                                    {item.student?.address}, {item.student?.city}
                                </td>
                                <td>{item.courseId}</td>
                                <td>₹{item.amount}</td>
                                <td>
                                    {item.payment_status === "paid" ? (
                                        <span className="text-success fw-bold">Paid</span>
                                    ) : (
                                        <span className="text-danger">Pending</span>
                                    )}
                                </td>
                                <td>
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
}

export default CourseEnrollments;
