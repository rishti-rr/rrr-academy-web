// import React, { useState } from "react";

// const initialBooks = [
//   { id: 1, title: "Clean Code", author: "Robert C. Martin", pages: 464 },
//   { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", pages: 472 },
//   { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", pages: 278 },
// ];

// const containerStyle = {
//   marginLeft: "40px",
//   paddingTop: "80px",
//   padding: "24px",
//   backgroundColor: "#F7FAFC",
//   minHeight: "100vh",
//   boxSizing: "border-box",
// };

// const headingStyle = {
//   fontSize: "2rem",
//   fontWeight: "700",
//   color: "#2D3748",
//   marginBottom: "24px",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// };

// const buttonStyle = {
//   padding: "8px 16px",
//   fontSize: "14px",
//   backgroundColor: "#3182CE",
//   color: "white",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
//   backgroundColor: "white",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   borderRadius: "8px",
//   overflow: "hidden",
// };

// const thStyle = {
//   textAlign: "left",
//   padding: "12px 16px",
//   borderBottom: "2px solid #E2E8F0",
//   backgroundColor: "#EDF2F7",
//   fontWeight: "600",
//   color: "#4A5568",
// };

// const tdStyle = {
//   padding: "12px 16px",
//   borderBottom: "1px solid #E2E8F0",
//   color: "#2D3748",
// };

// const actionBtnStyle = {
//   marginRight: "8px",
//   padding: "6px 12px",
//   fontSize: "12px",
//   borderRadius: "4px",
//   cursor: "pointer",
//   border: "none",
// };

// const inputStyle = {
//   padding: "6px 8px",
//   fontSize: "14px",
//   borderRadius: "4px",
//   border: "1px solid #CBD5E0",
//   width: "100%",
//   boxSizing: "border-box",
// };

// export default function Books() {
//   const [books, setBooks] = useState(initialBooks);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({ title: "", author: "", pages: "" });
//   const [adding, setAdding] = useState(false);

//   const handleAddClick = () => {
//     setAdding(true);
//     setFormData({ title: "", author: "", pages: "" });
//     setEditingId(null);
//   };

//   const handleEditClick = (book) => {
//     setEditingId(book.id);
//     setFormData({ title: book.title, author: book.author, pages: book.pages });
//     setAdding(false);
//   };

//   const handleDeleteClick = (id) => {
//     if (window.confirm("Are you sure you want to delete this book?")) {
//       setBooks(books.filter((b) => b.id !== id));
//       if (editingId === id) setEditingId(null);
//     }
//   };

//   const handleCancel = () => {
//     setEditingId(null);
//     setAdding(false);
//     setFormData({ title: "", author: "", pages: "" });
//   };

//   const handleSave = () => {
//     if (!formData.title || !formData.author || !formData.pages) {
//       alert("Please fill all fields.");
//       return;
//     }
//     if (adding) {
//       const newBook = {
//         id: books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1,
//         ...formData,
//       };
//       setBooks([...books, newBook]);
//       setAdding(false);
//     } else if (editingId !== null) {
//       setBooks(
//         books.map((b) => (b.id === editingId ? { ...b, ...formData } : b))
//       );
//       setEditingId(null);
//     }
//     setFormData({ title: "", author: "", pages: "" });
//   };

//   return (
//     <main style={containerStyle}>
//       <div style={headingStyle}>
//         <h1>Books List</h1>
//         {!adding && editingId === null && (
//           <button style={buttonStyle} onClick={handleAddClick}>
//             + Add Book
//           </button>
//         )}
//       </div>

