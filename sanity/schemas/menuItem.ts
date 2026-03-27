import { defineType, defineField } from "sanity";

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Dish Name",
      type: "string",
      description: 'e.g. "Ribeye Steak 16oz"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price ($)",
      type: "number",
      description: "Price in dollars, e.g. 45",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Short description of the dish",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      description: "Photo of the dish (optional)",
    }),
    defineField({
      name: "section",
      title: "Menu Section",
      type: "reference",
      to: [{ type: "menuSection" }],
      description: 'Which section this belongs to (e.g. "Fish")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Menu Category",
      type: "reference",
      to: [{ type: "menuCategory" }],
      description: 'Which category (e.g. "Eastern European Cuisine")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Order within the section (1 = first)",
      initialValue: 0,
    }),
    defineField({
      name: "isAvailable",
      title: "Available",
      type: "boolean",
      description: "Uncheck to temporarily hide this item",
      initialValue: true,
    }),
    defineField({
      name: "dietaryFlags",
      title: "Dietary Info",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Vegetarian", value: "vegetarian" },
          { title: "Vegan", value: "vegan" },
          { title: "Gluten-Free", value: "gluten-free" },
          { title: "Spicy", value: "spicy" },
          { title: "Halal", value: "halal" },
        ],
      },
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrder",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
    {
      title: "Name",
      name: "name",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "section.name",
      media: "image",
      price: "price",
    },
    prepare({ title, subtitle, media, price }) {
      return {
        title: `${title} — $${price}`,
        subtitle: subtitle,
        media: media,
      };
    },
  },
});
