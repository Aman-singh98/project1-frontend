import { useEffect, useState } from "react";
import { Container, Table, Button, Spinner } from "react-bootstrap";
import axiosInstance from "../../../api/axiosInstance";

const Subscribers = () => {
	const [subscribers, setSubscribers] = useState([]);
	const [loading, setLoading] = useState(true);

	// Fetch subscribers
	const fetchSubscribers = async () => {
		try {
			const res = await axiosInstance.get("/admin/subscribers");
			setSubscribers(res.data.data || []);
		} catch (error) {
			console.error("Error fetching subscribers", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchSubscribers();
	}, []);

	// Delete subscriber
	const handleDelete = async (id) => {
		if (!window.confirm("Delete this subscriber?")) return;
		try {
			await axiosInstance.delete(`/admin/subscribers/${id}`);
			setSubscribers((prev) =>
				prev.filter((subscriber) => subscriber._id !== id)
			);
		} catch (error) {
			console.error("Delete failed", error);
		}
	};

	return (
		<Container className="py-4">
			<h3 className="mb-4 fw-bold">Newsletter Subscribers</h3>
			{loading ? (
				<div className="text-center">
					<Spinner animation="border" />
				</div>
			) : (
				<Table striped bordered hover responsive>
					<thead>
						<tr>
							<th>#</th>
							<th>Email</th>
							<th>Subscribed Date</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{subscribers.length === 0 ? (
							<tr>
								<td colSpan="4" className="text-center">
									No subscribers found
								</td>
							</tr>
						) : (
							subscribers.map((item, index) => (
								<tr key={item._id}>
									<td>{index + 1}</td>
									<td>{item.email}</td>
									<td>
										{new Date(item.createdAt).toLocaleDateString()}
									</td>
									<td>
										<Button
											variant="danger"
											size="sm"
											onClick={() => handleDelete(item._id)}
										>
											Delete
										</Button>
									</td>
								</tr>
							))
						)}
					</tbody>
				</Table>
			)}
		</Container>
	);
};

export default Subscribers;
