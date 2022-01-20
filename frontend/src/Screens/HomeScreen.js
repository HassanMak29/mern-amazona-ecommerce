import React, { useEffect, useState } from "react";
import Product from "../components/Product";
// import axios from "axios";
import data from "../data";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="row center">
      {data.products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
