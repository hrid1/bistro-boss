import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    queryKey: "admin-stats",
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(data);
  const { menuItems, orders, revenue, users } = data || {};
  return (
    <div>
      <h2 className="text-4xl text-center mt-4 font-semibold"> Hi, Admin {user?.displayName}</h2>

      <section>
        <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center md:border-x">
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                {revenue}
              </h6>
              <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Revenue
              </p>
            </div>
            <div className="text-center md:border-x">
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              {users}
              </h6>
              <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
               Customars
              </p>
            </div>
            <div className="text-center md:border-x">
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                {menuItems}
              </h6>
              <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Products
              </p>
            </div>
            <div className="text-center md:border-x">
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                {orders}
              </h6>
              <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Order
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHome;
