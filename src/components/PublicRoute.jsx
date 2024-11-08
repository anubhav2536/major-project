import { Navigate } from "react-router-dom";

const isAthenticated = () => {
	return localStorage.getItem("token") !== null;
};

const PublicRoute = ({ children }) => {
	return isAthenticated() ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
