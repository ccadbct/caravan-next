import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MENU_CATEGORIES } from "@/lib/constants";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Category Tabs */}
      <nav className="sticky top-14 z-30 border-b border-cream-dark bg-white">
        <Container>
          <div className="scrollbar-hide flex gap-1 overflow-x-auto py-3">
            {MENU_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/menu/${cat.slug}`}
                className="shrink-0 px-4 py-2 text-xs font-medium tracking-wider text-muted uppercase transition-colors hover:text-accent"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/lunch-special"
              className="shrink-0 px-4 py-2 text-xs font-medium tracking-wider text-muted uppercase transition-colors hover:text-accent"
            >
              Lunch Special
            </Link>
          </div>
        </Container>
      </nav>

      {children}
    </>
  );
}
