import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementProduct, incrementProduct } from "../features/cart/cartSlice";
import RecommendedItems from "./RecommendedItems";

const CartProductList = ({ setShowCart }) => {
  const { products, cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const forSortArray = [...cartItems];
  const filterByPrice = forSortArray.sort(
    (a, b) => parseInt(a.price.amount) - parseInt(b.price.amount)
  );
  const tags = Array.from(new Set(cartItems.map((item) => item.tags).flat()));
  return (
    <div className="cartList">
      {cartItems.length === 0 && (
        <div
          className="cartProduct"
          style={{ justifyContent: "center", flexDirection: "column" }}
        >
          <span>No Product Added</span>
          <div className="btnContainer">
            <button
              type="button"
              className="cancelBtn"
              onClick={() => setShowCart(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {filterByPrice.map((item) => {
        const {
          title,
          quantity,
          handle,
          price,
          description,
          images,
          attributes,
        } = item;
        const { url } = images.edges[0].node;
        return (
          <div className="cartProduct">
            <img src={url} alt={title} className="prodCartImg" />
            <div className="details">
              <b style={{ textTransform: "uppercase" }}>{title}</b>
              <div>
                {attributes.map((att) => {
                  return (
                    <div>
                      {att.name}:{att.value}
                    </div>
                  );
                })}
              </div>
              <div className="flexHor">
                <div style={{ display: "flex" }}>
                  <button
                    type="button"
                    className="countBtn"
                    onClick={() => dispatch(decrementProduct(handle))}
                  >
                    -
                  </button>
                  <strong style={{ fontSize: "20px", margin: "0 1rem" }}>
                    {quantity}
                  </strong>
                  <button
                    type="button"
                    className="countBtn"
                    onClick={() => dispatch(incrementProduct(handle))}
                  >
                    +
                  </button>
                </div>
                <span className="price">$ {price.amount}</span>
              </div>
            </div>
          </div>
        );
      })}
      {cartItems.length !== 0 && (
        <>
          <div className="subTotal">
            <span>SubTotal</span>
            <span>$ {total}</span>
          </div>
          <div className="btnContainer">
            <button
              type="button"
              className="checkoutBtn"
              onClick={() => alert("Checkout Page")}
            >
              Check Out
            </button>
            <button
              type="button"
              className="cancelBtn"
              onClick={() => setShowCart(false)}
            >
              Cancel
            </button>
          </div>
          <h4
            style={{
              width: "100%",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Exlpore More
          </h4>
          <RecommendedItems tags={tags} />
        </>
      )}
    </div>
  );
};

export default CartProductList;
