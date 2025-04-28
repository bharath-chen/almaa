import { FC } from "react";
import { Helmet } from "react-helmet-async";

interface MetaTagProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
  image?: string;
}

const MetaTags: FC<MetaTagProps> = ({
  title,
  description,
  keywords,
  canonical,
  robots,
  image,
}) => {
  const defaultUrl = "https://www.almaaherbal.com";

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && <meta name="robots" content={robots} />}

      {/* Open Graph tags */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {canonical && (
        <meta property="og:url" content={canonical || defaultUrl} />
      )}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content="Almaa" />
      <meta property="og:type" content="website" />

      {/* Canonical link */}
      {canonical && <link rel="canonical" href={canonical || defaultUrl} />}
    </Helmet>
  );
};

export default MetaTags;
