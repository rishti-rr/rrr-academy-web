import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [courses, setCourses] = useState([]);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login'); // Redirect to login if not authenticated
    }
    const fetchData = async () => {
      try {
        const coursesResponse = await axios.get('http://localhost:5000/api/courses', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(coursesResponse.data);
        const booksResponse = await axios.get('http://localhost:5000/api/books', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBooks(booksResponse.data);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    };
    fetchData();
  }, [navigate]);

  const handleDelete = async (id, type) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.delete(`http://localhost:5000/api/admin/delete-${type}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (type === 'course') {
        setCourses(courses.filter((course) => course._id !== id));
      } else {
        setBooks(books.filter((book) => book._id !== id));
      }
    } catch (err) {
      console.error(`Error deleting ${type}`, err);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <h3>Existing Courses</h3>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.title} - {course.author}
            <button onClick={() => handleDelete(course._id, 'course')}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Existing Books</h3>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} - {book.author}
            <button onClick={() => handleDelete(book._id, 'book')}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;

