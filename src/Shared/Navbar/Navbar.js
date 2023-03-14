import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 border-b-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link>Install</Link>
              </li>
              <li>
                <Link>For Webmasters</Link>
              </li>
              <li>
                <Link>Help</Link>
              </li>
            </ul>
          </div>
          <Link className="text-xl pl-20 ">FreeBug</Link>
        </div>
        <div className="navbar-center hidden lg:flex text-2xl">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Install</Link>
            </li>
            <li>
              <Link>For Webmasters</Link>
            </li>
            <li>
              <Link>Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
