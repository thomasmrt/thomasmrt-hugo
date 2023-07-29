import type { TinaField } from "tinacms";
export function stageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "number",
      name: "distance",
      label: "Distance",
    },
    {
      type: "number",
      name: "duration",
      label: "Duration",
    },
    {
      type: "number",
      name: "elevation",
      label: "Elevation",
    },
    {
      type: "image",
      name: "gpx",
      label: "gpx",
    },
  ] as TinaField[];
}
export function tripFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "name",
      label: "Name",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function trip_templateFields() {
  return [
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
      name: "tags",
      label: "tags",
      list: true,
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
    {
      type: "string",
      name: "authors",
      label: "authors",
      list: true,
    },
  ] as TinaField[];
}
