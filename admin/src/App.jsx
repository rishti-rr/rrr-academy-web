import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Courses from "./pages/Courses";
import Books from "./pages/Books";
import Login from "./pages/Login"; // Login page
import PrivateAdminRoute from "./components/PrivateAdminRoute"; // Protected route

// Layout: Sidebar + Header + page content wrapper
const Layout = ({ children }) => {
  return (
    <div style={styles.appWrapper}>
      <Sidebar />
      <div style={styles.contentWrapper}>
        <Header />
        <main style={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public login route */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes with layout */}
        <Route
          path="/dashboard"
          element={
            <PrivateAdminRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateAdminRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateAdminRoute>
              <Layout>
                <Users />
              </Layout>
            </PrivateAdminRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <PrivateAdminRoute>
              <Layout>
                <Courses />
              </Layout>
            </PrivateAdminRoute>
          }
        />
        <Route
          path="/books"
          element={
            <PrivateAdminRoute>
              <Layout>
                <Books />
              </Layout>
            </PrivateAdminRoute>
          }
        />

        {/* Catch-all route to redirect unknown paths to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

// Styles
const styles = {
  appWrapper: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#F7FAFC",
  },
  contentWrapper: {
    flex: 1,
    marginLeft: "250px",
    paddingTop: "60px",
    position: "relative",
  },
  mainContent: {
    padding: "20px",
    minHeight: "calc(100vh - 60px)",
    overflowY: "auto",
  },
};
