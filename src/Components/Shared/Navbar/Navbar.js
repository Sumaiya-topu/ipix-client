import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            {user?.uid ? (
              <>
                <Link to="/myproducts">My Products</Link>
                <button onClick={handleLogOut}>Sign Out</button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
