import React, { createContext, useContext, useEffect, useState } from "react";
import cartService from "../Service/cartService";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "./authContext";

const initialState = {
  cartData: [],
  updateCart: () => {},
  emptyCart: () => {},
};

export const CartContext = createContext(initialState);

export const CartWrraper = ({ children }) => {
  const context = useAuthContext();
  const { userData } = context;
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    updateCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.id]);

  const updateCart = (updatedCartList) => {
    if (updatedCartList) {
      setCartData(updatedCartList);
    } else if (userData.id) {
      cartService
        .GetCartItems(userData.id)
        .then((res) => setCartData(res.data.result));
    }
  };
  const emptyCart = () => {
    setCartData([]);
  };
  let value = {
    cartData,
    updateCart,
    emptyCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};