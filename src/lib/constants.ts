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
    "https://www.google.com/maps/place/Caravan+Restaurant+%26+Coffee/data=!4m2!3m1!1s0x89c24ee2e50cc7a7:0x21b8973ecf92651a?sa=X&ved=1t:242&hl=en&ictx=111",
  whatsappUrl: "https://wa.me/19173978435",
  cuisines: ["Uzbek", "Korean", "Eastern European", "Central Asian"],
  priceRange: "$$",
  openingHours: [
    { days: "Monday", hours: "Closed" },
    { days: "Tuesday", hours: "Closed" },
    { days: "Wednesday", hours: "Closed" },
    { days: "Thursday", hours: "10:00 AM – 8:00 PM" },
    { days: "Friday", hours: "10:00 AM – 10:00 PM" },
    { days: "Saturday", hours: "10:00 AM – 10:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 8:00 PM" },
  ],
  openingHoursSchema: [
    "Th 10:00-20:00",
    "Fr-Sa 10:00-22:00",
    "Su 10:00-20:00",
  ],
  socialProfiles: {
    google:
      "https://www.google.com/maps/place/Caravan+Restaurant+%26+Coffee/data=!4m2!3m1!1s0x89c24ee2e50cc7a7:0x21b8973ecf92651a",
  },
} as const;

export const MENU_CATEGORIES = [
  {
    name: "Eastern European",
    slug: "eastern-european",
    description: "Classic Eastern European dishes crafted with care and tradition",
    icon: "/images/icons/europe-map.svg",
  },
  {
    name: "Central Asian",
    slug: "central-asian",
    description: "Authentic Uzbek and Korean flavors from the heart of the Silk Road",
    icon: "/images/icons/uzbekistan-map.svg",
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
