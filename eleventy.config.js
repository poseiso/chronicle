export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("log/image.png");
  eleventyConfig.addPassthroughCopy("CNAME");
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk"
  };
}
