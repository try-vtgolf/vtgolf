module.exports = function (eleventyConfig) {
  /* HTTPS localhost
  eleventyConfig.setServerOptions({
    https: {
      key: "./localhost+2-key.pem",
      cert: "./localhost+2.pem"
    },
    port: 8080
  });*/

  // Copy files to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("src/android-chrome-512x512.png");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("src/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/googlef2cd2b6b0420a0c2.html");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    }
  };
};
