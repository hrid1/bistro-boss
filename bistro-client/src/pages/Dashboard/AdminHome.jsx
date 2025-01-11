import useAuth from "../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <p> Hi Admin {user?.displayName}</p>
    </div>
  );
};

export default AdminHome;
