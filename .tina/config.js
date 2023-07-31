import { defineConfig } from "tinacms";


export default defineConfig({
  branch: "main",
  clientId: "a8971ca0-9f09-4dcd-ad90-fbec1c6b5a23", // Get this from tina.io
  token: "adc0a2fb033e77ac0455782fb320ce264a16d4d4", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Trips",
        name: "trips",
        path: "content/trips",
        fields: [
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
		  {
            type: "string",
            name: "title",
            label: "title",
          },
		  {
            type: "string",
            name: "youtube",
            label: "youtube",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },



        ],
      },
      {
        label: "Projects",
        name: "projects",
        path: "content/projects",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
