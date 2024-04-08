import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import axios from "axios";
const AllProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://boppotech-admin.github.io/react-task-json.github.io/reactjob.json"
    );
    const data = await res.data;
    setProducts(data);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="flex">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default AllProductPage;
