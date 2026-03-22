import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const cuisines = [
  {
    title: "Central Asian Fusion",
    description:
      "Delight in the diverse tastes of Uzbek and Korean dishes. Experience a culinary blend that celebrates Central Asia, from kebabs to noodle soups.",
    image: "/images/food/lagman.jpg",
    href: "/menu/central-asian",
    cta: "Central Asian Menu",
  },
  {
    title: "European Flavors",
    description:
      "Explore the diverse and savory offerings of Eastern Europe. From hearty stews to flavorful breads, embark on a culinary journey through the region's best.",
    image: "/images/food/beef-stroganoff.jpg",
    href: "/menu/eastern-european",
    cta: "European Menu",
  },
  {
    title: "Appetizers",
    description:
      "Savor our selection of delectable starters, from classic favorites to innovative creations. Perfect for sharing or whetting your appetite before the main course.",
    image: "/images/food/fried-calamari.jpg",
    href: "/menu/appetizers",
    cta: "Appetizers",
  },
  {
    title: "Coffees & Drinks",
    description:
      "Discover our selection of coffee and drinks, the perfect accompaniment to your meal or a pleasant pause in your day.",
    image: "/images/food/chalahah.jpg",
    href: "/menu/coffees-and-drinks",
    cta: "Coffee Menu",
  },
  {
    title: "Lunch Specials",
    description:
      "Grab a friend and come try our daily lunch specials! Delicious, fresh, and just the break you need in the middle of your day.",
    image: "/images/food/short-ribs-he.jpg",
    href: "/lunch-special",
    cta: "Lunch Menu",
  },
  {
    title: "Catering",
    description:
      "From family gatherings to corporate events, make your next occasion special with our unique catering service.",
    image: "/images/food/sushi-rolls-tray.jpg",
    href: "/contact",
    cta: "Catering",
  },
];

export function CuisineCards() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Our Cuisines"
          subtitle="A World of Flavors: From Central Asian Fusion to European Delicacies, Sushi Excellence, Refreshing Beverages, Special Lunches, and Custom Catering Options."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cuisines.map((cuisine) => (
            <article
              key={cuisine.title}
              className="group relative overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cuisine.image}
                  alt={cuisine.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-medium text-foreground">
                  {cuisine.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                  {cuisine.description}
                </p>
                <div className="mt-5">
                  <Button
                    href={cuisine.href}
                    variant="ghost"
                    size="sm"
                    className="px-0 text-accent hover:text-accent-hover"
                  >
                    {cuisine.cta}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M1 7h12M8 2l5 5-5 5" />
                    </svg>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
