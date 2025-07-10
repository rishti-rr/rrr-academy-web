import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaUser, FaChalkboardTeacher, FaBook } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "250px",
    backgroundColor: "#1E293B", // dark gray 

    color: "white",
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
    boxSizing: "border-box",
  };

  const headerStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "30px",
    borderBottom: "1px solid #2D3748",
    paddingBottom: "15px",
  };

  const navStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  const linkStyle = (active) => ({
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "12px 15px",
    borderRadius: "8px",
    textDecoration: "none",
    color: active ? "#63B3ED" : "white",
    backgroundColor: active ? "#2B6CB0" : "transparent",
    fontWeight: active ? "600" : "400",
    cursor: "pointer",
    userSelect: "none",
  });

  return (
    <aside style={sidebarStyle} aria-label="Sidebar navigation">
      <div style={headerStyle}>Admin Panel</div>
      <nav style={navStyle}>
        <Link to="/dashboard" style={linkStyle(isActive("/"))} aria-current={isActive("/") ? "page" : undefined}>
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/users" style={linkStyle(isActive("/users"))} aria-current={isActive("/users") ? "page" : undefined}>
          <FaUser /> Users
        </Link>
        <Link to="/courses" style={linkStyle(isActive("/courses"))} aria-current={isActive("/courses") ? "page" : undefined}>
          <FaChalkboardTeacher /> Courses
        </Link>
        <Link to="/books" style={linkStyle(isActive("/books"))} aria-current={isActive("/books") ? "page" : undefined}>
          <FaBook /> Books
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
