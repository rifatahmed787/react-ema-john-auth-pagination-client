import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventory/Inventory";
import Orders from "../components/Orders/Orders";
import Shipping from "../components/Shipping/Shipping";
import Shop from "../components/Shop/Shop";
import Main from "../layouts/Main";
import { productsAndCartLoader } from "../loaders/productsAndCartLoader";
import ForgotPass from "../Pages/Login/ForgotPass";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/orders",
        loader: productsAndCartLoader,
        element: <Orders />,
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
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
        path: "/about",
        element: <About />,
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
]);
