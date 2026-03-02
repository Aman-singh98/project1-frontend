import axiosInstance from "../api/axiosInstance";

// ================= CREATE KIT =================
// export const createKit = async (formData) => {
//   console.log(formData, 'formData');
//   return axiosInstance.post("/admin/kits", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };
export const createKit = async (formData) => {
  return axiosInstance.post("/admin/kits", formData);
};

// ================= GET ALL (ADMIN) =================
export const getAdminKits = async () => {
  return axiosInstance.get("/admin/kits");
};

// ================= DELETE =================
export const deleteKit = async (id) => {
  return axiosInstance.delete(`/admin/kits/${id}`);
};

// ================= GET PUBLIC =================
export const getPublicKits = async () => {
  return axiosInstance.get("/kits");
};