import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover our unique Korean & Uzbek dishes. Learn more about our family-friendly dining at Caravan Restaurant & Coffee in Staten Island, NY.",
};

const highlights = [
  {
    icon: "/images/icons/uzbekistan-map.svg",
    title: "Central Asian Heritage",
    description:
      "Our roots trace back to the vibrant bazaars of Uzbekistan, where the aromas of plov, kebabs, and freshly baked bread fill the air.",
  },
  {
    icon: "/images/icons/korea-icon.svg",
    title: "Korean Influence",
    description:
      "The Korean culinary tradition runs deep in our family, bringing dishes like Kuk Su and Pyagodya that you won't find anywhere else on the Island.",
  },
  {
    icon: "/images/icons/europe-map.svg",
    title: "Eastern European Flair",
    description:
      "From hearty stroganoffs to perfectly grilled steaks, we honor the comforting traditions of Eastern European cuisine.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <Image
          src="/images/food/interior-of-caravan-restaurant.jpg"
          alt="Inside Caravan Restaurant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <Container className="relative z-10 py-24">
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-amber" />
              <span className="text-xs font-medium tracking-[0.3em] text-amber-light uppercase">
                Our Story
              </span>
            </div>
            <h1 className="font-display text-4xl font-light text-white sm:text-5xl">
              Uniting Cultures Through Flavor
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              A family-owned restaurant celebrating the culinary traditions of
              the Silk Road — where Korean, Uzbek, and Eastern European flavors
              come together.
            </p>
          </div>
        </Container>
      </section>

      {/* Heritage Grid */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="Three Culinary Traditions"
            subtitle="Each dish at Caravan tells a story of cultural exchange, family recipes, and the timeless connection of the Silk Road."
          />

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-surface">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="opacity-70"
                  />
                </div>
                <h3 className="font-display text-xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Unique Dishes */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-light sm:text-4xl">
                Unique Dishes You Won&apos;t Find Anywhere Else
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                Experience the taste of Central Asian Korean cuisine, right here
                on Staten Island. With exclusive dishes crafted from family
                recipes, our menu promises a dining adventure that&apos;s
                unparalleled on the Island.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Indulge in our expertly crafted coffee beverages, from classic
                espresso-based drinks to unique specialties. Our skilled
                baristas use premium beans to create the perfect cup.
              </p>
              <div className="mt-8">
                <Button href="/menu/central-asian">Explore Our Menu</Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/food/kuk-su.jpg"
                alt="Kuk Su - Korean-Uzbek noodle soup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-warm-black py-16 text-center">
        <Container>
          <h2 className="font-display text-2xl font-light text-white sm:text-3xl">
            Celebrate Life&apos;s Special Moments With Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            From private parties to corporate dining, we provide the perfect
            setting to make your event truly memorable.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get In Touch</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
