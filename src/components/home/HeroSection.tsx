import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative -mt-20 flex min-h-[85vh] items-center overflow-hidden pt-20">
      {/* Background image */}
      <Image
        src="/images/food/steak-on-a-grill.jpg"
        alt="Steak grilling at Caravan Restaurant"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          {/* Decorative accent line */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-amber" />
            <span className="font-heading text-xs font-medium tracking-[0.3em] text-amber-light uppercase">
              Staten Island, NY
            </span>
          </div>

          <h1 className="font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to{" "}
            <span className="italic text-amber-light">Caravan</span>
            <br />
            Restaurant & Coffee
          </h1>

          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed font-light text-white/70">
            A Culinary Odyssey Across Continents in the Heart of Staten Island.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/menu/eastern-european" size="lg">
              Explore Our Menus
            </Button>
            <Button
              href="https://order.caravanstatenisland.com"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:border-amber hover:bg-amber hover:text-white"
              external
            >
              Order Online
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
