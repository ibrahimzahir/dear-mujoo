export default {
  name: "message",
  title: "Message",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
      options: {
        maxLength: 600,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "userId", title: "UserID", type: "string" },
  ],
};
