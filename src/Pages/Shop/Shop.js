import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "./Product/Product";
import "../Shop/Shop.css";

const Shop = () => {
  // const { products, count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  console.log(searchResult);
  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const ids = Object.keys(storedCart);

    fetch("http://localhost:5000/productsByIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  //search field handle

  const SearchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== " ") {
      const newProducts = products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newProducts);
    } else {
      setSearchResult(products);
    }
  };

  //handle scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <Product
          products={searchTerm.length < 1 ? products : searchResult}
          term={searchTerm}
          searchKeyword={SearchHandler}
          handleAddToCart={handleAddToCart}
        />
      </div>
      {/* <div className="grid justify-items-center grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8 py-8 px-5">
        {products.map((product) => (
          <Product
            key={product._id}
            product={searchTerm.length < 1 ? product : searchResult}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div> */}
      {/* <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/orders">
            <button>Review Order</button>
          </Link>
        </Cart>
      </div> */}
      <div className="pagination">
        {[...Array(pages).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            className={page === number ? "selected" : ""}
            key={number}
          >
            {number + 1}
          </button>
        ))}
        <select onChange={(event) => setSize(event.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
