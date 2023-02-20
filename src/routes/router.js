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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
