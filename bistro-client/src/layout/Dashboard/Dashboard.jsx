import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import {
  FaBook,
  FaBookmark,
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaHamburger,
  FaHome,
  FaInfoCircle,
  FaMoneyCheckAlt,
  FaShoppingBag,
} from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [data] = useCart();

  // TODO: get admin from the db;
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="flex ">
      {/* side bar */}
      <section className="w-68 bg-orange-300/80 text-black h-screen px-8 py-12 font-cinzil">
        <div className="mb-14">
          <h2 className="text-3xl font-bold">Bistro Boss</h2>
          <p>RESTURANT</p>
        </div>

        <div className="">
          {isAdmin ? (
            // for admin
            <>
              <ul className="font-semibold text-xl uppercase">
                <NavLink
                  className="py-4 w-full  flex items-center gap-2.5"
                  to="/dashboard"
                >
                  <FaHome />
                  Admin Home
                </NavLink>

                <NavLink
                  className="py-4 w-full flex items-center gap-2.5"
                  to="/dashboard/add-items"
                >
                  <MdOutlineRestaurantMenu />
                  Add Items
                </NavLink>

                <NavLink
                  className="py-4 w-full flex items-center gap-2.5"
                  to="/dashboard/manage-items"
                >
                  <FaMoneyCheckAlt />
                  Manage Items
                </NavLink>
                <NavLink
                  className="py-4 w-full flex items-center gap-2.5"
                  to="/dashboard/manage-booking"
                >
                  <FaBook />
                  Manage Booking
                </NavLink>
                <NavLink
                  className="py-4 w-full flex items-center gap-2.5"
                  to="/dashboard/all-users"
                >
                  <HiUserGroup />
                  All User
                </NavLink>
              </ul>
            </>
          ) : (
            // for user
            <>
              <ul className="font-semibold text-xl uppercase">
                <NavLink
                  className="py-4 w-full  flex items-center gap-2.5"
                  to="/dashboard"
                >
                  <FaHome />
                  User Home
                </NavLink>
                <NavLink
                  className="py-4 w-full flex items-center gap-2.5"
                  to="/dashboard/reservation"
                >
                  <FaCalendarAlt />
                  Reservation
                </NavLink>
                <NavLink
                  className="py-4 w-full flex items-center gap-2.5"
                  to="/dashboard/payment-history"
                >
                  <FaMoneyCheckAlt />
                  Payment History
                </NavLink>
                <NavLink
                  className="py-4 w-full gap-2.5 flex items-center"
                  to="/dashboard/cart"
                >
                  <FaCartShopping></FaCartShopping>My Cart ({data?.length})
                </NavLink>
                <NavLink
                  className="py-4 w-full flex items-center gap-2.5"
                  to="/dashboard/add-review"
                >
                  <FaInfoCircle />
                  Add Review
                </NavLink>
                <NavLink
                  className="py-4 w-full flex items-center gap-2.5"
                  to="/dashboard/my-booking"
                >
                  <FaBookmark />
                  My Booking
                </NavLink>
              </ul>
            </>
          )}

          <div className="divider bg-white h-0.5"></div>
          {/* Shared Nav Links */}
          <div className="mt-2">
            <ul className="font-semibold text-xl">
              <NavLink
                className="py-4 w-full  flex items-center gap-2.5"
                to="/"
              >
                <FaHome />
                Home
              </NavLink>

              <NavLink
                className="py-4 w-full flex items-center gap-2.5"
                to="/menu"
              >
                <FaHamburger />
                Menu
              </NavLink>

              <NavLink
                className="py-4 w-full flex items-center gap-2.5"
                to="/shop"
              >
                <FaShoppingBag />
                Shop
              </NavLink>

              <NavLink
                className="py-4 w-full flex items-center gap-2.5"
                to="/contact"
              >
                <FaEnvelopeOpenText />
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </section>
      {/* content */}
      <section className="flex-1 bg-base-100 ">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Dashboard;
