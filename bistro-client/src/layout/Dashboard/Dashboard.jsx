import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const [data] = useCart();
  return (
    <div className="flex ">
      {/* side bar */}
      <section className="w-64 bg-orange-300/80 text-black h-screen px-8 py-12 font-cinzil">
        <div className="mb-14">
          <h2 className="text-3xl font-bold">Bistro Boss</h2>
          <p>RESTURANT</p>
        </div>

        <div className="">
          <ul className="font-semibold text-xl">
            <NavLink className="py-4 w-full block" to="/dashboard">
              Admin Home
            </NavLink>

            <NavLink className="py-4 w-full block" to="/dashboard/menu">
              Menu
            </NavLink>

            <NavLink className="py-4 w-full block" to="/dashboard/order">
              Orders
            </NavLink>

            <NavLink
              className="py-4 w-full gap-2 flex items-center"
              to="/dashboard/cart"
            >
              <FaCartShopping></FaCartShopping> Cart ({data?.length})
            </NavLink>
          </ul>
          <hr className="my-4" />
          <div className="mt-2">
            <ul className="font-semibold text-xl">
              <NavLink className="py-4 w-full block" to="/">
                Home
              </NavLink>

              <NavLink className="py-4 w-full block" to="/shop">
                Shop
              </NavLink>

              <NavLink className="py-4 w-full block" to="/manage-booking">
                Manage Booking
              </NavLink>

              <NavLink className="py-4 w-full block" to="/contact">
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </section>
      {/* content */}
      <section className="flex-1 bg-gray-100 ">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Dashboard;
