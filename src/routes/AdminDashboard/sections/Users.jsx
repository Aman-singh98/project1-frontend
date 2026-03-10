// import { useTranslation } from "react-i18next";

// function Users() {
// 	const { t } = useTranslation();

// 	return <div>{t("admin.users.title")}</div>;
// }

// export default Users;

/**
 * AdminUsers.jsx
 * --------------
 * Admin panel user list
 */

import { useEffect, useState } from "react";
 import { useTranslation } from "react-i18next";
import { Table, Spinner, Pagination } from "react-bootstrap";
import axiosInstance from "../../../api/axiosInstance";

function AdminUsers() {
const { t } = useTranslation();
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	const [page, setPage] = useState(1);
	const [limit] = useState(10);
	const [total, setTotal] = useState(0);


	/* ---------------- FETCH USERS ---------------- */

	async function fetchUsers(currentPage = 1) {

		try {

			setLoading(true);

			const response = await axiosInstance.get(
				`/admin/users?page=${currentPage}&limit=${limit}`
			);

			setUsers(response.data.users);
			setTotal(response.data.total);

		} catch (error) {

			console.error("Failed to load users", error);

		} finally {

			setLoading(false);

		}

	}

	useEffect(() => {
		fetchUsers(page);
	}, [page]);

	/* ---------------- PAGINATION ---------------- */

	const totalPages = Math.ceil(total / limit);

	const paginationItems = [];

	for (let number = 1; number <= totalPages; number++) {

		paginationItems.push(
			<Pagination.Item
				key={number}
				active={number === page}
				onClick={() => setPage(number)}
			>
				{number}
			</Pagination.Item>
		);

	}

	/* ---------------- UI ---------------- */

	if (loading) {

		return (
			<div className="text-center py-5">
				<Spinner animation="border" />
			</div>
		);

	}

	return (

		<div className="container mt-4">

			<div>{t("admin.users.title")}</div>

			<Table striped bordered hover responsive>

				<thead>

					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Email</th>
						<th>Mobile</th>
						<th>Aadhaar</th>
						<th>Role</th>
						<th>Created</th>
					</tr>

				</thead>

				<tbody>

					{users.map((user, index) => (

						<tr key={user._id}>

							<td>
								{(page - 1) * limit + index + 1}
							</td>

							<td>
								{user.fullName}
							</td>

							<td>
								{user.email}
							</td>

							<td>
								{user.mobileNumber}
							</td>

							<td>
								{user.aadhaarNumber}
							</td>

							<td>
								{user.role}
							</td>

							<td>
								{new Date(user.createdAt)
									.toLocaleDateString()}
							</td>

						</tr>

					))}

				</tbody>

			</Table>

			{/* Pagination */}

			<div className="d-flex justify-content-center">

				<Pagination>

					<Pagination.Prev
						onClick={() => setPage(page - 1)}
						disabled={page === 1}
					/>

					{paginationItems}

					<Pagination.Next
						onClick={() => setPage(page + 1)}
						disabled={page === totalPages}
					/>

				</Pagination>

			</div>

		</div>

	);

}

export default AdminUsers;