import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    image: "",
    rating: "",
    description: ""
  });
  const [editingId, setEditingId] = useState(null);
 const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.error("Error:", err));
  }, []);


const handleSubmit = (e) => {
  e.preventDefault();

  if (editingId) {
   
    setCourses(
      courses.map((c) => c._id === editingId ? { ...c, ...formData } : c)
    );
    setSuccessMessage("✅ Course updated successfully");
    resetForm();
    setTimeout(() => setSuccessMessage(""), 2000);
  } else {
    
    const tempId = Date.now().toString();
    const newCourse = { ...formData, _id: tempId };
    setCourses([...courses, newCourse]);
    setSuccessMessage("Course added (temporary)");
    resetForm();
    setTimeout(() => setSuccessMessage(""), 2000);
  }
};


  const handleEdit = (course) => {
    setEditingId(course._id);
    setFormData(course);
  };


  const handleDelete = (id) => {
  if (confirm("Are you sure?")) {
    setCourses(courses.filter((c) => c._id !== id));
    setSuccessMessage("Course deleted (temporary)");
    setTimeout(() => setSuccessMessage(""), 2000);
  }
};


  const resetForm = () => {
    setFormData({
      title: "",
      instructor: "",
      image: "",
      rating: "",
      description: ""
    });
    setEditingId(null);
  };

  return (
    <div style={{ padding: "20px 40px", backgroundColor: "#F7FAFC", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px" }}>Courses (Admin Panel)</h1>
      {successMessage && (
  <div style={{
    marginBottom: "15px",
    padding: "10px",
    backgroundColor: "#C6F6D5",
    color: "#22543D",
    borderRadius: "5px"
  }}>
    {successMessage}
  </div>
)}

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "20px", borderRadius: "8px", marginBottom: "30px" }}>
        <input placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required style={inputStyle} />
        <input placeholder="Instructor" value={formData.instructor} onChange={(e) => setFormData({ ...formData, instructor: e.target.value })} required style={inputStyle} />
        <input placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} style={inputStyle} />
        <input placeholder="Rating" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} style={inputStyle} />
        <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} style={inputStyle} />
        <div style={{ marginTop: "10px" }}>
          <button type="submit" style={submitBtnStyle}>{editingId ? "Update" : "Add"} Course</button>
          {editingId && <button onClick={resetForm} style={{ ...submitBtnStyle, backgroundColor: "#A0AEC0", marginLeft: "10px" }}>Cancel</button>}
        </div>
      </form>

      {/* Table View */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Instructor</th>
            <th style={thStyle}>Image</th>
            <th style={thStyle}>Rating</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td style={tdStyle}>{course.title}</td>
              <td style={tdStyle}>{course.instructor}</td>
              <td style={tdStyle}>
                <img src={course.image} alt={course.title} style={{ width: "60px", height: "auto", borderRadius: "4px" }} />
              </td>
              <td style={tdStyle}>{course.rating || "N/A"}</td>
              <td style={tdStyle}>
                <button onClick={() => handleEdit(course)} style={editBtn}>Edit</button>
                <button onClick={() => handleDelete(course._id)} style={delBtn}>Delete</button>
              </td>
            </tr>
          ))}
          {courses.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px", color: "#999" }}>
                No courses available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #CBD5E0",
  borderRadius: "5px",
};

const submitBtnStyle = {
  backgroundColor: "#3182CE",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "#fff",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
};

const thStyle = {
  padding: "12px",
  backgroundColor: "#EDF2F7",
  borderBottom: "2px solid #E2E8F0",
  textAlign: "left",
  fontWeight: "600",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #E2E8F0",
};

const editBtn = {
  backgroundColor: "#48BB78",
  color: "#fff",
  padding: "6px 12px",
  marginRight: "8px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const delBtn = {
  backgroundColor: "#E53E3E",
  color: "#fff",
  padding: "6px 12px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