//       {(adding || editingId !== null) && (
//         <div
//           style={{
//             backgroundColor: "white",
//             padding: "16px",
//             marginBottom: "24px",
//             borderRadius: "8px",
//             boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//             maxWidth: "400px",
//           }}
//         >
//           <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
//             Title:
//             <input
//               type="text"
//               value={formData.title}
//               onChange={(e) =>
//                 setFormData({ ...formData, title: e.target.value })
//               }
//               style={inputStyle}
//             />
//           </label>
//           <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
//             Author:
//             <input
//               type="text"
//               value={formData.author}
//               onChange={(e) =>
//                 setFormData({ ...formData, author: e.target.value })
//               }
//               style={inputStyle}
//             />
//           </label>
//           <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
//             Pages:
//             <input
//               type="number"
//               value={formData.pages}
//               onChange={(e) =>
//                 setFormData({ ...formData, pages: e.target.value })
//               }
//               style={inputStyle}
//               min={1}
//             />
//           </label>
//           <div style={{ marginTop: "12px" }}>
//             <button
//               style={{ ...buttonStyle, marginRight: "12px" }}
//               onClick={handleSave}
//             >
//               Save
//             </button>
//             <button
//               style={{ ...buttonStyle, backgroundColor: "#A0AEC0" }}
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       <table style={tableStyle} aria-label="Books table">
//         <thead>
//           <tr>
//             <th style={thStyle}>ID</th>
//             <th style={thStyle}>Title</th>
//             <th style={thStyle}>Author</th>
//             <th style={thStyle}>Pages</th>
//             <th style={thStyle}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book) =>
//             editingId === book.id ? (
//               <tr key={book.id}>
//                 <td style={tdStyle}>{book.id}</td>
//                 <td style={tdStyle}>
//                   <input
//                     type="text"
//                     value={formData.title}
//                     onChange={(e) =>
//                       setFormData({ ...formData, title: e.target.value })
//                     }
//                     style={inputStyle}
//                   />
//                 </td>
//                 <td style={tdStyle}>
//                   <input
//                     type="text"
//                     value={formData.author}
//                     onChange={(e) =>
//                       setFormData({ ...formData, author: e.target.value })
//                     }
//                     style={inputStyle}
//                   />
//                 </td>
//                 <td style={tdStyle}>
//                   <input
//                     type="number"
//                     value={formData.pages}
//                     onChange={(e) =>
//                       setFormData({ ...formData, pages: e.target.value })
//                     }
//                     style={inputStyle}
//                     min={1}
//                   />
//                 </td>
//                 <td style={tdStyle}>
//                   <button
//                     style={{ ...actionBtnStyle, backgroundColor: "#48BB78", color: "white" }}
//                     onClick={handleSave}
//                   >
//                     Save
//                   </button>
//                   <button
//                     style={{ ...actionBtnStyle, backgroundColor: "#E53E3E", color: "white" }}
//                     onClick={handleCancel}
//                   >
//                     Cancel
//                   </button>
//                 </td>
//               </tr>
//             ) : (
//               <tr key={book.id} tabIndex={0} role="button" aria-label={`Edit book ${book.title}`}>
//                 <td style={tdStyle}>{book.id}</td>
//                 <td style={tdStyle}>{book.title}</td>
//                 <td style={tdStyle}>{book.author}</td>
//                 <td style={tdStyle}>{book.pages}</td>
//                 <td style={tdStyle}>
//                   <button
//                     style={{ ...actionBtnStyle, backgroundColor: "#3182CE", color: "white" }}
//                     onClick={() => handleEditClick(book)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     style={{ ...actionBtnStyle, backgroundColor: "#E53E3E", color: "white" }}
//                     onClick={() => handleDeleteClick(book.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             )
//           )}
//           {books.length === 0 && (
//             <tr>
//               <td colSpan="5" style={{ padding: "16px", textAlign: "center", color: "#718096" }}>
//                 No books available.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </main>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const containerStyle = {
//   marginLeft: "40px",
//   paddingTop: "80px",
//   padding: "24px",
//   backgroundColor: "#F7FAFC",
//   minHeight: "100vh",
//   boxSizing: "border-box",
// };

// const headingStyle = {
//   fontSize: "2rem",
//   fontWeight: "700",
//   color: "#2D3748",
//   marginBottom: "24px",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// };

