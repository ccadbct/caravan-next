import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center">
      <Container className="text-center">
        <p className="font-display text-8xl font-light text-amber">404</p>
        <h1 className="mt-4 font-display text-2xl font-light">
          Page Not Found
        </h1>
        <p className="mt-2 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/">Return Home</Button>
        </div>
      </Container>
    </section>
  );
}
