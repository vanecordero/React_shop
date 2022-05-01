import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { OrderItem } from "@components/OrderItem";
import "@styles/MyOrder.scss";
import flechita from "@icons/flechita.svg";

export const MyOrder = ({ hide }) => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acumulator, currentVal) => acumulator + currentVal.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img
          className="order-arrow"
          src={flechita}
          alt="arrow"
          onClick={hide}
        />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((item, i) => (
          <OrderItem key={`orderItem-${item.id}-${i}`} product={item} />
        ))}

        <div className="buy-contianer">
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <button className="primary-button">Checkout</button>
        </div>
      </div>
    </aside>
  );
};
