import { BUSINESS, SITE_URL } from "./constants";

export function generateRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: BUSINESS.name,
    image: `${SITE_URL}/images/branding/og-caravan.png`,
    url: SITE_URL,
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    servesCuisine: BUSINESS.cuisines,
    priceRange: BUSINESS.priceRange,
    acceptsReservations: "True",
    hasMap: BUSINESS.googleMapsUrl,
    menu: `${SITE_URL}/menu/eastern-european`,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateMenuSchema(
  categoryName: string,
  sections: {
    name: string;
    items: { name: string; description: string; price: number }[];
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: categoryName,
    hasMenuSection: sections.map((section) => ({
      "@type": "MenuSection",
      name: section.name,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.toFixed(2),
          priceCurrency: "USD",
        },
      })),
    })),
  };
}

export function generateBlogPostSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/news/${post.slug}`,
    datePublished: post.publishedAt,
    image: post.image || `${SITE_URL}/images/branding/og-caravan.png`,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/branding/logo.svg`,
      },
    },
  };
}
