import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <div className="fullview">
        <header className="site-header">
          <div className="site-title">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <Navigation />
        </header>
        {children}
      </div>
      <footer className="site-footer">
        <div className="footer-name">
          <p>Made by Maxim Baduk</p>
          <p>2022</p>
        </div>
        <div className="footer-social">
          <p><a href="https://github.com/mbaduk3">GitHub</a></p>
          <p><a href="https://www.linkedin.com/in/maxim-b-bb5770147/">LinkedIn</a></p>
        </div>
        <div className="footer-credits">
          <p>This site was made using Gatsby</p>
          <p>See the source <a href="https://github.com/mbaduk3/mbaduk3.github.io">here</a></p>
        </div>
        {/* <p>&copy; 2020 Delog &bull; Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://w3layouts.com">W3Layouts</a></p> */}
      </footer>
    </div>
  )
}