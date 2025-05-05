import { useEffect, useState } from "react";
import { Category } from "../models/category";
import apiClient, { CanceledError } from "../services/api-client";
import { useParams } from "react-router-dom";

const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [isCatProduct, setIsCatProduct] = useState(false);
  const params = useParams();

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("?gofor=categorylist", { signal: controller.signal })
      .then((res) => {
        if (Array.isArray(res.data)) {
          setCategories(res.data || []);
          const isCatProdVal = res.data.find(
            (item) => item?.url_name === params?.category
          );
          setIsCatProduct(!!isCatProdVal);
        }
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsCatProduct(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { categories, isCatProduct, error };
};

export default useCategory;
