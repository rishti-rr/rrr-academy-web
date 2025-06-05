import React, { useState } from "react";

const initialCourses = [
  { id: 1, title: "React Basics", instructor: "John Doe", duration: "10h" },
  { id: 2, title: "Node.js Fundamentals", instructor: "Jane Smith", duration: "12h" },
  { id: 3, title: "Python for Beginners", instructor: "Alice Brown", duration: "8h" },
];

const containerStyle = {
  marginLeft: "40px",
  paddingTop: "80px",
  padding: "24px",
  backgroundColor: "#F7FAFC",
  minHeight: "100vh",
  boxSizing: "border-box",
};

const headingStyle = {
  fontSize: "2rem",
  fontWeight: "700",
  color: "#2D3748",
  marginBottom: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const buttonStyle = {
  padding: "8px 16px",
  fontSize: "14px",
  backgroundColor: "#3182CE",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "white",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  overflow: "hidden",
};

const thStyle = {
  textAlign: "left",
  padding: "12px 16px",
  borderBottom: "2px solid #E2E8F0",
  backgroundColor: "#EDF2F7",
  fontWeight: "600",
  color: "#4A5568",
};

const tdStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #E2E8F0",
  color: "#2D3748",
};

const actionBtnStyle = {
  marginRight: "8px",
  padding: "6px 12px",
  fontSize: "12px",
  borderRadius: "4px",
  cursor: "pointer",
  border: "none",
};

const inputStyle = {
  padding: "6px 8px",
  fontSize: "14px",
  borderRadius: "4px",
  border: "1px solid #CBD5E0",
  width: "100%",
  boxSizing: "border-box",
};

export default function Courses() {
  const [courses, setCourses] = useState(initialCourses);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: "", instructor: "", duration: "" });
  const [adding, setAdding] = useState(false);

  const handleAddClick = () => {
    setAdding(true);
    setFormData({ title: "", instructor: "", duration: "" });
    setEditingId(null);
  };

  const handleEditClick = (course) => {
    setEditingId(course.id);
    setFormData({ title: course.title, instructor: course.instructor, duration: course.duration });
    setAdding(false);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((c) => c.id !== id));
      if (editingId === id) setEditingId(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setAdding(false);
    setFormData({ title: "", instructor: "", duration: "" });
  };

  const handleSave = () => {
    if (!formData.title || !formData.instructor || !formData.duration) {
      alert("Please fill all fields.");
      return;
    }
    if (adding) {
      const newCourse = {
        id: courses.length ? Math.max(...courses.map((c) => c.id)) + 1 : 1,
        ...formData,
      };
      setCourses([...courses, newCourse]);
      setAdding(false);
    } else if (editingId !== null) {
      setCourses(
        courses.map((c) => (c.id === editingId ? { ...c, ...formData } : c))
      );
      setEditingId(null);
    }
    setFormData({ title: "", instructor: "", duration: "" });
  };

  return (
    <main style={containerStyle}>
      <div style={headingStyle}>
        <h1>Courses List</h1>
        {!adding && editingId === null && (
          <button style={buttonStyle} onClick={handleAddClick}>
            + Add Course
          </button>
        )}
      </div>

      {(adding || editingId !== null) && (
        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            marginBottom: "24px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            maxWidth: "400px",
          }}
        >
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
            Title:
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              style={inputStyle}
            />
          </label>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
            Instructor:
            <input
              type="text"
              value={formData.instructor}
              onChange={(e) =>
                setFormData({ ...formData, instructor: e.target.value })
              }
              style={inputStyle}
            />
          </label>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
            Duration:
            <input
              type="text"
              value={formData.duration}
              onChange={(e) =>
                setFormData({ ...formData, duration: e.target.value })
              }
              style={inputStyle}
            />
          </label>
          <div style={{ marginTop: "12px" }}>
            <button
              style={{ ...buttonStyle, marginRight: "12px" }}
              onClick={handleSave}
            >
              Save
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: "#A0AEC0" }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <table style={tableStyle} aria-label="Courses table">
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Instructor</th>
            <th style={thStyle}>Duration</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) =>
            editingId === course.id ? (
              <tr key={course.id}>
                <td style={tdStyle}>{course.id}</td>
                <td style={tdStyle}>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    style={inputStyle}
                  />
                </td>
                <td style={tdStyle}>
                  <input
                    type="text"
                    value={formData.instructor}
                    onChange={(e) =>
                      setFormData({ ...formData, instructor: e.target.value })
                    }
                    style={inputStyle}
                  />
                </td>
                <td style={tdStyle}>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData({ ...formData, duration: e.target.value })
                    }
                    style={inputStyle}
                  />
                </td>
                <td style={tdStyle}>
                  <button
                    style={{ ...actionBtnStyle, backgroundColor: "#48BB78", color: "white" }}
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    style={{ ...actionBtnStyle, backgroundColor: "#E53E3E", color: "white" }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={course.id} tabIndex={0} role="button" aria-label={`Edit course ${course.title}`}>
                <td style={tdStyle}>{course.id}</td>
                <td style={tdStyle}>{course.title}</td>
                <td style={tdStyle}>{course.instructor}</td>
                <td style={tdStyle}>{course.duration}</td>
                <td style={tdStyle}>
                  <button
                    style={{ ...actionBtnStyle, backgroundColor: "#3182CE", color: "white" }}
                    onClick={() => handleEditClick(course)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ ...actionBtnStyle, backgroundColor: "#E53E3E", color: "white" }}
                    onClick={() => handleDeleteClick(course.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
          {courses.length === 0 && (
            <tr>
              <td colSpan="5" style={{ padding: "16px", textAlign: "center", color: "#718096" }}>
                No courses available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
