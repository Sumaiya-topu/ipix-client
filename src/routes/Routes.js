import AddProduct from "../Components/AddProduct/AddProduct";
import DashboardLayout from "../Components/Layout/DashboardLayout";
import Main from "../Components/Layout/Main/Main";
import AllSellers from "../Components/Pages/AllSellers/AllSellers";
import Blog from "../Components/Pages/Blog/Blog";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import MyOrders from "../Components/Pages/MyOrders/MyOrders";
import MyProducts from "../Components/Pages/MyProducts/MyProducts/MyProducts";
import Products from "../Components/Pages/Products/Products";
import SignUp from "../Components/Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp> </SignUp>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },

      {
        path: "/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/categories/:id/products",
        element: <Products></Products>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/all-sellers",
        element: <AllSellers></AllSellers>,
      },
    ],
  },
]);

export default router;
