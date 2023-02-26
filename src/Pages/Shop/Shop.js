import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "../Shop/Shop.css";
import Spinner from "../../components/Spinner/Spinner";
import TitleHook from "../../Hooks/TitleHook/TitleHook";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [loading, setLoading] = useState(true);
  TitleHook("Shop");

  useEffect(() => {
    const url = `https://react-ema-john-pagination-server.vercel.app/products?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
        setLoading(false);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  //handle scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //if loading in shop
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="grid justify-items-center grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8 py-8 px-5">
        {products?.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
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
