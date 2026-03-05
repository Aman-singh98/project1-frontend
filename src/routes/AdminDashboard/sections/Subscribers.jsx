import { useEffect, useState } from "react";
import { Container, Table, Button, Spinner } from "react-bootstrap";
import axiosInstance from "../../../api/axiosInstance";
import { useTranslation } from "react-i18next";

const Subscribers = () => {
	const { t } = useTranslation();
	const [subscribers, setSubscribers] = useState([]);
	const [loading, setLoading] = useState(true);

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

	const handleDelete = async (id) => {
		if (!window.confirm(t("admin.subscribers.confirmDelete"))) return;
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
			<h3 className="mb-4 fw-bold">{t("admin.subscribers.title")}</h3>
			{loading ? (
				<div className="text-center">
					<Spinner animation="border" />
				</div>
			) : (
				<Table striped bordered hover responsive>
					<thead>
						<tr>
							<th>{t("admin.subscribers.table.index")}</th>
							<th>{t("admin.subscribers.table.email")}</th>
							<th>{t("admin.subscribers.table.subscribedDate")}</th>
							<th>{t("admin.subscribers.table.action")}</th>
						</tr>
					</thead>
					<tbody>
						{subscribers.length === 0 ? (
							<tr>
								<td colSpan="4" className="text-center">
									{t("admin.subscribers.empty")}
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
											{t("admin.actions.delete")}
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
