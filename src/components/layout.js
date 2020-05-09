import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import FullMenu from  "../components/fullMenu"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {

  const [ menuOpen, setMenuOpen ] = useState(false);

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

  var pChildren = menuOpen ? null : children;

  const footer = (
    <footer className="site-footer">
        <div className="footer-name">
          <p>Made by Maxim Baduk, 2020</p>
          <p>Reach out at: <a href="mailto:mb2474@cornell.edu">mb2474@cornell.edu</a></p>
        </div>
        <div className="footer-social">
          <p><a href="https://github.com/mbaduk3">GitHub</a></p>
          <p><a href="https://www.linkedin.com/in/maxim-b-bb5770147/">LinkedIn</a></p>
        </div>
        <div className="footer-credits">
          <p>This site was made using Gatsby</p>
          <p>See the source <a href="https://github.com/mbaduk3/mbaduk3.github.io">here</a></p>
        </div>
      </footer>
  );

  const defLayout = (
    <>
    {menuOpen ? <FullMenu /> : null}
    <div className="site-wrapper">
      <div className="fullview">
        <header className="site-header">
          <div className="site-title">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <Navigation menu={{open: menuOpen, set: setMenuOpen}}/>
        </header>
      {children}
      </div>
      {footer}
    </div>
    </>
  );

  return defLayout;
}