import Image from "next/image";
import { Container } from "@/components/ui/Container";

const features = [
  {
    icon: "/images/icons/wordly-flavors.svg",
    title: "Worldly Flavors",
    description:
      "A Culinary Odyssey Across Continents in the Heart of Staten Island.",
  },
  {
    icon: "/images/icons/exquisite-coffee.svg",
    title: "Exquisite Coffee",
    description:
      "Indulge in expertly crafted coffee and specialty drinks that complement your meal.",
  },
  {
    icon: "/images/icons/community-love.svg",
    title: "Community Love",
    description:
      "A cherished local favorite that celebrates cultural connections and community.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="opacity-80"
                />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
