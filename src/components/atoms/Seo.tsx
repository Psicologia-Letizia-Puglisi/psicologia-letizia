import React from 'react';
import { Script } from 'gatsby';
import useSiteMetadata from '../../utilities/useSiteMetadata';
import { ContactsName, phoneNumber } from '../../utilities/siteInfo';

// Types

type ImageDataType = {
  images: {
    fallback: {
      src: string
    }
  }
  width: number
  height: number
}

type SeoProps = {
  description?: string;
  lang?: string;
  title: string;
  children?: React.ReactElement;
  pathname?: string;
  structuredData?: boolean;
  keywords?: string;
  noIndex?: boolean;
  images?: string[];
};

type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>;

type PropertyMetaObj = {
  property: string;
  content: string;
};

type NameMetaObj = {
  name: string;
  content: string;
};

type QueryTypes = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
};


const Seo = ({
  lang = 'it',
  title,
  description,
  pathname,
  children,
  structuredData = false,
  keywords,
  noIndex,
  images = [],
}: SeoProps) => {
  const { metadata, featuredImage } = useSiteMetadata();

  const seo = {
    title: title && pathname != '/' ? title + ' | ' + metadata.title : metadata.title,
    description: description || metadata.description,
    url: `${metadata.siteUrl}${pathname || ``}`,
    image: featuredImage?.childImageSharp?.gatsbyImageData as unknown as ImageDataType,
    keywords: keywords || metadata.keywords,
  };

  const psychologistSchema = {
    // Or 'Physician'
    '@id': `${metadata.siteUrl}#psychologist`,
    name: ContactsName,
    url: metadata.siteUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Piazza Cavour, 14, Palazzo Porto Sollima',
      addressLocality: 'Catania',
      postalCode: '95124',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.5167,
      longitude: 15.0828,
    },
    telephone: phoneNumber,
    image: metadata.siteUrl + seo.image.images.fallback.src,
    priceRange: '€€',
    areaServed: ['Catania', 'Online'],
  };

  const microData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@context': 'https://www.schema.org',
        '@type': 'WebSite',
        url: seo.url,
        name: seo.title,
        description: seo.description,
        image: [metadata.siteUrl + seo.image.images.fallback.src, ...images.map((image) => metadata.siteUrl + image)],
        inLanguage: 'IT',
      },
      psychologistSchema
    ],
  };

  return (
    <>
      <html lang={lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={metadata.siteUrl + seo.image.images.fallback.src} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:locale" content={'it_IT'} />
      <meta property="og:image" content={metadata.siteUrl + seo.image.images.fallback.src} />
      <meta property="og:image:type" content={'image/jpg'} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:image:secure_url" content={metadata.siteUrl + seo.image.images.fallback.src} />
      <meta property="og:image:width" content={`${seo.image.width ?? '1200'}`} />
      <meta property="og:image:height" content={`${seo.image.height ?? '630'}`} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={'website'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={metadata.siteUrl + seo.image.images.fallback.src} />

      <meta name="robots" content="max-image-preview:large" />

      <meta name="geo.region" content="IT-CT" />
      <meta name="geo.placename" content="Catania" />
      <meta name="geo.position" content="37.5167;15.0828" />
      <meta name="ICBM" content="37.5167, 15.0828" />

      {structuredData ? <Script type="application/ld+json">{JSON.stringify(microData)}</Script> : <></>}
      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : <></>}

      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      {children}
    </>
  );
};

export default Seo;
