import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "The food is absolutely amazing. The Lagman and Lamb Kebab are to die for. Every dish we've tried has been outstanding. This is our favorite restaurant on Staten Island!",
    author: "Alex M.",
    source: "Google Reviews",
    rating: 5,
  },
  {
    quote:
      "A hidden gem! The Korean-Uzbek fusion is unlike anything else in the area. The Kuk Su is authentic and delicious. Great atmosphere and wonderful service.",
    author: "Sarah K.",
    source: "Google Reviews",
    rating: 5,
  },
  {
    quote:
      "Perfect for family dinners. The portions are generous, the food is fresh, and the staff makes you feel at home. The Ribeye Steak is the best I've had!",
    author: "Michael D.",
    source: "Google Reviews",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Voices of Our Guests"
          subtitle="Read what our guests have to say about their experiences at Caravan Restaurant."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="relative border-t-2 border-amber bg-surface p-8"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1 text-amber">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-muted italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="mt-5">
                <p className="text-sm font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted">{testimonial.source}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
