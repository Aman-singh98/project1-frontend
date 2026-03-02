import React, { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../../../api/axiosInstance";


export default function AdminCourses() {
    const [courses, setCourses] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        duration: "",
        price: "",
        mode: "offline",
        category: "",
        languages: "",
    });
    const [image, setImage] = useState(null);

    const fetchCourses = async () => {
        const res = await axiosInstance.get("/courses");
        setCourses(res.data);
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach((key) =>
            data.append(key, formData[key])
        );
        data.append("image", image);

        await axiosInstance.post("/courses", data);

        fetchCourses();
        alert("Course Added!");
    };

    const handleDelete = async (id) => {
        await axiosInstance.delete(`/courses/${id}`);
        fetchCourses();
    };

    return (
        <div style={{ display: "flex", gap: 40, padding: 20 }}>
            <h4>Courses</h4>
            {/* FORM */}
            <div style={{ width: "40%" }}>
                <h2>Add Course</h2>

                <form onSubmit={handleSubmit}>
                    <input name="title" placeholder="Title" onChange={handleChange} />
                    <textarea name="description" placeholder="Description" onChange={handleChange} />
                    <input name="duration" type="number" placeholder="Duration" onChange={handleChange} />
                    <input name="price" type="number" placeholder="Price" onChange={handleChange} />

                    <select name="mode" onChange={handleChange}>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                        <option value="hybrid">Hybrid</option>
                    </select>

                    <input name="category" placeholder="Category" onChange={handleChange} />
                    <input name="languages" placeholder="Languages (comma separated)" onChange={handleChange} />
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />

                    <button type="submit">Add Course</button>
                </form>
            </div>

            {/* TABLE */}
            <div style={{ width: "60%" }}>
                <h2>Courses List</h2>

                <table border="1" cellPadding="10" width="100%">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Mode</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses?.map((course) => (
                            <tr key={course._id}>
                                <td>{course.title}</td>
                                <td>₹{course.price}</td>
                                <td>{course.mode}</td>
                                <td>
                                    <button onClick={() => handleDelete(course._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
