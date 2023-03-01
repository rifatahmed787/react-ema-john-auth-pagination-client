import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

const Payment = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-[#149777] text-center py-5 text-3xl font-semibold font-serif">
        Pay to confirm your order
      </h2>
      <p className="text-center dark:text-white"></p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
