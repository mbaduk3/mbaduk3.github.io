const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/maximbaduk/Documents/Computer Science/mbaduk3.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/maximbaduk/Documents/Computer Science/mbaduk3.github.io/src/pages/404.js"))),
  "component---src-pages-all-work-js": hot(preferDefault(require("/Users/maximbaduk/Documents/Computer Science/mbaduk3.github.io/src/pages/all_work.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/maximbaduk/Documents/Computer Science/mbaduk3.github.io/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/maximbaduk/Documents/Computer Science/mbaduk3.github.io/src/pages/index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/maximbaduk/Documents/Computer Science/mbaduk3.github.io/src/pages/portfolio.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/maximbaduk/Documents/Computer Science/mbaduk3.github.io/src/templates/blogTemplate.js")))
}

