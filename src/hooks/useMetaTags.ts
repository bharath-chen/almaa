import { useEffect, useState } from "react";
import metaTagsService from "../services/meta-tags-service";
import { MetaTag } from "../shared/MetaTags/MetaTags";
import { CanceledError } from "../services/api-client";

const useMetaTags = (url = "home") => {
  const [urlName, setUrlName] = useState<string>(url);
  const [metaTag, setMetaTag] = useState<MetaTag | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { request, cancel } = metaTagsService.get<
      MetaTag,
      { url_name: string }
    >({ url_name: urlName });

    request
      .then((res) => {
        if (!res.data) {
          setUrlName("home");
        }
        setMetaTag(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => cancel();
  }, [urlName]);

  return { metaTag, error, urlName };
};

export default useMetaTags;
