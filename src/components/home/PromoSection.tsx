import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function PromoSection() {
  return (
    <section className="relative overflow-hidden bg-amber py-16 lg:py-20">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10 text-center">
        <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
          Save More by Ordering Online
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/80">
          Enjoy 10% off your next pickup or delivery from Caravan Restaurant.
          Exclusive to our online guests — experience a special discount on
          your favorite dishes, including our unique Sushi selection.
        </p>
        <div className="mt-8">
          <Button
            href="https://order.caravanstatenisland.com"
            variant="secondary"
            size="lg"
            external
          >
            Order Online
          </Button>
        </div>
      </Container>
    </section>
  );
}
