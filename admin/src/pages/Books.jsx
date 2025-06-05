import React, { useState } from "react";

const initialBooks = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", pages: 464 },
  { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", pages: 472 },
  { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", pages: 278 },
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

export default function Books() {
  const [books, setBooks] = useState(initialBooks);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: "", author: "", pages: "" });
  const [adding, setAdding] = useState(false);

  const handleAddClick = () => {
    setAdding(true);
    setFormData({ title: "", author: "", pages: "" });
    setEditingId(null);
  };

  const handleEditClick = (book) => {
    setEditingId(book.id);
    setFormData({ title: book.title, author: book.author, pages: book.pages });
    setAdding(false);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter((b) => b.id !== id));
      if (editingId === id) setEditingId(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setAdding(false);
    setFormData({ title: "", author: "", pages: "" });
  };

  const handleSave = () => {
    if (!formData.title || !formData.author || !formData.pages) {
      alert("Please fill all fields.");
      return;
    }
    if (adding) {
      const newBook = {
        id: books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1,
        ...formData,
      };
      setBooks([...books, newBook]);
      setAdding(false);
    } else if (editingId !== null) {
      setBooks(
        books.map((b) => (b.id === editingId ? { ...b, ...formData } : b))
      );
      setEditingId(null);
    }
    setFormData({ title: "", author: "", pages: "" });
  };

  return (
    <main style={containerStyle}>
      <div style={headingStyle}>
        <h1>Books List</h1>
        {!adding && editingId === null && (
          <button style={buttonStyle} onClick={handleAddClick}>
            + Add Book
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
            Author:
            <input
              type="text"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              style={inputStyle}
            />
          </label>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
            Pages:
            <input
              type="number"
              value={formData.pages}
              onChange={(e) =>
                setFormData({ ...formData, pages: e.target.value })
              }
              style={inputStyle}
              min={1}
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

      <table style={tableStyle} aria-label="Books table">
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Author</th>
            <th style={thStyle}>Pages</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) =>
            editingId === book.id ? (
              <tr key={book.id}>
                <td style={tdStyle}>{book.id}</td>
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
                    value={formData.author}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                    style={inputStyle}
                  />
                </td>
                <td style={tdStyle}>
                  <input
                    type="number"
                    value={formData.pages}
                    onChange={(e) =>
                      setFormData({ ...formData, pages: e.target.value })
                    }
                    style={inputStyle}
                    min={1}
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
              <tr key={book.id} tabIndex={0} role="button" aria-label={`Edit book ${book.title}`}>
                <td style={tdStyle}>{book.id}</td>
                <td style={tdStyle}>{book.title}</td>
                <td style={tdStyle}>{book.author}</td>
                <td style={tdStyle}>{book.pages}</td>
                <td style={tdStyle}>
                  <button
                    style={{ ...actionBtnStyle, backgroundColor: "#3182CE", color: "white" }}
                    onClick={() => handleEditClick(book)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ ...actionBtnStyle, backgroundColor: "#E53E3E", color: "white" }}
                    onClick={() => handleDeleteClick(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
          {books.length === 0 && (
            <tr>
              <td colSpan="5" style={{ padding: "16px", textAlign: "center", color: "#718096" }}>
                No books available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
