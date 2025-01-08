import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/common/SectionTitle";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FDBA79",
      cancelButtonColor: "#d33",
      confirmButtonText: `<span class="text-black border-none outline-none">Yes, delete it!</span>`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          //   console.log(res.data.deletedCount);

          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 1200,
            });
          } else {
            Swal.fire({
              title: "Not Deleted!",
              text: "There is an issue !",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  const hanldeUserRole = (user) => {
    console.log("role", user?._id);
    axiosSecure.patch(`users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          title: "Admin Updated!",
          text: "This User Admin Now",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleUserRole = (user) => {
    console.log("role", user?._id);
    axiosSecure.patch(`users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch(); // Ensure refetch is defined in your component
        Swal.fire({
          title: "Admin Updated!",
          text: "This User is now an Admin",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading="Manage All User"
        subheading={"How Many"}
      ></SectionTitle>

      <div className="px-2 my-2">
        {/* <h2>All Users</h2> */}
        <h2 className="text-2xl font-semibold">Total Users: {users.length}</h2>
      </div>

      <section className="">
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-300 text-base-200">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user?.name || "N/A"}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user?.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleUserRole(user)}
                        className="ml-1 hover:scale-105 bg-rose- p-2 rounded-md text-white bg-orange-400/80"
                      >
                        <HiUserGroup />
                      </button>
                    )}
                  </td>
                  <td className="">
                    <button
                      onClick={() => handleDelete(user?._id)}
                      className="ml-1 hover:scale-105 bg-rose-600 p-2 rounded-md text-white"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllUsers;
