import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