// const buttonStyle = {
//   padding: "8px 16px",
//   fontSize: "14px",
//   backgroundColor: "#3182CE",
//   color: "white",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
//   backgroundColor: "white",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   borderRadius: "8px",
//   overflow: "hidden",
// };

// const thStyle = {
//   textAlign: "left",
//   padding: "12px 16px",
//   borderBottom: "2px solid #E2E8F0",
//   backgroundColor: "#EDF2F7",
//   fontWeight: "600",
//   color: "#4A5568",
// };

// const tdStyle = {
//   padding: "12px 16px",
//   borderBottom: "1px solid #E2E8F0",
//   color: "#2D3748",
// };

// const actionBtnStyle = {
//   marginRight: "8px",
//   padding: "6px 12px",
//   fontSize: "12px",
//   borderRadius: "4px",
//   cursor: "pointer",
//   border: "none",
// };

// const inputStyle = {
//   padding: "6px 8px",
//   fontSize: "14px",
//   borderRadius: "4px",
//   border: "1px solid #CBD5E0",
//   width: "100%",
//   boxSizing: "border-box",
// };

// export default function Books() {
//   const [books, setBooks] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({ title: "", author: "", pages: "" });
//   const [adding, setAdding] = useState(false);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/books")
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.error("Error fetching books:", err));
//   }, []);

//   const handleAddClick = () => {
//     setAdding(true);
//     setFormData({ title: "", author: "", pages: "" });
//     setEditingId(null);
//   };

//   const handleEditClick = (book) => {
//     setEditingId(book._id);
//     setFormData({ title: book.title, author: book.author, pages: book.pages });
//     setAdding(false);
//   };

//   const handleDeleteClick = async (id) => {
//     if (window.confirm("Are you sure you want to delete this book?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/books/${id}`);
//         setBooks(books.filter((b) => b._id !== id));
//       } catch (err) {
//         console.error("Delete error:", err);
//       }
//     }
//   };

//   const handleCancel = () => {
//     setEditingId(null);
//     setAdding(false);
//     setFormData({ title: "", author: "", pages: "" });
//   };

//   const handleSave = async () => {
//     if (!formData.title || !formData.author || !formData.pages) {
//       alert("Please fill all fields.");
//       return;
//     }
//     try {
//       if (adding) {
//         const res = await axios.post("http://localhost:5000/api/books", formData);
//         setBooks([...books, res.data]);
//         setAdding(false);
//       } else if (editingId) {
//         const res = await axios.put(`http://localhost:5000/api/books/${editingId}`, formData);
//         setBooks(books.map((b) => (b._id === editingId ? res.data : b)));
//         setEditingId(null);
//       }
//       setFormData({ title: "", author: "", pages: "" });
//     } catch (err) {
//       console.error("Save error:", err);
//     }
//   };

//   return (
//     <main style={containerStyle}>
//       <div style={headingStyle}>
//         <h1>Books List</h1>
//         {!adding && editingId === null && (
//           <button style={buttonStyle} onClick={handleAddClick}>
//             + Add Book
//           </button>
//         )}
//       </div>

//       {(adding || editingId !== null) && (
//         <div style={{
//           backgroundColor: "white",
//           padding: "16px",
//           marginBottom: "24px",
//           borderRadius: "8px",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//           maxWidth: "400px",
//         }}>
//           <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Title:
//             <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} style={inputStyle} />
//           </label>
//           <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Author:
//             <input type="text" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} style={inputStyle} />
//           </label>
//           <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Pages:
//             <input type="number" value={formData.pages} onChange={(e) => setFormData({ ...formData, pages: e.target.value })} style={inputStyle} min={1} />
//           </label>
//           <div style={{ marginTop: "12px" }}>
//             <button style={{ ...buttonStyle, marginRight: "12px" }} onClick={handleSave}>Save</button>
//             <button style={{ ...buttonStyle, backgroundColor: "#A0AEC0" }} onClick={handleCancel}>Cancel</button>
//           </div>
//         </div>
//       )}

