import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const RecommendedItems = ({ tags }) => {
  const { products, cartItems, total } = useSelector((store) => store.cart);
  const Items = products.filter((prod) => prod.tags.includes(tags[0]));
  const dispatch = useDispatch();
  return (
    <div className="recommended">
      <span>Recommended Items</span>
      <div className="recItems">
        {Items.slice(0, 5).map((item) => {
          const { title, quantity, handle, price, description, images } = item;
          const cartQty =
            cartItems.length === 0
              ? 0
              : cartItems.find((item) => item.handle === handle)?.quantity;
          const { url } = images.edges[0].node;
          return (
            <div key={handle} className="recProd">
              <img src={url} alt={title} width={"150px"} height={"150px"} />
              <b>{title}</b>
              <span>$ {price.amount}</span>
              <br />
              <button
                type="button"
                className={
                  quantity <= cartQty ? "addRecBtn noClick" : "addRecBtn"
                }
                onClick={() => dispatch(addToCart(item))}
              >
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
      <span style={{ marginTop: "1rem" }}>All Products</span>
      <div className="recItems">
        {products.slice(0, 5).map((item) => {
          const { title, quantity, handle, price, description, images } = item;
          const cartQty =
            cartItems.length === 0
              ? 0
              : cartItems.find((item) => item.handle === handle)?.quantity;
          const { url } = images.edges[0].node;
          return (
            <div key={handle} className="recProd">
              <img src={url} alt={title} width={"150px"} height={"150px"} />
              <b>{title}</b>
              <span>$ {price.amount}</span>
              <br />
              <button
                type="button"
                className={
                  quantity <= cartQty ? "addRecBtn noClick" : "addRecBtn"
                }
                onClick={() => dispatch(addToCart(item))}
              >
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedItems;
