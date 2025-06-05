import React, { useEffect, useState } from "react";
import { FaUser, FaBook, FaChalkboardTeacher, FaSignOutAlt } from "react-icons/fa";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState([
    { title: "Total Users", value: 0, icon: FaUser, bgColor: "#5A67D8" },
    { title: "Total Courses", value: 0, icon: FaChalkboardTeacher, bgColor: "#48BB78" },
    { title: "Total Books", value: 0, icon: FaBook, bgColor: "#4299E1" },
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError("");

      // const token = localStorage.getItem("adminToken");
      // if (!token || token !== "dummy-admin-token") {
      //   setError("Unauthorized: Please login first.");
      //   localStorage.removeItem("adminToken");
      //   navigate("/login");
      //   return;
      // }
   
    const token = localStorage.getItem("adminToken");

      try {
        const response = await fetch("http://localhost:5000/api/admin/dashboard-stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Unauthorized or failed to fetch stats");
        }

        const data = await response.json();
        setStats([
          { title: "Total Users", value: data.usersCount, icon: FaUser, bgColor: "#5A67D8" },
          { title: "Total Courses", value: data.coursesCount, icon: FaChalkboardTeacher, bgColor: "#48BB78" },
          { title: "Total Books", value: data.booksCount, icon: FaBook, bgColor: "#4299E1" },
        ]);
      } catch (err) {
        setError(err.message);
        // localStorage.removeItem("adminToken");
        // navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [navigate]);

  return (
    <div style={{ padding: "24px", backgroundColor: "#F7FAFC", minHeight: "100vh" }}>
      <div style={{
        fontSize: "2.5rem",
        fontWeight: "700",
        color: "#2D3748",
        marginBottom: "32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span>Admin Dashboard</span>
        {/* <button onClick={handleLogout} style={{
          backgroundColor: "#E53E3E",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "1rem",
        }}>
          <FaSignOutAlt />
          Logout
        </button> */}
      </div>

      {loading && <p style={{ color: "#4a5568", textAlign: "center" }}>Loading stats...</p>}
      {error && <p style={{ color: "#c53030", textAlign: "center" }}>{error}</p>}

      {!loading && !error && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {stats.map(({ title, value, icon: Icon, bgColor }) => (
            <Card key={title} title={title} value={value} Icon={Icon} bgColor={bgColor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
