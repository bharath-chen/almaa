import { useEffect, useState } from "react";
import { CartDetail } from "../models/cartDetail";
import { Product } from "../models/product";
import apiClient, { CanceledError } from "../services/api-client";
import { hideLoader, showLoader } from "../features/loader/loaderSlice";
import { useAppDispatch } from "./hooks";

interface CartDetailPayload {
  cartDetail: CartDetail[];
  productDetail: [Product[]];
}

const useViewCart = () => {
  const dispatch = useAppDispatch();
  const [cartDetails, setCartDetails] = useState<CartDetailPayload>();
  const [error, setError] = useState("");

  const customerDetails = JSON.parse(localStorage.getItem("customerDetails"));

  useEffect(() => {
    const controller = new AbortController();

    dispatch(showLoader());

    apiClient
      .get<CartDetailPayload>(
        `?gofor=viewcart&customer_id=${customerDetails.customer_id}`,
        {
          signal: controller.signal,
        }
      )
      .then((res) => {
        dispatch(hideLoader());
        console.log("Product details:", res.data);
        setCartDetails(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        dispatch(hideLoader());
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { cartDetails, setCartDetails, error };
};

export default useViewCart;
