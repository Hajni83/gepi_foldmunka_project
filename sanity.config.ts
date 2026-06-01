import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  basePath: "/studio",
  name: "gepi-foldmunka",
  title: "Gépi Földmunka – Admin",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Tartalom")
          .items([
            S.listItem()
              .title("🌐 Weboldal Tartalma")
              .id("siteContent")
              .child(
                S.document()
                  .schemaType("siteContent")
                  .documentId("siteContent")
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
