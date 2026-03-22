import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BUSINESS, MENU_CATEGORIES, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-warm-black text-white">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber to-transparent" />

      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-6 flex items-center gap-3">
              <Image
                src="/images/branding/logo.svg"
                alt={SITE_NAME}
                width={44}
                height={44}
              />
              <span className="font-display text-lg font-light tracking-wider">
                CARAVAN
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              A culinary odyssey across continents in the heart of Staten
              Island. Experience the flavors of the Silk Road.
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-widest text-amber uppercase">
              Our Menus
            </h3>
            <ul className="space-y-2.5">
              {MENU_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/menu/${cat.slug}`}
                    className="text-sm text-white/50 transition-colors hover:text-amber-light"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/lunch-special"
                  className="text-sm text-white/50 transition-colors hover:text-amber-light"
                >
                  Lunch Special
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-widest text-amber uppercase">
              Visit Us
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/50 transition-colors hover:text-amber-light"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/50 transition-colors hover:text-amber-light"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm text-white/50 transition-colors hover:text-amber-light"
                >
                  News
                </Link>
              </li>
              <li>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-amber-light"
                >
                  Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-widest text-amber uppercase">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-white/50">
              <p>{BUSINESS.address.full}</p>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="block transition-colors hover:text-amber-light"
              >
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="block transition-colors hover:text-amber-light"
              >
                {BUSINESS.email}
              </a>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-amber-light"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights
            reserved.
          </p>
          <p className="text-xs text-white/30">
            317 Sand Lane, Staten Island, NY 10305
          </p>
        </div>
      </Container>
    </footer>
  );
}
