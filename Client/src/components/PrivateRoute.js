import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { auth } = useSelector((state) => ({ ...state }));
  return auth && auth.token ? { ...children } : <Navigate to="/" />;
};

export default PrivateRoute;
