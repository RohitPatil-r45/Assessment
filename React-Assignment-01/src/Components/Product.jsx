import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
const Product = ({ product, id, setShowCart, cartItems }) => {
  const { title, quantity, handle, price, description, images } = product;
  const dispatch = useDispatch();
  const cartQty =
    cartItems.length === 0
      ? 0
      : cartItems.find((item) => item.handle === handle)?.quantity;
  const { url } = images.edges[0].node;
  const handleCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    setShowCart(true);
  };
  return (
    <div key={id} className="card">
      <img src={url} alt={title} className="prodImg" />
      <b style={{ textTransform: "uppercase" }}>{title}</b>
      <p>
        {description.length > 150
          ? `${description.slice(0, 150)}...`
          : description}
      </p>
      <div className="flexHor">
        <span className="price">$ {price.amount}</span>
        <button
          type="button"
          className={quantity <= cartQty ? "addBtn noClick" : "addBtn"}
          onClick={handleCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
