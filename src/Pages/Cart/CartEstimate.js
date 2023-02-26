import React from "react";

import "../Cart/Cart.css";
const CartEstimate = (props) => {
  const { cart, children, handleClearCart } = props;

  //estimate
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart space-y-3">
      <h4 className="text-3xl font-bold">Order Summary</h4>
      <p className="font-bold">Selected Items: {quantity}</p>
      <p className="font-bold">Total price: ${total}</p>
      <p className="font-bold">Total Shipping: ${shipping}</p>
      <p className="font-bold">Tax: ${tax}</p>
      <h5 className="font-bold">Grand Total: ${grandTotal.toFixed(2)}</h5>
      <button className="font-bold" onClick={props.handleClearCart}>
        Clear Cart
      </button>
      {children}
    </div>
  );
};

export default CartEstimate;
