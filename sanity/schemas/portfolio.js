export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "ProjectName",
      type: "string",
    },
    {
      name: "details",
      title: "details",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "technology",
      title: "Technology",
      type: "array",
      of: [{ type: "reference", to: { type: "technologies" } }],
    },
  ],
};
