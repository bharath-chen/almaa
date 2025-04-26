import { useEffect, useState } from "react";
import { Blog } from "../models/blog";
import { useAppDispatch } from "./hooks";
import { CanceledError } from "axios";
import { showLoader, hideLoader } from "../features/loader/loaderSlice";
import blogListService from "../services/blog-list-service";
import { getFormattedDate } from "../utils/date-utils";

const useBlogs = () => {
  const [blogList, setBlogList] = useState<Blog[]>([]);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showLoader());

    const { request, cancel } = blogListService.getAll<Blog>();

    request
      .then((res) => {
        const data =
          res.data.map((d) => ({
            ...d,
            published_date: getFormattedDate(d.published_date),
          })) || [];

        setBlogList(data);
        dispatch(hideLoader());
      })
      .catch((err) => {
        dispatch(hideLoader());
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => cancel();
  }, [dispatch]);

  return { blogList, error };
};

export default useBlogs;
