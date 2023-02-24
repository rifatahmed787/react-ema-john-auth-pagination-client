import React, { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import png from "../assets/images/User_Avatar_2.png";
import { AuthContext } from "../contexts/UserContext";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div className="dark:bg-[#020e0b]">
      <div>
        <Navbar />
      </div>
      <div className="drawer drawer-mobile ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-orange-200 text-base-content">
            <li>
              {user?.photoURL ? (
                <Link to="/dashboard">
                  <div className="">
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="w-16 h-16 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                    />
                  </div>
                  <h3 className="text-lg dark:text-white">
                    {user?.displayName}
                  </h3>
                </Link>
              ) : (
                <Link to="/dashboard">
                  <div className="">
                    <img
                      src={png}
                      alt=""
                      className="w-16 h-16 mx-auto rounded-full bg-white aspect-square"
                    />
                  </div>
                  <h3 className="text-lg dark:text-white">
                    {user?.displayName}
                  </h3>
                </Link>
              )}
            </li>
            {isAdmin && (
              <>
                <li
                  className={`font-semibold text-white ${
                    location.pathname === "/dashboard/allusers"
                      ? "text-orange-300"
                      : ""
                  }`}
                >
                  <Link className="text-black" to="/dashboard/allusers">
                    All users
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
