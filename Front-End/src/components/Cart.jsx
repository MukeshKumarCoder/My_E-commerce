import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <h2 className="text-3xl text-center mt-30">Cart is empty</h2>
      ) : (
        <div className="w-[50%] flex flex-col gap-y-3 rounded-md m-auto border border-[#e6dede] mt-5 p-5 ">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center rounded-md border border-[#e6dede] p-5"
            >
              <div>
                <img src={item.image} alt={item.title} className="w-20" />
              </div>
              <div className="w-[50%]">
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="border border-pink-500 bg-pink-600 py-2 px-3 rounded-md cursor-pointer text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-3">
            <h2 className="text-pink-500 font-bold text-xl">
              Total Amount : <span className="text-black text-base">{total}</span>
            </h2>
            <button
              onClick={() => dispatch(clearCart())}
              className="border border-pink-500 w-fit bg-pink-600 py-2 px-3 rounded-md cursor-pointer text-white"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
