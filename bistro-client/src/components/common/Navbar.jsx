import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [data] = useCart();
  console.log(data);

  console.log(user);
  const handleLogout = () => {
    logoutUser().then((res) => {
      res;
    });
  };
  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          to="/menu"
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          to="/order"
        >
          Order
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed z-20 w-full right-0 left-0 top-0 ">
      <div className="navbar max-w-screen-2xl mx-auto text-white bg-opacity-20 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow text-gray-900"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="relative">
            <span className="text-xl">
              <AiOutlineShoppingCart />
            </span>
            <p className="text-xs absolute -top-2.5 -right-2.5 bg-gray-800/60 text-white rounded-full px-1">
              {data?.length}
            </p>
          </div>
          <div>
            {user ? (
              <button onClick={handleLogout} className="btn btn-ghost">
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="btn btn-ghost">
                Login
              </NavLink>
            )}
          </div>
          <div className="dropdown dropdown-hover tabIndex={0} cursor-pointer">
            {user ? (
              <div className="w-8 h-8 rounded-full overflow-hidden b">
                <img src={user?.photoURL} alt="" />
              </div>
            ) : (
              <div className="mx-2">
                <FaUser></FaUser>
              </div>
            )}
            <ul
              tabIndex={0}
              className="dropdown-content  bg-base-100 w-16 z-[1] right-0 top-10 rounded-sm p-1 shadow"
            >
              <li className="text-black text-sm">
                Hi, {user ? user.displayName : "Guest"}
              </li>
            </ul>
          </div>

          {/* <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              Hover
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
