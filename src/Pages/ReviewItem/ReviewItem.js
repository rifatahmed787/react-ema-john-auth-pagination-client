import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../ReviewItem/ReviewItem.css";

const ReviewItem = ({ cart, handleRemoveItem }) => {
  const { id, name, price, quantity, shipping, img } = cart;
  //   let total = 0;
  //   let shipping = 0;
  //   let quantity = 0;
  //   for (const product of cart) {
  //     quantity = quantity + product.quantity;
  //     total = total + product.price * product.quantity;
  //     shipping = shipping + product.shipping;
  //   }
  //   const tax = parseFloat((total * 0.1).toFixed(2));
  //   const grandTotal = total + shipping + tax;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveItem(id)} className="btn-delete">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
