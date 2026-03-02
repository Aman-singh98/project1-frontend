import axiosInstance from "../api/axiosInstance";

// ================= GET ALL =================
export const getInternships = (page = 1, limit = 10) => {
	return axiosInstance.get(`/internship?page=${page}&limit=${limit}`);
};

// ================= GET SINGLE =================
export const getInternshipById = (id) => {
	return axiosInstance.get(`/internship/${id}`);
};

// ================= UPDATE STATUS =================
export const updateInternshipStatus = (id, data) => {
	return axiosInstance.patch(`/internship/${id}/status`, data);
};

// ================= DELETE =================
export const deleteInternship = (id) => {
	return axiosInstance.delete(`/internship/${id}`);
};

/* ================================
   APPLY INTERNSHIP (PUBLIC)
================================ */
// export const applyInternship = (formData) => {
// 	console.log(formData, 'formData');
// 	return axiosInstance.post("/internship", formData, {
// 		headers: {
// 			"Content-Type": "multipart/form-data"
// 		}
// 	});
// };

export const applyInternship = (formData) => {
	// return axiosInstance.post("/internship/apply", formData);
	try {
		const response = axiosInstance.post("/internship/apply", formData);

		console.log(response.data, "response data");
	} catch (error) {
		console.log("Full Error:", error);
		console.log("Server Error:", error.response?.data);
	}
};