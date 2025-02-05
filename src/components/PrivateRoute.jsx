import React from "react";
import { Navigate } from "react-router-dom";
const isAthenticated = () => {
	return localStorage.getItem("token") !== null;
};

const PrivateRoute = ({ children }) => {
	return isAthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
