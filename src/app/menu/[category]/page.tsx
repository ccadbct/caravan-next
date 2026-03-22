import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { generateMenuSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { getMenuCategory, getAllMenuSlugs } from "@/lib/menu-data";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllMenuSlugs().map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = getMenuCategory(slug);
  if (!cat) return {};

  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
  };
}

export default async function MenuCategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const cat = getMenuCategory(slug);
  if (!cat) notFound();

  const menuSchema = generateMenuSchema(
    cat.name,
    cat.sections.map((s) => ({
      name: s.name,
      items: s.items.map((i) => ({
        name: i.name,
        description: i.description,
        price: i.price,
      })),
    }))
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Menu", url: "/menu/eastern-european" },
    { name: cat.name, url: `/menu/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={menuSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative flex h-64 items-end overflow-hidden sm:h-80">
        <Image
          src={cat.heroImage}
          alt={cat.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <Container className="relative z-10 pb-8">
          <h1 className="font-display text-3xl font-light text-white sm:text-4xl">
            {cat.name}
          </h1>
          <p className="mt-2 max-w-lg text-sm text-white/60">
            {cat.description}
          </p>
        </Container>
      </section>

      {/* Menu Sections */}
      <div className="py-12 lg:py-16">
        <Container>
          {cat.sections.map((section) => (
            <div key={section.name} className="mb-16 last:mb-0">
              <div className="mb-8">
                <h2 className="font-display text-2xl font-light">
                  {section.name}
                </h2>
                {section.tagline && (
                  <p className="mt-1 text-sm text-muted italic">
                    {section.tagline}
                  </p>
                )}
                <div className="mt-3 h-px w-12 bg-amber" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <article
                    key={item.name}
                    className="group overflow-hidden border border-cream-dark bg-white transition-shadow hover:shadow-md"
                  >
                    {item.image && (
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-base font-medium">
                          {item.name}
                        </h3>
                        <span className="shrink-0 font-heading text-sm font-semibold text-accent">
                          ${item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
}
