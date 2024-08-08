import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../state/actions/loaderActions";

const useHtmlContent = (endpoint: string) => {
  const dispatch = useDispatch();
  const [htmlContent, setHtmlContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    dispatch(showLoader());

    apiClient
      .get(endpoint, {
        headers: {
          Accept: "text/html",
        },
        signal: controller.signal,
      })
      .then((res) => {
        dispatch(hideLoader());
        setHtmlContent(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        dispatch(hideLoader());
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { htmlContent, error };
};

export default useHtmlContent;