//       <table style={tableStyle} aria-label="Books table">
//         <thead>
//           <tr>
//             <th style={thStyle}>Title</th>
//             <th style={thStyle}>Author</th>
//             <th style={thStyle}>Pages</th>
//             <th style={thStyle}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book) => (
//             <tr key={book._id}>
//               <td style={tdStyle}>{book.title}</td>
//               <td style={tdStyle}>{book.author}</td>
//               <td style={tdStyle}>{book.pages}</td>
//               <td style={tdStyle}>
//                 <button
//                   style={{ ...actionBtnStyle, backgroundColor: "#3182CE", color: "white" }}
//                   onClick={() => handleEditClick(book)}
//                 >Edit</button>
//                 <button
//                   style={{ ...actionBtnStyle, backgroundColor: "#E53E3E", color: "white" }}
//                   onClick={() => handleDeleteClick(book._id)}
//                 >Delete</button>
//               </td>
//             </tr>
//           ))}
//           {books.length === 0 && (
//             <tr>
//               <td colSpan="4" style={{ padding: "16px", textAlign: "center", color: "#718096" }}>
//                 No books available.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </main>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Books() {
//   const [books, setBooks] = useState([]);
//   const [formData, setFormData] = useState({ title: "", author: "", pages: "", image: "", rating: "", description: "" });
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/books")
//       .then(res => setBooks(res.data))
//       .catch(err => console.error("Error:", err));
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editingId) {
//       axios.put(`http://localhost:5000/api/books/${editingId}`, formData)
//         .then(res => {
//           setBooks(books.map((b) => b._id === editingId ? res.data : b));
//           resetForm();
//         });
//     } else {
//       axios.post("http://localhost:5000/api/books", formData)
//         .then(res => {
//           setBooks([...books, res.data]);
//           resetForm();
//         });
//     }
//   };

//   const handleEdit = (book) => {
//     setEditingId(book._id);
//     setFormData(book);
//   };

//   const handleDelete = (id) => {
//     if (confirm("Are you sure?")) {
//       axios.delete(`http://localhost:5000/api/books/${id}`)
//         .then(() => {
//           setBooks(books.filter((b) => b._id !== id));
//         });
//     }
//   };

//   const resetForm = () => {
//     setFormData({ title: "", author: "", pages: "", image: "", rating: "", description: "" });
//     setEditingId(null);
//   };

//   return (
//     <div style={{ padding: "60px 40px", backgroundColor: "#F7FAFC", minHeight: "100vh" }}>
//       <h1 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px" }}>Books (Admin Panel)</h1>

//       {/* Form */}
//       <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "20px", borderRadius: "8px", marginBottom: "30px" }}>
//         <input placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required style={inputStyle} />
//         <input placeholder="Author" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} required style={inputStyle} />
//         <input placeholder="Pages" type="number" value={formData.pages} onChange={(e) => setFormData({ ...formData, pages: e.target.value })} required style={inputStyle} />
//         <input placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} required style={inputStyle} />
//         <input placeholder="Rating" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} style={inputStyle} />
//         <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} style={inputStyle} />
//         <div style={{ marginTop: "10px" }}>
//           <button type="submit" style={submitBtnStyle}>{editingId ? "Update" : "Add"} Book</button>
//           {editingId && <button onClick={resetForm} style={{ ...submitBtnStyle, backgroundColor: "#A0AEC0", marginLeft: "10px" }}>Cancel</button>}
//         </div>
//       </form>

//       {/* Book Cards */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {books.map((book) => (
//           <div key={book._id} style={cardStyle}>
//             <img src={book.image} alt={book.title} style={imgStyle} />
//             <div style={{ padding: "12px" }}>
//               <h2>{book.title}</h2>
//               <p><strong>Author:</strong> {book.author}</p>
//               <p><strong>Pages:</strong> {book.pages}</p>
//               <p><strong>Rating:</strong> {book.rating || "N/A"}</p>
//               <p>{book.description}</p>
//               <div style={{ marginTop: "10px" }}>
//                 <button onClick={() => handleEdit(book)} style={editBtn}>Edit</button>
//                 <button onClick={() => handleDelete(book._id)} style={delBtn}>Delete</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const inputStyle = {
//   display: "block",
//   width: "100%",
//   padding: "10px",
//   marginBottom: "10px",
//   border: "1px solid #CBD5E0",
//   borderRadius: "5px",
// };

// const submitBtnStyle = {
//   backgroundColor: "#3182CE",
//   color: "white",
//   border: "none",
//   padding: "10px 20px",
//   borderRadius: "5px",
//   cursor: "pointer",
// };

// const cardStyle = {
//   width: "250px",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
// };

// const imgStyle = {
//   width: "100%",
//   height: "150px",
//   objectFit: "cover",
// };

// const editBtn = {
//   backgroundColor: "#48BB78",
//   color: "#fff",
//   padding: "6px 12px",
//   marginRight: "10px",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

// const delBtn = {
//   backgroundColor: "#E53E3E",
//   color: "#fff",
//   padding: "6px 12px",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: "",
    rating: "",
    description: ""
  });
  const [editingId, setEditingId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error("Error:", err));
  }, []);
  

  const handleSubmit = (e) => {
  e.preventDefault();

  if (editingId) {
    // 🔁 Update book locally in the UI only
    setBooks(
      books.map((b) => b._id === editingId ? { ...b, ...formData } : b)
    );
    setSuccessMessage("✅ Update done successfully");
    resetForm();
    setTimeout(() => setSuccessMessage(""), 2000);
  } else {
    // ➕ Add new book (temporary only)
    const tempId = Date.now().toString(); // Temporary fake ID
    const newBook = { ...formData, _id: tempId };
    setBooks([...books, newBook]);
    setSuccessMessage("✅ Book added (temporary)");
    resetForm();
    setTimeout(() => setSuccessMessage(""), 2000);
  }
};

  const handleEdit = (book) => {
    setEditingId(book._id);
    setFormData(book);
  };


  const handleDelete = (id) => {
  if (confirm("Are you sure?")) {
    setBooks(books.filter((b) => b._id !== id));
    setSuccessMessage("❌ Book removed (temporary)");
    setTimeout(() => setSuccessMessage(""), 2000);
  }
};


  const resetForm = () => {
    setFormData({
      title: "",
      author: "",
      image: "",
      rating: "",
      description: ""
    });
    setEditingId(null);
  };

  return (
    <div style={{ padding: "20px 40px", backgroundColor: "#F7FAFC", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px" }}>Books (Admin Panel)</h1>
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
        <input placeholder="Author" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} required style={inputStyle} />
        <input placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} style={inputStyle} />
        <input placeholder="Rating" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} style={inputStyle} />
        <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} style={inputStyle} />
        <div style={{ marginTop: "10px" }}>
          <button type="submit" style={submitBtnStyle}>{editingId ? "Update" : "Add"} Book</button>
          {editingId && <button onClick={resetForm} style={{ ...submitBtnStyle, backgroundColor: "#A0AEC0", marginLeft: "10px" }}>Cancel</button>}
        </div>
      </form>

      {/* Table View */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Author</th>
            <th style={thStyle}>Image</th>
            <th style={thStyle}>Rating</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
  <td style={tdStyle}>{book.title}</td>
  <td style={tdStyle}>{book.author}</td>
  <td style={tdStyle}>
    <img src={book.image} alt={book.title} style={{ width: "60px", height: "auto", borderRadius: "4px" }} />
  </td>
  <td style={tdStyle}>{book.rating || "N/A"}</td>
  <td style={tdStyle}>
    <button onClick={() => handleEdit(book)} style={editBtn}>Edit</button>
    <button onClick={() => handleDelete(book._id)} style={delBtn}>Delete</button>
  </td>
</tr>

          ))}
          {books.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px", color: "#999" }}>
                No books available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// Styles (keep as before)
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
