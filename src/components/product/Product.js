import React from "react";
import { useStateValue } from "../../contexts/StateProvider";
import "./product.css";

const Product = ({ title, image, rating, price,id }) => {

  const[{basket}, dispatch]=useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price ">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={id}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product__img" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
