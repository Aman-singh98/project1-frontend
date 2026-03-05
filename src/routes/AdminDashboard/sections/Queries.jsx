import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import { Container, Table, Button, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const InternshipQueries = () => {
	const { t } = useTranslation();
	const [queries, setQueries] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchQueries = async () => {
		try {
			const res = await axiosInstance.get("/admin/queries");
			setQueries(res.data.data || []);
		} catch (error) {
			console.error("Error fetching queries:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchQueries();
	}, []);

	const handleDelete = async (id) => {
		const confirmDelete = window.confirm(t("admin.queries.confirmDelete"));
		if (!confirmDelete) return;

		try {
			await axiosInstance.delete(`/admin/queries/${id}`);

			setQueries((prev) => prev.filter((item) => item._id !== id));
		} catch (error) {
			console.error("Delete error:", error);
		}
	};

	return (
		<Container className="py-4">
			<h3 className="fw-bold mb-4">{t("admin.queries.title")}</h3>
			{loading ? (
				<div className="text-center">
					<Spinner animation="border" />
				</div>
			) : (
				<Table striped bordered hover responsive>
					<thead>
						<tr>
							<th>{t("admin.queries.table.index")}</th>
							<th>{t("admin.queries.table.name")}</th>
							<th>{t("admin.queries.table.email")}</th>
							<th>{t("admin.queries.table.mobile")}</th>
							<th>{t("admin.queries.table.state")}</th>
							<th>{t("admin.queries.table.district")}</th>
							<th>{t("admin.queries.table.message")}</th>
							<th>{t("admin.queries.table.action")}</th>
						</tr>
					</thead>
					<tbody>
						{queries.length === 0 ? (
							<tr>
								<td colSpan="8" className="text-center">
									{t("admin.queries.empty")}
								</td>
							</tr>
						) : (
							queries.map((item, index) => (
								<tr key={item._id}>
									<td>{index + 1}</td>
									<td>{item.name}</td>
									<td>{item.email}</td>
									<td>{item.mobile}</td>
									<td>{item.state}</td>
									<td>{item.district}</td>
									<td
										style={{
											maxWidth: "300px",
											whiteSpace: "pre-wrap",
											fontSize: "12px",
										}}
									>
										{item.message}
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

export default InternshipQueries;
