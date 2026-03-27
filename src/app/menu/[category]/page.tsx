import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { generateMenuSchema, generateBreadcrumbSchema } from "@/lib/seo";
import {
  getMenuCategoryBySlug,
  getAllMenuCategories,
} from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/client";

interface PageProps {
  params: Promise<{ category: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const categories = await getAllMenuCategories();
  return categories.map((cat) => ({ category: cat.slug.current }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = await getMenuCategoryBySlug(slug);
  if (!cat) return {};

  return {
    title: cat.metaTitle || cat.name,
    description: cat.metaDescription || cat.description,
  };
}

export default async function MenuCategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const cat = await getMenuCategoryBySlug(slug);
  if (!cat) notFound();

  const menuSchema = generateMenuSchema(
    cat.name,
    cat.sections.map((s) => ({
      name: s.name,
      items: s.items
        .filter((i) => i.isAvailable !== false)
        .map((i) => ({
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

  const heroUrl = cat.heroImage
    ? urlFor(cat.heroImage).width(1920).quality(80).url()
    : "/images/food/ribeye-steak-portrait-v2.jpg";

  return (
    <>
      <JsonLd data={menuSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative flex h-64 items-end overflow-hidden sm:h-80">
        <Image
          src={heroUrl}
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
          {cat.sections.map((section) => {
            const availableItems = section.items.filter(
              (i) => i.isAvailable !== false
            );
            if (availableItems.length === 0) return null;

            return (
              <div key={section._id} className="mb-16 last:mb-0">
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
                  {availableItems.map((item) => {
                    const imageUrl = item.image
                      ? urlFor(item.image)
                          .width(600)
                          .height(400)
                          .quality(80)
                          .url()
                      : null;

                    return (
                      <article
                        key={item._id}
                        className="group overflow-hidden border border-cream-dark bg-white transition-shadow hover:shadow-md"
                      >
                        {imageUrl && (
                          <div className="relative aspect-[3/2] overflow-hidden">
                            <Image
                              src={imageUrl}
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
                          {item.description && (
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                              {item.description}
                            </p>
                          )}
                          {item.dietaryFlags && item.dietaryFlags.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {item.dietaryFlags.map((flag) => (
                                <span
                                  key={flag}
                                  className="rounded-full bg-cream px-2 py-0.5 text-[10px] font-medium tracking-wide text-muted uppercase"
                                >
                                  {flag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Container>
      </div>
    </>
  );
}
