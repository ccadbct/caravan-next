/**
 * Safe JSON-LD component for structured data.
 * Data is serialized from trusted, code-defined schema objects (not user input).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // JSON.stringify escapes all special characters, preventing script injection.
  // The data originates from our own constants/lib files, never from user input.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
