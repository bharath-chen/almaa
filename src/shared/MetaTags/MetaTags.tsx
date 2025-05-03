import { FC } from "react";
import { Helmet } from "react-helmet-async";

export interface MetaTag {
  mid?: string;
  page_id?: string;
  meta_id?: string;
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
  alt_tags?: string;
  title?: string;
  description?: string;
  url_name?: string;
}

interface MetaTagProps {
  metaTagProps?: MetaTag;
}

const MetaTags: FC<MetaTagProps> = ({ metaTagProps }) => {
  const defaultUrl = "https://www.almaaherbal.com";

  const {
    meta_title,
    meta_description,
    keywords,
    og_title,
    og_desc,
    og_image,
    og_sitename,
    og_type,
    og_url,
    robots,
    title,
    description,
  } = metaTagProps;

  const metaTitle = meta_title ? meta_title : title ? title : null;
  const metaDescription = meta_description
    ? meta_description
    : description
    ? description
    : null;

  return (
    <Helmet>
      {metaTitle && <title>{metaTitle}</title>}
      {metaDescription && <meta name="description" content={metaDescription} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && <meta name="robots" content={robots} />}

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
