import React, { useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import CartProductList from "./CartProductList";

const ProductList = ({ products }) => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <>
      <div className="grid">
        {products.map((product, index) => (
          <Product
            product={product}
            id={index}
            setShowCart={setShowCart}
            cartItems={cartItems}
          />
        ))}
      </div>
      {showCart && <CartProductList setShowCart={setShowCart} />}
    </>
  );
};

export default ProductList;
