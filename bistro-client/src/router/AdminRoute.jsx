import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Spiner from "../components/Spiner";

const AdminRoute = ({ children }) => {
  const {user, loading} = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) return <Spiner />;

  if (user && isAdmin) {
    return <div>{children}</div>;
  }

  return <Navigate state={location?.pathname} to="/login" />;
};

export default AdminRoute;
