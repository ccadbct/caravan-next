import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "restaurantName",
      title: "Restaurant Name",
      type: "string",
      initialValue: "Caravan Restaurant & Coffee",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({ name: "street", title: "Street", type: "string" }),
        defineField({ name: "city", title: "City", type: "string" }),
        defineField({ name: "state", title: "State", type: "string" }),
        defineField({ name: "zip", title: "ZIP Code", type: "string" }),
      ],
    }),
    defineField({
      name: "hours",
      title: "Business Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "days", title: "Days", type: "string" }),
            defineField({ name: "hours", title: "Hours", type: "string" }),
          ],
          preview: {
            select: { title: "days", subtitle: "hours" },
          },
        },
      ],
    }),
    defineField({
      name: "promoEnabled",
      title: "Show Promo Banner",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "promoText",
      title: "Promo Text",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
