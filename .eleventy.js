const markdownIt = require("markdown-it");
const md = new markdownIt();

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  // Custom filter to prevent wrapping content with <p></p> tags
  eleventyConfig.addFilter("unwrapParagraph", (content) => {
    let html = md.render(content);
    return html.replace(/^<p>|<\/p>$/g, "");
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
