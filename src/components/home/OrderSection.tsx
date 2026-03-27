import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function OrderSection() {
  return (
    <section className="relative overflow-hidden bg-warm-black py-20 lg:py-28">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/food/interior-of-caravan-restaurant.jpg"
          alt="Caravan Restaurant interior"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="text-xs font-medium tracking-[0.3em] text-amber-light uppercase">
          The easiest way to get our food
        </span>
        <h2 className="mt-4 font-display text-3xl font-light text-white sm:text-4xl lg:text-5xl">
          Order Online
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-white/60">
          Skip the wait — order your favorite Caravan dishes for pickup or
          delivery. Enjoy 10% off your first online order.
        </p>
        <div className="mt-10">
          <Button
            href="https://order.plento.io/restaurant/caravan-restaurant-coffee"
            size="lg"
            external
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
