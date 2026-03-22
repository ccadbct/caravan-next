import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function StorySection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Parallax background */}
      <div className="parallax-bg absolute inset-0">
        <Image
          src="/images/food/silk-road.jpg"
          alt="The Silk Road"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Silk Road Connection */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-amber" />
              <span className="text-xs font-medium tracking-[0.3em] text-amber-light uppercase">
                Our Heritage
              </span>
            </div>
            <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
              The Silk Road Connection
            </h2>
            <p className="mt-6 leading-relaxed text-white/60">
              Rooted in the history of the Silk Road, where cultures met and
              mingled, our Korean-Uzbek heritage inspires the rich tapestry of
              flavors at Caravan Restaurant. Our name pays homage to the
              bustling Caravan bazars of old, a culinary journey that
              transcends borders.
            </p>
          </div>

          {/* Right: Family Owned */}
          <div>
            <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
              Family Owned Fusion
            </h2>
            <p className="mt-6 leading-relaxed text-white/60">
              As a family-owned business, we bring the heart and soul of our
              heritage to every dish. Experience the unique Korean-Uzbek
              fusion, with exclusive dishes like Kuk Su and Pyagodya, only
              found here on the Island.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Image
                src="/images/icons/uzbekistan-icon.svg"
                alt="Uzbekistan"
                width={48}
                height={48}
                className="opacity-60"
              />
              <Image
                src="/images/icons/korea-icon.svg"
                alt="Korea"
                width={48}
                height={48}
                className="opacity-60"
              />
              <Image
                src="/images/icons/europe-map.svg"
                alt="Europe"
                width={48}
                height={48}
                className="opacity-60"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
