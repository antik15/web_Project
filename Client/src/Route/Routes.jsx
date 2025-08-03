// router.jsx
import { createBrowserRouter } from "react-router-dom";

// Layout
import Main from "../layout/main";

// Home Pages
import Home from "../Home/home";
import About from "../Home/About";
import Features from "../Features/Features";
import Blog from "../Blog/Blog";
import BlogDetail from "../Blog/BlogDetail";

// UI Components
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";

// Auth
import Login from "../Components/Login/Login";
import Signup from "../Components/Login/SignUp";

// Profiles & Dashboards
import PatientProfile from "../Components/Profile/PatientProfile";
import PatientDashboard from "../Components/Dashboard/PatientDashboard";
import DoctorDashboard from "../Components/Dashboard/DoctorDashboard";
import AdminDashboard from "../Components/Dashboard/AdminDashboard";

// Appointment & Invoice
import DoctorAppSystem from "../Components/Appointment/DoctorAppSystem";
import DoctorDetails from "../Components/Appointment/DoctorDetails";
import AppointmentList from "../Components/Appointment/AppointmentList";
import InvoiceList from "../Components/Invoice/InvoiceList";

// Doctor Approval
import DoctorApprovalForm from "../Components/DoctorApproval/DoctorApprovalForm";
import DoctorApprovalManager from "../Components/Admin/DoctorApprovalManager";

// Route Guard
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/features", element: <Features /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <BlogDetail /> },

      // UI Pages (optional demo routes)
      { path: "/footer", element: <Footer /> },
      { path: "/navbar", element: <NavBar /> },

      // Authentication
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },

      // Profile
      { path: "/patient-profile", element: <PatientProfile /> },

      // Appointment System
      { path: "/doctor-appointment", element: <DoctorAppSystem /> },
      { path: "/doctor/:id", element: <DoctorDetails /> },

      // Protected Routes
      {
        path: "/appointments",
        element: (
          <ProtectedRoute requiredRoles={["patient", "doctor"]}>
            <AppointmentList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/invoices",
        element: (
          <ProtectedRoute requiredRoles={["patient", "doctor"]}>
            <InvoiceList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/doctor-approval",
        element: (
          <ProtectedRoute requiredRoles={["patient"]}>
            <DoctorApprovalForm />
          </ProtectedRoute>
        ),
      },

      // Dashboards
      {
        path: "/patient/dashboard",
        element: (
          <ProtectedRoute requiredRoles={["patient"]}>
            <PatientDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/doctor/dashboard",
        element: (
          <ProtectedRoute requiredRoles={["doctor"]}>
            <DoctorDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/dashboard",
        element: (
          <ProtectedRoute requiredRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/doctor-approvals",
        element: (
          <ProtectedRoute requiredRoles={["admin"]}>
            <DoctorApprovalManager />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
