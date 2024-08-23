import { useEffect, useState } from "react";
import { Address } from "../models/address";
import apiClient, { CanceledError } from "../services/api-client";
import { hideLoader, showLoader } from "../features/loader/loaderSlice";
import { useAppDispatch } from "./hooks";

const useViewAddressess = () => {
  const [addressList, setAddressList] = useState<Address[]>([]);
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();

    const customerDetails = JSON.parse(localStorage.getItem("customerDetails"));
    if (!customerDetails) return;

    dispatch(showLoader());
    apiClient
      .get<Address[]>(
        `?gofor=addresslist&customer_id=${customerDetails.customer_id}`,
        { signal: controller.signal }
      )
      .then((res) => {
        dispatch(hideLoader());
        setAddressList(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        dispatch(hideLoader());
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { addressList, error, setAddressList };
};

export default useViewAddressess;
