import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { showLoader, hideLoader } from "../features/loader/loaderSlice";
import homeCategoryService, {
  NatProduct,
} from "../services/home-category-service";
import { useAppDispatch } from "./hooks";
import { Utils } from "../utils/utils";
import { useParams } from "react-router-dom";

const useNatProducts = () => {
  const [natProducts, setNatProducts] = useState<NatProduct[]>([]);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const params = useParams();
  const [natProductSelected, setNatProdSelected] = useState<{
    isSelected: boolean;
    natProduct: NatProduct | null;
  }>({ isSelected: false, natProduct: null });

  useEffect(() => {
    const { request, cancel } = homeCategoryService.getAll<NatProduct>();

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        const items = res.data.map((item) => ({
          ...item,
          urlName: Utils.urlFormatter(item.name),
        }));
        const natProduVal = items.find(
          (item) => item.urlName === params?.category
        );
        setNatProdSelected({
          isSelected: !!natProduVal,
          natProduct: natProduVal || null,
        });
        setNatProducts(items);
      })
      .catch((err) => {
        setNatProdSelected({
          isSelected: false,
          natProduct: null,
        });
        if (err instanceof CanceledError) return;

        dispatch(hideLoader());
        setError(err.message);
      });

    return () => cancel();
  }, []);

  return { natProducts, natProductSelected, error };
};

export default useNatProducts;
