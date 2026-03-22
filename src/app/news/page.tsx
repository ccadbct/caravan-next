import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "News",
  description:
    "Read the latest news and blog posts from Caravan Restaurant & Coffee in Staten Island, NY. Stories about our cuisine, culture, and community.",
};

// Static blog data — will be replaced with Sanity CMS
const posts = [
  {
    title: "The Rich History of Uzbek Plov: More Than Just a Dish",
    slug: "the-rich-history-of-uzbek-plov",
    excerpt:
      "Discover the cultural significance of Plov, the beloved Uzbek rice dish that has been bringing families together for centuries along the Silk Road.",
    date: "October 4, 2023",
    image: "/images/food/lagman.jpg",
  },
  {
    title: "What is Korean-Uzbek Food?",
    slug: "what-is-korean-uzbek-food",
    excerpt:
      "Explore the fascinating fusion of Korean and Uzbek culinary traditions — a unique cuisine born from the historical migrations along the Silk Road.",
    date: "August 25, 2023",
    image: "/images/food/kuk-su.jpg",
  },
];

export default function NewsPage() {
  return (
    <>
      <section className="bg-warm-black py-20">
        <Container>
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-amber" />
              <span className="text-xs font-medium tracking-[0.3em] text-amber-light uppercase">
                Stories & Culture
              </span>
            </div>
            <h1 className="font-display text-4xl font-light text-white sm:text-5xl">
              News
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            title="From Our Kitchen"
            subtitle="Stories about our cuisine, culture, and the Silk Road traditions that inspire us."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium tracking-wider text-muted uppercase">
                    {post.date}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-medium transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M1 7h12M8 2l5 5-5 5" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
