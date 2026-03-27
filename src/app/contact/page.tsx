import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach out to Caravan Restaurant & Coffee with questions or feedback. Visit us at ${BUSINESS.address.full} or call ${BUSINESS.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="-mt-20 bg-warm-black pt-32 pb-20 lg:pt-36 lg:pb-24">
        <Container>
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-amber" />
              <span className="text-xs font-medium tracking-[0.3em] text-amber-light uppercase">
                Get In Touch
              </span>
            </div>
            <h1 className="font-display text-4xl font-light text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-white/60">
              We value your input. Reach out with questions, feedback, or
              reservation requests.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-light">
                Visit Our Restaurant
              </h2>
              <div className="mt-8 space-y-6">
                <ContactDetail
                  icon="location"
                  label="Address"
                  value={BUSINESS.address.full}
                  href={BUSINESS.googleMapsUrl}
                />
                <ContactDetail
                  icon="phone"
                  label="Phone"
                  value={BUSINESS.phone}
                  href={`tel:${BUSINESS.phoneRaw}`}
                />
                <ContactDetail
                  icon="email"
                  label="Email"
                  value={BUSINESS.email}
                  href={`mailto:${BUSINESS.email}`}
                />
                <ContactDetail
                  icon="whatsapp"
                  label="WhatsApp"
                  value={BUSINESS.phone}
                  href={BUSINESS.whatsappUrl}
                />
              </div>

              {/* Google Maps embed */}
              <div className="mt-10 aspect-[4/3] overflow-hidden bg-surface">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.5!2d${BUSINESS.geo.lng}!3d${BUSINESS.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM1JzMyLjMiTiA3NMKwMDQnMTMuMiJX!5e0!3m2!1sen!2sus!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Caravan Restaurant location on Google Maps"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-light">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
}) {
  const icons: Record<string, React.ReactNode> = {
    location: (
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 13a3 3 0 100-6 3 3 0 000 6z" />
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    ),
    email: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </>
    ),
    whatsapp: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    ),
  };

  return (
    <a
      href={href}
      target={icon === "location" || icon === "whatsapp" ? "_blank" : undefined}
      rel={
        icon === "location" || icon === "whatsapp"
          ? "noopener noreferrer"
          : undefined
      }
      className="flex items-start gap-4 transition-colors hover:text-accent"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={icon === "whatsapp" ? "currentColor" : "none"}
          stroke={icon === "whatsapp" ? "none" : "currentColor"}
          strokeWidth="1.5"
          className="text-accent"
        >
          {icons[icon]}
        </svg>
      </div>
      <div>
        <p className="text-xs font-medium tracking-wider text-muted uppercase">
          {label}
        </p>
        <p className="mt-0.5 text-sm">{value}</p>
      </div>
    </a>
  );
}
