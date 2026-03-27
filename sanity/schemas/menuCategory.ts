import { defineType, defineField } from "sanity";

export const menuCategory = defineType({
  name: "menuCategory",
  title: "Menu Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: 'e.g. "Eastern European Cuisine"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly name (click Generate)",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Short description shown on the menu page",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Banner image at the top of the menu category page",
      options: { hotspot: true },
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      description: "Small icon/SVG for the category",
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Order in navigation (1 = first)",
      initialValue: 0,
    }),
    defineField({
      name: "metaTitle",
      title: "SEO Title",
      type: "string",
      description: "Custom page title for search engines (optional)",
    }),
    defineField({
      name: "metaDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
      description: "Custom meta description for search engines (optional)",
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrder",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", media: "icon" },
  },
});
