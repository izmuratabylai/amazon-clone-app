import React from "react";
import "./Checkout.css";

import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../contexts/StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";


const Chekout = () => {
  
  const [{ basket, user }, dispatch] = useStateValue();



  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpgz"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title ">Your chopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Chekout;
