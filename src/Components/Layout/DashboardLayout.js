import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useAdmin from "../../hooks/useAdmin";
import useBuyer from "../../hooks/useBuyer";
import useSeller from "../../hooks/useSeller";
import { AuthContext } from "../../Context/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  console.log(isSeller);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
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
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">Your Activities</Link>
            </li>
            {isBuyer && (
              <li>
                <Link to="/dashboard/my-orders">My Orders</Link>
              </li>
            )}
            {isSeller && (
              <li>
                <Link to="/dashboard/my-products">My Products</Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/dashboard/all-user">All User</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
