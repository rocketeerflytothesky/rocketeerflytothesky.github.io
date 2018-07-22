// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/thi/Documents/gatsby-blog-comicjs/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/thi/Documents/gatsby-blog-comicjs/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/thi/Documents/gatsby-blog-comicjs/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/thi/Documents/gatsby-blog-comicjs/src/pages/blog.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/thi/Documents/gatsby-blog-comicjs/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/thi/Documents/gatsby-blog-comicjs/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/thi/Documents/gatsby-blog-comicjs/src/pages/page-2.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/thi/Documents/gatsby-blog-comicjs/src/pages/projects.js"))
}

exports.json = {
  "layout-index.json": require("/Users/thi/Documents/gatsby-blog-comicjs/.cache/json/layout-index.json"),
  "404.json": require("/Users/thi/Documents/gatsby-blog-comicjs/.cache/json/404.json"),
  "about.json": require("/Users/thi/Documents/gatsby-blog-comicjs/.cache/json/about.json"),
  "blog.json": require("/Users/thi/Documents/gatsby-blog-comicjs/.cache/json/blog.json"),
  "contact.json": require("/Users/thi/Documents/gatsby-blog-comicjs/.cache/json/contact.json"),
  "index.json": require("/Users/thi/Documents/gatsby-blog-comicjs/.cache/json/index.json"),
  "page-2.json": require("/Users/thi/Documents/gatsby-blog-comicjs/.cache/json/page-2.json"),
  "projects.json": require("/Users/thi/Documents/gatsby-blog-comicjs/.cache/json/projects.json"),
  "404-html.json": require("/Users/thi/Documents/gatsby-blog-comicjs/.cache/json/404-html.json")
}