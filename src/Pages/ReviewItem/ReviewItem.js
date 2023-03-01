import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../ReviewItem/ReviewItem.css";

const ReviewItem = ({ cart, handleRemoveItem }) => {
  const { name, price, quantity, shipping, img, _id } = cart;

  return (
    <div className="flex justify-center items-center py-3">
      <div className="review-item lg:flex border border-[#95A0A7] rounded-md w-[571px] mx-5 p-2">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="review-details-container pl-3">
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
            <button
              className="btn-delete"
              onClick={() => handleRemoveItem(_id)}
            >
              <FontAwesomeIcon
                className="delete-icon"
                icon={faTrashAlt}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
