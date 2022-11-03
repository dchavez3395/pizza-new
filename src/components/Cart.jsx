import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  setCloseCart,
  setClearCartItems,
  setGetTotals,
  selectTotalAmount,
  selectTotalQTY
} from "../app/CartSlice.js";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount)
  const totalQTY = useSelector(selectTotalQTY)


  useEffect(() => {
    dispatch(setGetTotals())
  }, [cartItems, dispatch])



  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  }

  return (
    <>
      <div
        className={`w-full h-screen fixed top-0 left-0 right-0 bottom-0 blur-effect-theme opaciity-100 z-[200] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div className="absolute h-screen max-w-xl w-full right-0 blur-effect-theme bg-white">
          <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <>
              <div className="flex items-start py-1 justify-start flex-col gap-y-1 overflow-y-scroll h-[84vh] scroll-smooth scroll-hidden">
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
              <div className='fixed bottom-0 grid items-center w-full max-w-xl bg-white px-5 py-2 '>
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    Subtotal
                  </h1>
                  <h1 className="text-md font-bold ">${totalAmount}</h1>
                </div>

                <div className="items-center grid gap-2">
                  <p className="text-sm font-medium text-center">
                    Taxes and Delivery will be calculated at checkout.
                  </p>
                  <button
                    type="button"
                    className="text-white bg-[#d1411e] rounded button-theme"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
