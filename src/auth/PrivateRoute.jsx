import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("accessToken"); // ✅ check if logged in

    if (!token) {
        return <Navigate to="/admin/login" replace />; // redirect if no token
    }

    return children; // render admin panel if authenticated
};

export default PrivateRoute;
