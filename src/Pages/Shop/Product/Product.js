import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../Product/Product.css";
import { Icon } from "@iconify/react";

const Product = (props) => {
  // const { name, img, seller, price, ratings } = product;

  const inputEl = useRef("");
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  const renderProducts = props.products.map((product) => (
    <div
      key={product._id}
      className="product shadow-2xl transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out dark:text-white"
    >
      <img src={product.img} alt="" />
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
      <button
        onClick={() => props.handleAddToCart(product)}
        className="btn-cart"
      >
        <p className="btn-text py-3 font-bold">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  ));

  return (
    <div>
      <div className="container mt-4 flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="search"
              value={props.term}
              onChange={getSearchTerm}
              ref={inputEl}
              className="h-12 lg:w-96 sm:w-80 pr-8 pl-5 border border-orange-300 shadow-xl rounded-full z-0 focus:shadow focus:outline-none dark:bg-gray-600"
              placeholder="Search"
            />
            <button type="submit" className="absolute top-3 right-3">
              <Icon
                icon="ic:round-search"
                width="32"
                className="text-gray-500"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="grid justify-items-center grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8 py-8 px-5">
        {renderProducts?.length > 0 ? (
          renderProducts
        ) : (
          <h2 className="text-3xl text-red-500">No results match</h2>
        )}
      </div>
    </div>
  );
};

export default Product;
