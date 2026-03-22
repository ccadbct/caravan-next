import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { generateBlogPostSchema, generateBreadcrumbSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static blog data — will be replaced with Sanity CMS
const posts: Record<
  string,
  {
    title: string;
    date: string;
    image: string;
    content: string[];
  }
> = {
  "the-rich-history-of-uzbek-plov": {
    title: "The Rich History of Uzbek Plov: More Than Just a Dish",
    date: "2023-10-04",
    image: "/images/food/lagman.jpg",
    content: [
      "Plov, the beloved rice dish of Uzbekistan, is far more than a meal — it's a cultural institution. For centuries, this aromatic combination of rice, meat, carrots, and spices has been at the center of Uzbek social life, from daily family dinners to grand celebrations.",
      "The origins of Plov trace back to the ancient Silk Road, where traders and travelers carried rice cultivation techniques from China through Central Asia. As the dish evolved, each region of Uzbekistan developed its own variation, with Samarkand, Tashkent, and Bukhara each claiming their version as the most authentic.",
      "At Caravan Restaurant, we honor this tradition by preparing our Plov according to family recipes passed down through generations. The key lies in the layering technique — the rice must absorb the rich flavors of the meat and aromatics slowly, creating a dish where every grain tells a story of the Silk Road.",
    ],
  },
  "what-is-korean-uzbek-food": {
    title: "What is Korean-Uzbek Food?",
    date: "2023-08-25",
    image: "/images/food/kuk-su.jpg",
    content: [
      "Korean-Uzbek cuisine is a fascinating fusion born from one of history's most significant cultural exchanges. In the 1930s and 1940s, a large Korean community settled in Uzbekistan, bringing their culinary traditions to Central Asia. Over decades, these two rich food cultures merged into something entirely unique.",
      "The result is dishes like Kuk Su — a cold noodle soup that blends Korean noodle-making techniques with Uzbek flavors and ingredients. Or Pyagodya, Korean-style steamed dumplings adapted with Central Asian fillings. These dishes exist in a culinary space that's neither purely Korean nor purely Uzbek.",
      "At Caravan, our family has roots in both traditions. We're proud to bring these exclusive dishes to Staten Island — many of which you simply cannot find at any other restaurant in New York. When you taste our Kuk Su or enjoy our Korean-style salads alongside Uzbek kebabs, you're experiencing a living history of the Silk Road.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};

  return {
    title: post.title,
    description: post.content[0].slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const blogSchema = generateBlogPostSchema({
    title: post.title,
    description: post.content[0].slice(0, 160),
    slug,
    publishedAt: post.date,
    image: post.image,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "News", url: "/news" },
    { name: post.title, url: `/news/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article>
        {/* Hero */}
        <section className="relative flex h-72 items-end overflow-hidden sm:h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <Container className="relative z-10 pb-10">
            <p className="text-xs font-medium tracking-wider text-amber-light uppercase">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-light text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </Container>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <Container>
            <div className="mx-auto max-w-2xl">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-6 text-lg leading-relaxed text-muted last:mb-0"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-12 border-t border-cream-dark pt-8">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M13 7H1M6 2L1 7l5 5" />
                  </svg>
                  Back to News
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </article>
    </>
  );
}
