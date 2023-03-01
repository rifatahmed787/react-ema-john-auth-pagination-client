import { createBrowserRouter } from "react-router-dom";
import Orders from "../Pages/Orders/Orders";
import Shipping from "../Pages/Shipping/Shipping";
import Shop from "../Pages/Shop/Shop";
import Main from "../layouts/Main";
import { productsAndCartLoader } from "../loaders/productsAndCartLoader";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import ForgotPass from "../Pages/Login/ForgotPass";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Cart from "../Pages/Cart/Cart";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../Pages/PaymentSystem/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orders",
        loader: productsAndCartLoader,
        element: <Orders />,
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            <Shipping />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: <Payment />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgotpass",
        element: <ForgotPass />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Profile />,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers />,
      },
    ],
  },
]);
