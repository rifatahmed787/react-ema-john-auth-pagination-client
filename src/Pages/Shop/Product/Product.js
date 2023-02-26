import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../Product/Product.css";
import { Icon } from "@iconify/react";
import { AuthContext } from "../../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Product = ({ product }) => {
  const { user } = useContext(AuthContext);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (selectedProduct) => {
    const cartProduct = {
      name: product.name,
      price: product.price,
      img: product.img,
      quantity: product.quantity,
      shipping: product.shipping,
      email: user.email,
    };

    fetch("https://react-ema-john-pagination-server.vercel.app/addtocart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added to cart");
          // navigate("/cart");
          setClicked(true);
        }
      });
  };

  return (
    <div>
      <div className="product shadow-2xl transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out dark:text-white">
        <img src={product.img} alt="" className="bg-[#ECEFF1]" />
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <p>Price: ${product.price}</p>
          <p>
            <small>Seller: {product.seller}</small>
          </p>
          <p>
            <small>Ratings: {product.ratings} stars</small>
          </p>
        </div>

        {user?.email ? (
          <button
            disabled={clicked}
            onClick={() => handleAddToCart(product)}
            className="btn-cart"
          >
            <p className="btn-text py-3 font-bold">Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        ) : (
          <Link className="btn-cart" to="/login">
            <p className="btn-text py-3 font-bold">Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Product;
