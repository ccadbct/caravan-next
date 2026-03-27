import { BUSINESS, SITE_URL, SITE_NAME } from "./constants";

export function generateRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: BUSINESS.name,
    alternateName: "Caravan Staten Island",
    description:
      "Family-owned restaurant in Staten Island serving authentic Uzbek, Korean, and Eastern European cuisine. Unique dishes like Kuk Su and Pyagodya you won't find anywhere else on the Island.",
    image: [
      `${SITE_URL}/images/branding/og-caravan.png`,
      `${SITE_URL}/images/food/interior-of-caravan-restaurant.jpg`,
      `${SITE_URL}/images/food/ribeye-steak-portrait-v2.jpg`,
    ],
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
    areaServed: [
      {
        "@type": "City",
        name: "Staten Island",
        containedInPlace: {
          "@type": "State",
          name: "New York",
        },
      },
      {
        "@type": "Place",
        name: "South Beach, Staten Island",
      },
      {
        "@type": "Place",
        name: "Midland Beach, Staten Island",
      },
    ],
    servesCuisine: BUSINESS.cuisines,
    priceRange: BUSINESS.priceRange,
    acceptsReservations: "True",
    hasMap: BUSINESS.googleMapsUrl,
    menu: `${SITE_URL}/menu/eastern-european`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Sunday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "USD",
    sameAs: [BUSINESS.socialProfiles.google],
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: BUSINESS.whatsappUrl,
        actionPlatform: "https://schema.org/MobileWebPlatform",
      },
      deliveryMethod: {
        "@type": "DeliveryMethod",
        name: "WhatsApp Order",
      },
    },
    founder: {
      "@type": "Organization",
      name: "Caravan Restaurant & Coffee",
    },
    keywords:
      "Uzbek restaurant Staten Island, Korean food Staten Island, Eastern European cuisine NYC, Kuk Su, Pyagodya, Plov, kebab Staten Island, family restaurant Staten Island",
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": `${SITE_URL}/#foodestablishment`,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phoneRaw,
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Sunday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "10:00",
        closes: "22:00",
      },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#restaurant`,
    },
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
    mainEntityOfPage: {
      "@type": "Restaurant",
      "@id": `${SITE_URL}/#restaurant`,
    },
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
      "@id": `${SITE_URL}/#restaurant`,
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

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What type of cuisine does Caravan Restaurant serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Caravan Restaurant serves a unique fusion of Uzbek, Korean, and Eastern European cuisines. Our menu features exclusive dishes like Kuk Su (Korean-Uzbek cold noodle soup) and Pyagodya (Korean-Uzbek steamed dumplings) that you won't find anywhere else on Staten Island.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Caravan Restaurant located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Caravan Restaurant & Coffee is located at ${BUSINESS.address.full}. We're in the South Beach area of Staten Island, easily accessible from all parts of the borough.`,
        },
      },
      {
        "@type": "Question",
        name: "What are Caravan Restaurant's hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We're open Thursday and Sunday from 10:00 AM to 8:00 PM, and Friday through Saturday from 10:00 AM to 10:00 PM. We are closed Monday, Tuesday, and Wednesday.",
        },
      },
      {
        "@type": "Question",
        name: "Does Caravan Restaurant take reservations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, Caravan Restaurant accepts reservations. You can reach us by phone at ${BUSINESS.phone} or via WhatsApp to book a table.`,
        },
      },
      {
        "@type": "Question",
        name: "Does Caravan offer a lunch special?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer a $14 lunch special that includes a selection of our most popular dishes. Check our Lunch Special page for the current offerings.",
        },
      },
    ],
  };
}
