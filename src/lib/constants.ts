export const SITE_NAME = "Caravan Restaurant & Coffee";
export const SITE_DESCRIPTION =
  "Discover unique Uzbek, Korean & Eastern European dishes at Caravan Restaurant & Coffee in Staten Island, NY. A culinary odyssey across continents.";
export const SITE_URL = "https://www.caravanstatenisland.com";

export const BUSINESS = {
  name: "Caravan Restaurant & Coffee",
  phone: "(917) 397-8435",
  phoneRaw: "+19173978435",
  email: "info@caravanstatenisland.com",
  address: {
    street: "317 Sand Lane",
    city: "Staten Island",
    state: "NY",
    zip: "10305",
    country: "US",
    full: "317 Sand Lane, Staten Island, NY 10305",
  },
  geo: {
    lat: 40.5922075,
    lng: -74.0703431,
  },
  googleMapsUrl:
    "https://www.google.com/maps/place/Caravan+Restaurant+%26+Coffee/@40.5922075,-74.0703431,17z",
  whatsappUrl: "https://wa.me/19173978435",
  cuisines: ["Uzbek", "Korean", "Eastern European", "Central Asian"],
  priceRange: "$$",
} as const;

export const MENU_CATEGORIES = [
  {
    name: "Eastern European",
    slug: "eastern-european",
    description: "Classic Eastern European dishes with a modern twist",
    icon: "/images/icons/europe-map.svg",
  },
  {
    name: "Central Asian",
    slug: "central-asian",
    description: "Authentic Uzbek and Korean flavors from the Silk Road",
    icon: "/images/icons/uzbekistan-map.svg",
  },
  {
    name: "Appetizers",
    slug: "appetizers",
    description: "Cold and hot starters to begin your meal",
    icon: "/images/icons/catering-table.svg",
  },
  {
    name: "Salads",
    slug: "salads",
    description: "Fresh salads with Korean and Uzbek influences",
    icon: "/images/icons/central-asian-salad.svg",
  },
  {
    name: "Soups & Sides",
    slug: "soups-and-sides",
    description: "Hearty soups and flavorful side dishes",
    icon: "/images/icons/soup.svg",
  },
  {
    name: "Coffees & Drinks",
    slug: "coffees-and-drinks",
    description: "Specialty coffees and refreshing beverages",
    icon: "/images/icons/coffee-cup.svg",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Menus",
    href: "/menu/eastern-european",
    children: [
      ...MENU_CATEGORIES.map((c) => ({
        label: c.name,
        href: `/menu/${c.slug}`,
      })),
      { label: "Lunch Special", href: "/lunch-special" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "News", href: "/news" },
] as const;
