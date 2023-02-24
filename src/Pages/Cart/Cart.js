import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../contexts/UserContext";

import { getStoredCart } from "../../utilities/fakedb";
import ReviewItem from "../ReviewItem/ReviewItem";
import CartEstimate from "./CartEstimate";

const Cart = () => {
  const { user } = useContext(AuthContext);

  const { data: cartData = [], isLoading } = useQuery({
    queryKey: ["cartData"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/addtocart/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  //handle scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="lg:grid grid-cols-4 gap-4">
      <div className="col-span-3">
        {cartData && cartData.length ? (
          cartData.map((cart) => <ReviewItem cart={cart} key={cart._id} />)
        ) : (
          <h2 className="flex justify-center items-center min-h-screen text-3xl font-bold">
            No Items for Review. Please,{" "}
            <Link className="link ml-1" to="/shop">
              shop more
            </Link>
          </h2>
        )}
      </div>
      <div className="cart-container flex justify-center">
        <CartEstimate cart={cartData}>
          <Link to="/orders">
            <button>Review Order</button>
          </Link>
        </CartEstimate>
      </div>
    </div>
  );
};

export default Cart;
