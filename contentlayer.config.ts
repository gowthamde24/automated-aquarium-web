import { defineDocumentType, makeSource } from "contentlayer/source-files";

const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: `about/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
    },
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` }
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [About],
});