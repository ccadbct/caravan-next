import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "caravan-restaurant",
  title: "Caravan Restaurant & Coffee",

  projectId: "8hhsgkkm",
  dataset: "production",

  releases: {
    enabled: false,
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Menu Categories")
              .child(
                S.documentTypeList("menuCategory").title("Menu Categories")
              ),
            S.listItem()
              .title("Menu Sections")
              .child(
                S.documentTypeList("menuSection").title("Menu Sections")
              ),
            S.listItem()
              .title("Menu Items")
              .child(S.documentTypeList("menuItem").title("Menu Items")),
            S.divider(),
            S.listItem()
              .title("Blog Posts")
              .child(S.documentTypeList("blogPost").title("Blog Posts")),
            S.listItem()
              .title("Testimonials")
              .child(
                S.documentTypeList("testimonial").title("Testimonials")
              ),
            S.divider(),
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
