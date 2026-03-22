import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Lunch Special",
  description:
    "Enjoy our $14 lunch specials at Caravan Restaurant in Staten Island, NY. Available Monday through Friday, includes soup, main course, and a drink.",
};

export default function LunchSpecialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-64 items-end overflow-hidden sm:h-80">
        <Image
          src="/images/food/short-ribs-he.jpg"
          alt="Caravan Lunch Special"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <Container className="relative z-10 pb-8">
          <h1 className="font-display text-3xl font-light text-white sm:text-4xl">
            Lunch Special
          </h1>
          <p className="mt-2 text-sm text-white/60">
            A complete meal to power your afternoon
          </p>
        </Container>
      </section>

      <div className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-block border-2 border-amber px-6 py-2">
              <span className="font-display text-3xl font-medium text-accent">
                $14
              </span>
            </div>
            <p className="mt-6 text-lg text-muted">
              Grab a friend and come try our daily lunch specials! Delicious,
              fresh, and just the break you need in the middle of your day.
            </p>
            <p className="mt-4 text-sm text-muted">
              Available Monday through Friday. Includes choice of soup, main
              course, and a drink. Customize your lunch to your liking!
            </p>
            <p className="mt-6 text-sm font-medium text-accent">
              Order online and get 10% off!
            </p>
            <div className="mt-8">
              <Button
                href="https://order.caravanstatenisland.com"
                size="lg"
                external
              >
                Order Online
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
