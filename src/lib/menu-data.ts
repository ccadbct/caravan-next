/**
 * Static menu data — will be replaced by Sanity CMS queries.
 * Extracted from the Duda export HTML files.
 */

export interface MenuItem {
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface MenuSection {
  name: string;
  tagline?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  name: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  sections: MenuSection[];
}

export const menuData: MenuCategory[] = [
  {
    name: "Eastern European Cuisine",
    slug: "eastern-european",
    description:
      "Classic Eastern European dishes crafted with care and tradition",
    metaTitle: "Eastern European Cuisine Menu",
    metaDescription:
      "Explore our Eastern European menu featuring grilled fish, premium steaks, and traditional dishes. Dine at Caravan Restaurant in Staten Island, NY.",
    heroImage: "/images/food/ribeye-steak-portrait-v2.jpg",
    sections: [
      {
        name: "Fish",
        tagline: "Fresh from the Sea",
        items: [
          {
            name: "Bronzini (Grilled)",
            price: 28,
            description:
              "A prized Mediterranean fish, grilled to perfection with herbs",
            image: "/images/food/salmon-grilled-or-baked.jpg",
          },
          {
            name: "Salmon (Grilled or Baked)",
            price: 22,
            description:
              "Atlantic salmon prepared your way, served with seasonal vegetables",
            image: "/images/food/salmon-grilled-or-baked.jpg",
          },
          {
            name: "South Beach Seafood Platter",
            price: 56,
            description:
              "An impressive selection of the freshest seafood, beautifully presented",
            image: "/images/food/south-beach-seafood-platter.jpg",
          },
          {
            name: "Seafood Pasta",
            price: 28,
            description:
              "Al dente pasta tossed with a medley of fresh seafood in a savory sauce",
            image: "/images/food/seafood-pasta.jpg",
          },
        ],
      },
      {
        name: "Steaks, Meats & Poultry",
        tagline: "Premium Cuts, Perfectly Prepared",
        items: [
          {
            name: "Ribeye Steak 16oz",
            price: 45,
            description: "USDA Prime ribeye, seasoned and grilled to order",
            image: "/images/food/ribeye-steak-portrait-v2.jpg",
          },
          {
            name: "Ribeye Steak 24oz",
            price: 58,
            description:
              "Our signature cut — a generous 24oz USDA Prime ribeye",
            image: "/images/food/ribeye-steak-portrait.jpg",
          },
          {
            name: "Filet Mignon",
            price: 42,
            description:
              "The most tender cut, seared and finished to perfection",
            image: "/images/food/filet-mignon.jpg",
          },
          {
            name: "Skirt Steak",
            price: 28,
            description: "Marinated and grilled, full of bold flavor",
            image: "/images/food/skirt-steak-c6463cee.jpg",
          },
          {
            name: "Short Ribs",
            price: 32,
            description: "Slow-braised until fork-tender, rich and savory",
            image: "/images/food/short-ribs-he.jpg",
          },
          {
            name: "Beef Stroganoff",
            price: 24,
            description:
              "Tender beef in a creamy mushroom sauce, served with egg noodles",
            image: "/images/food/beef-stroganoff.jpg",
          },
          {
            name: "Chicken Stroganoff",
            price: 20,
            description:
              "A lighter take on the classic, with tender chicken in cream sauce",
            image: "/images/food/chicken-stroganoff.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "Central Asian Cuisine",
    slug: "central-asian",
    description:
      "Authentic Uzbek and Korean flavors from the heart of the Silk Road",
    metaTitle: "Central Asian Cuisine Menu",
    metaDescription:
      "Discover authentic Uzbek and Korean dishes at Caravan Restaurant. From Lagman to Lamb Kebab, experience Central Asian flavors in Staten Island, NY.",
    heroImage: "/images/food/lagman.jpg",
    sections: [
      {
        name: "Kebabs & Grills",
        items: [
          {
            name: "Lamb Kebab",
            price: 22,
            description:
              "Tender lamb skewered and grilled over open flame, Uzbek style",
            image: "/images/food/lamb-kebab.jpg",
          },
          {
            name: "Lulya Kebab",
            price: 18,
            description:
              "Ground lamb mixed with herbs and spices, grilled on skewers",
            image: "/images/food/lulya-kebab-v2.jpg",
          },
          {
            name: "Shrimp Kebab",
            price: 24,
            description:
              "Jumbo shrimp marinated and grilled to smoky perfection",
            image: "/images/food/shrimp-kebab.jpg",
          },
        ],
      },
      {
        name: "Noodles & Soups",
        items: [
          {
            name: "Lagman",
            price: 18,
            description:
              "Hand-pulled noodles in a rich, spiced broth with vegetables and tender meat",
            image: "/images/food/lagman.jpg",
          },
          {
            name: "Kuk Su",
            price: 18,
            description:
              "A unique Korean-Uzbek cold noodle soup, exclusive to Caravan — you won't find this anywhere else on the Island",
            image: "/images/food/kuk-su.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "Appetizers",
    slug: "appetizers",
    description: "Cold and hot starters to begin your culinary journey",
    metaTitle: "Appetizers Menu",
    metaDescription:
      "Start your meal with our delicious appetizers at Caravan Restaurant. From Fried Calamari to Beef Tartare, Staten Island, NY.",
    heroImage: "/images/food/fried-calamari.jpg",
    sections: [
      {
        name: "Starters",
        items: [
          {
            name: "Fried Calamari",
            price: 16,
            description: "Lightly breaded and fried to a golden crisp",
            image: "/images/food/fried-calamari.jpg",
          },
          {
            name: "Beef Tartare",
            price: 18,
            description:
              "Fresh, hand-cut beef with classic accompaniments",
            image: "/images/food/beef-tartare.jpg",
          },
          {
            name: "Tuna Tartare",
            price: 20,
            description:
              "Fresh sushi-grade tuna with avocado and sesame",
            image: "/images/food/tuna-tartare.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "Salads",
    slug: "salads",
    description:
      "Fresh salads featuring Korean and Uzbek flavors alongside classic favorites",
    metaTitle: "Salads Menu",
    metaDescription:
      "Fresh and flavorful salads at Caravan Restaurant. From Korean Carrot Salad to Greek Salad, Staten Island, NY.",
    heroImage: "/images/food/arugula-salad.jpg",
    sections: [
      {
        name: "Salads",
        items: [
          {
            name: "Korean Carrot Salad",
            price: 10,
            description: "A tangy, spiced carrot salad in the Korean tradition",
            image: "/images/food/korean-carrot-salad.jpg",
          },
          {
            name: "Korean Eggplant Salad",
            price: 12,
            description: "Tender eggplant with garlic and Korean seasonings",
            image: "/images/food/korean-eggplant-salad.jpg",
          },
          {
            name: "Korean Mushroom Salad",
            price: 12,
            description: "Savory mushrooms in a Korean-style dressing",
            image: "/images/food/korean-mushroom-salad.jpg",
          },
          {
            name: "Achichuk Salad",
            price: 10,
            description:
              "A refreshing Uzbek tomato and onion salad with herbs",
            image: "/images/food/achichuk-salad-1.jpg",
          },
          {
            name: "Tashkent Salad",
            price: 14,
            description: "A hearty salad from the capital of Uzbekistan",
            image: "/images/food/tashkent-salad.jpg",
          },
          {
            name: "Greek Salad",
            price: 14,
            description:
              "Classic Greek salad with feta, olives, and fresh vegetables",
            image: "/images/food/greek-salad.jpg",
          },
          {
            name: "Arugula Salad",
            price: 14,
            description: "Peppery arugula with shaved parmesan and lemon",
            image: "/images/food/arugula-salad.jpg",
          },
          {
            name: "Salmon Salad",
            price: 18,
            description: "Fresh salmon over mixed greens with citrus dressing",
            image: "/images/food/salmon-salad.jpg",
          },
          {
            name: "Avocado Mango Salad",
            price: 16,
            description: "Creamy avocado and sweet mango in a tropical medley",
            image: "/images/food/avocado-mango-salad.jpg",
          },
          {
            name: "Funchoza Salad",
            price: 12,
            description:
              "Glass noodle salad with vegetables in a light sesame dressing",
            image: "/images/food/funchoza-salad.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "Soups & Sides",
    slug: "soups-and-sides",
    description: "Hearty soups and flavorful side dishes",
    metaTitle: "Soups & Sides Menu",
    metaDescription:
      "Warm up with our hearty soups and flavorful side dishes at Caravan Restaurant in Staten Island, NY.",
    heroImage: "/images/food/lagman.jpg",
    sections: [
      {
        name: "Soups & Sides",
        items: [
          {
            name: "Lagman Soup",
            price: 14,
            description: "A warming noodle soup with vegetables and tender meat",
          },
          {
            name: "Mastava",
            price: 12,
            description: "Traditional Uzbek rice soup with herbs",
          },
        ],
      },
    ],
  },
  {
    name: "Coffees & Drinks",
    slug: "coffees-and-drinks",
    description: "Specialty coffees and refreshing beverages",
    metaTitle: "Coffees & Drinks Menu",
    metaDescription:
      "Enjoy expertly crafted coffees and refreshing drinks at Caravan Restaurant & Coffee in Staten Island, NY.",
    heroImage: "/images/food/chalahah.jpg",
    sections: [
      {
        name: "Coffee & Beverages",
        items: [
          {
            name: "Americano",
            price: 4,
            description: "Bold espresso with hot water",
          },
          {
            name: "Latte",
            price: 5.5,
            description: "Smooth espresso with steamed milk",
          },
          {
            name: "Cappuccino",
            price: 5.5,
            description: "Classic espresso with foamed milk",
          },
          {
            name: "Raf Coffee",
            price: 6,
            description:
              "Our signature — espresso blended with cream and vanilla",
          },
          {
            name: "Turkish Coffee",
            price: 5,
            description: "Traditional finely ground coffee, rich and aromatic",
          },
          {
            name: "Chalahah Tea",
            price: 8,
            description: "A traditional Central Asian tea service",
            image: "/images/food/chalahah.jpg",
          },
        ],
      },
    ],
  },
];

export function getMenuCategory(slug: string): MenuCategory | undefined {
  return menuData.find((c) => c.slug === slug);
}

export function getAllMenuSlugs(): string[] {
  return menuData.map((c) => c.slug);
}
