module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  // Add these lines to copy the MathLive assets
  eleventyConfig.addPassthroughCopy({"node_modules/mathlive/dist/fonts": "fonts"});
  eleventyConfig.addPassthroughCopy({"node_modules/mathlive/dist/sounds": "sounds"});

  eleventyConfig.addPassthroughCopy({"node_modules/nerdamer/nerdamer.core.js": "nerdamer.core.js"});
  eleventyConfig.addPassthroughCopy({"node_modules/nerdamer/Algebra.js": "Algebra.js"});
  eleventyConfig.addPassthroughCopy({"node_modules/nerdamer/Calculus.js": "Calculus.js"});
  eleventyConfig.addPassthroughCopy({"node_modules/nerdamer/Solve.js": "Solve.js"});
  
  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};