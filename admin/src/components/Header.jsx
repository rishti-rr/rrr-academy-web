import React, { useState, useRef, useEffect } from "react";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target.id !== "profileBtn"
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const user = {
    name: "Rishti Rahman Rafin",
    email: "rishti.rr.300102@gmail.com",
    avatar:
      "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  };

  const logout = () => {
    // Clear auth or user data from localStorage/sessionStorage if any
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    // Redirect to login page (change URL as per your routing)
    window.location.href = "/login";
  };

  const styles = {
    header: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "15px 15px",
      backgroundColor: "#1E293B",
      color: "#F9FAFB",
      position: "relative",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      userSelect: "none",
      marginTop: "-70px",
    },
    profileBtn: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "600",
      padding: "5px",
    },
    avatar: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 0 5px rgba(0,0,0,0.5)",
      border: "2px solid #fff",
      //  pointerEvents: "auto",
    },
    dropdown: {
      position: "absolute",
      top: "60px",
      right: "30px",
      width: "280px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      padding: "20px",
      color: "#333",
      fontSize: "15px",
      zIndex: 9999,
      transition: "opacity 0.3s ease, transform 0.3s ease",
      opacity: showDropdown ? 1 : 0,
      transform: showDropdown ? "translateY(0)" : "translateY(-10px)",
      pointerEvents: showDropdown ? "auto" : "none",
    },
    userInfo: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
      gap: "15px",
    },
    userName: {
      fontWeight: "700",
      fontSize: "18px",
      margin: 0,
      color: "#222",
    },
    userEmail: {
      margin: 0,
      color: "#666",
      fontSize: "13px",
      fontStyle: "italic",
    },
    optionList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    optionItem: {
      padding: "12px 10px",
      cursor: "pointer",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "#444",
      fontWeight: "600",
      userSelect: "none",
      transition: "background-color 0.2s ease",
    },
    optionItemHover: {
      backgroundColor: "#f0f0f0",
    },
    logoutItem: {
      color: "#d93025",
      fontWeight: "700",
    },
    icon: {
      fontSize: "18px",
    },
  };

  const [hoverIndex, setHoverIndex] = useState(null);

  const options = [
    { label: "Profile", icon: "👤", onClick: () => alert("Go to Profile") },
    { label: "Settings", icon: "⚙️", onClick: () => alert("Open Settings") },
    { label: "My Orders", icon: "🛒", onClick: () => alert("Show Orders") },
    { label: "Help Center", icon: "❓", onClick: () => alert("Help Center") },
    {
      label: "Logout",
      icon: "🚪",
      onClick: logout,
      isLogout: true,
    },
  ];

  return (
    <header style={styles.header}>
      <button
        id="profileBtn"
        style={styles.profileBtn}
        onClick={() => 
          setShowDropdown((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={showDropdown}
      >
        <span><img src={user.avatar} alt="User Avatar" style={styles.avatar} /></span>
        <span>{user.name}</span>
      </button>

      <div ref={dropdownRef} style={styles.dropdown} role="menu">
        <div style={styles.userInfo}>
          <img src={user.avatar} alt="User Avatar" style={styles.avatar} />
          <div>
            <p style={styles.userName}>{user.name}</p>
            <p style={styles.userEmail}>{user.email}</p>
          </div>
        </div>
        <ul style={styles.optionList}>
          {options.map((opt, idx) => (
            <li
              key={idx}
              role="menuitem"
              onClick={opt.onClick}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{
                ...styles.optionItem,
                ...(hoverIndex === idx ? styles.optionItemHover : {}),
                ...(opt.isLogout ? styles.logoutItem : {}),
              }}
            >
              <span style={styles.icon}>{opt.icon}</span> {opt.label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
