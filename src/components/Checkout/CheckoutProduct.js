import React from "react";

import { useStateValue } from "../../StateProvider";

import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout-product">
      <img className="checkout-product__image" src={image} alt="" />
      <div className="checkout-product__info">
        <p className="checkout-product__title">{title}</p>
        <p className="checkout-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkout-product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>x</span>
            ))}
        </p>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
