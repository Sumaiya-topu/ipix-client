import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import logo from "../../../assets/ipix-logo.svg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                {user?.uid ? <Link to="/dashboard">Dashboard</Link> : <></>}
              </li>
            </ul>
          </div>
          <img className="w-10" src={logo} alt="" />
          <Link className="font-bold text-2xl">
            i-<span className="text-rose-500">Pix</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              {user?.uid ? <Link to="/dashboard">Dashboard</Link> : <></>}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <button onClick={handleLogOut}>Sign Out</button>
              <img
                className=" ml-5 w-12 rounded-full "
                src={user.photoURL}
                alt=""
              />
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
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
      </div>
    </div>
  );
};

export default Navbar;
