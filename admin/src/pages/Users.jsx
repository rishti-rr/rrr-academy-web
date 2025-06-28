import React, { useEffect, useState } from "react";
import axios from "axios";

const containerStyle = {
  marginLeft: "40px",
  paddingTop: "15px",
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

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [adding, setAdding] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/firebase-users")
      .then(res => {
        const formatted = res.data.map((user, index) => ({
          id: index + 1,
          name: user.name || "N/A",
          email: user.email,
          password: "protected"
        }));
        setUsers(formatted);
        setLoading(false);
      })
      // .catch(err => console.error("Error fetching Firebase users:", err));
      .catch(err => {
        console.error("Error fetching Firebase users:", err);
        setLoading(false);
        alert("Failed to load users.");
      });
  }, []);

  const handleAddClick = () => {
    setAdding(true);
    setFormData({ name: "", email: "", password: "" });
    setEditingId(null);
  };

  const handleEditClick = (user) => {
    setEditingId(user.id);
    setFormData({ name: user.name, email: user.email, password: user.password });
    setAdding(false);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
      if (editingId === id) setEditingId(null);
      setMsg("User deleted successfully!");
      setTimeout(() => setMsg(""), 2500);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setAdding(false);
    setFormData({ name: "", email: "", password: "" });
  };

  const handleSave = () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields.");
      return;
    }

    if (adding) {
      const newUser = {
        id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
        ...formData,
      };
      setUsers([...users, newUser]);
      setAdding(false);
      setMsg("User added successfully!");
    } else if (editingId !== null) {
      setUsers(
        users.map((u) => (u.id === editingId ? { ...u, ...formData } : u))
      );
      setEditingId(null);
      setMsg("User updated successfully!");
    }

    setFormData({ name: "", email: "", password: "" });
    setTimeout(() => setMsg(""), 2500);
  };

  return (
    <main style={containerStyle}>
      <div style={headingStyle}>
        <h1>Users List</h1>
        {!adding && editingId === null && (
          <button style={buttonStyle} onClick={handleAddClick}>
            + Add User
          </button>
        )}
      </div>

      {msg && (
        <div style={{
          marginBottom: "15px",
          padding: "10px",
          backgroundColor: "#C6F6D5",
          color: "#22543D",
          borderRadius: "5px"
        }}>
          {msg}
        </div>
      )}

      {(adding || editingId !== null) && (
        <div style={{
          backgroundColor: "white",
          padding: "16px",
          marginBottom: "24px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          maxWidth: "400px",
        }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
            Name:
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={inputStyle}
            />
          </label>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
            Email:
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={inputStyle}
            />
          </label>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
            Password:
            <input
              type="text"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={inputStyle}
            />
          </label>
          <div style={{ marginTop: "12px" }}>
            <button style={{ ...buttonStyle, marginRight: "12px" }} onClick={handleSave}>
              Save
            </button>
            <button style={{ ...buttonStyle, backgroundColor: "#A0AEC0" }} onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <table style={tableStyle} aria-label="Users table">
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Password</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
  
         <tbody>
          {loading ? (
            <tr><td colSpan="5" style={{ ...tdStyle, textAlign: "center" }}>Loading users...</td></tr>
          ) : users.length === 0 ? (
            <tr><td colSpan="5" style={{ ...tdStyle, textAlign: "center" }}>No users found.</td></tr>
          ) : (
            users.map((user) =>
              editingId === user.id ? (
                <tr key={user.id}>
                  <td style={tdStyle}>{user.id}</td>
                  <td style={tdStyle}>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                    />
                  </td>
                  <td style={tdStyle}>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </td>
                  <td style={tdStyle}>
                    <input
                      type="text"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      style={inputStyle}
                    />
                  </td>
                  <td style={tdStyle}>
                    <button style={{ ...actionBtnStyle, backgroundColor: "#48BB78", color: "white" }} onClick={handleSave}>
                      Save
                    </button>
                    <button style={{ ...actionBtnStyle, backgroundColor: "#E53E3E", color: "white" }} onClick={handleCancel}>
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={user.id}>
                  <td style={tdStyle}>{user.id}</td>
                  <td style={tdStyle}>{user.name}</td>
                  <td style={tdStyle}>{user.email}</td>
                  <td style={tdStyle}>{user.password}</td>
                  <td style={tdStyle}>
                    <button
                      style={{ ...actionBtnStyle, backgroundColor: "#3182CE", color: "white" }}
                      onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </button>
                    <button
                      style={{ ...actionBtnStyle, backgroundColor: "#E53E3E", color: "white" }}
                      onClick={() => handleDeleteClick(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </main>
  );
}
