import { defineType, defineField } from "sanity";

export const menuSection = defineType({
  name: "menuSection",
  title: "Menu Section",
  type: "document",
  description:
    'A sub-group within a menu category, e.g. "Fish" or "Steaks" within Eastern European',
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: 'e.g. "Fish", "Kebabs & Grills"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: 'Optional subtitle, e.g. "Fresh from the Sea"',
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "menuCategory" }],
      description: "Which menu category this section belongs to",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Order within the category (1 = first)",
      initialValue: 0,
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
    select: { title: "name", subtitle: "category.name" },
  },
});
