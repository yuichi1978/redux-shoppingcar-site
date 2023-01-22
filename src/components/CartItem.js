import React from "react";
import { PlusIcon, MinusIcon } from "../HeroIcons";
import { useDispatch } from "react-redux";
import { removeItems, increase, decrease } from "../features/cart/CartSlice";

const CartItem = ({ id, title, img, price, amount }) => {
  const dispatch = useDispatch()
  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4>{price}円</h4>
        <button onClick={() => dispatch(removeItems(id))} className="remove-btn">削除</button>
      </div>
      <div>
        <button onClick={() => dispatch(increase(id))} className="amount-btn">
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button onClick={() => {
          if(amount === 1) {
            dispatch(removeItems(id));
            return;
          }
          dispatch(decrease(id));
        }} className="amount-btn">
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;