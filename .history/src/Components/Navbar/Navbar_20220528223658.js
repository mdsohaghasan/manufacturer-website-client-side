import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li className="text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="text-white">
        <Link to="/review">Review</Link>
      </li>
      <li className="text-white">
        <Link to="/about">About</Link>
      </li>
      <li className="text-white">
        <Link to="/blog">Blog</Link>
      </li>

      {user ? (
        <li class="nav-link">{user?.displayName}</li>
      ) : (
        <>
          <li className="text-white">
            <Link to="/signIn">SignIn</Link>
          </li>
          <li className="text-white">
            <Link to="/signUp">SignUp</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="normal-case text-white text-2xl font-bold ml-10"
        >
          Car-Manufacturer-APP
        </Link>
      </div>
      <div className="navbar-center bg-prim hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white">{menuItems}</ul>
      </div>
      <div
        className="dropdown dropdown-end navbar-end
            "
      >
        {user && (
          <div>
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-white">
                <Link to="dashboard/myAccount" class="justify-between">
                  {" "}
                  MyAccount{" "}
                </Link>
              </li>

              {user && (
                <li className="text-white">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              )}
              <li className="text-white">
                {user ? (
                  <button
                    className="btn btn-primary text-white"
                    onClick={logout}
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/signIn">SignIn</Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
