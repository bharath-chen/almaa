import { FC } from "react";
import { Helmet } from "react-helmet-async";

export interface MetaTag {
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  og_title?: string;
  og_desc?: string;
  og_image?: string;
  og_sitename?: string;
  og_type?: string;
  og_url?: string;
  robots?: string;
}

interface MetaTagProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
  image?: string;
  metaTagProps?: MetaTag;
}

const MetaTags: FC<MetaTagProps> = ({ metaTagProps }) => {
  const defaultUrl = "https://www.almaaherbal.com";

  const {
    meta_title,
    meta_description,
    keywords: kws,
    og_title,
    og_desc,
    og_image,
    og_sitename,
    og_type,
    og_url,
    robots: rbts,
  } = metaTagProps;

  return (
    <Helmet>
      {meta_title && <title>{meta_title}</title>}
      {meta_description && (
        <meta name="description" content={meta_description} />
      )}
      {kws && <meta name="keywords" content={kws} />}
      {rbts && <meta name="robots" content={rbts} />}

      {/* Open Graph tags */}
      {og_title && <meta property="og:title" content={og_title} />}
      {og_desc && <meta property="og:description" content={og_desc} />}
      {og_url && <meta property="og:url" content={og_url || defaultUrl} />}
      {og_image && <meta property="og:image" content={og_image} />}
      {og_sitename && <meta property="og:site_name" content={og_sitename} />}
      {og_type && <meta property="og:type" content={og_type} />}

      {/* Canonical link */}
      {og_url && <link rel="canonical" href={og_url || defaultUrl} />}
    </Helmet>
  );
};

export default MetaTags;
