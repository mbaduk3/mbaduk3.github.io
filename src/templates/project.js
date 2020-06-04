import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Project = ({ data, }) => {
   const { site, markdownRemark } = data;
   const { siteMetadata } = site;
   const { frontmatter, html } = markdownRemark;
   const techList = frontmatter.technologies.map((tech, i) => {
       return <li key={tech + "_" + i} className="project-tech-item">{tech}</li>
   });
   return (
       <Layout>
           <Helmet>
               <title>{frontmatter.title} | {siteMetadata.title}</title>
               <meta name="description" content={frontmatter.desc} />
           </Helmet>
           <div className="project-meta">
            <div className="project-section">
                <h1 className="portfolio-entry-title">{frontmatter.title}</h1>
                <p className="portfolio-entry-sub">{frontmatter.timeline}</p>
                </div>
                <div className="project-section">
                    <div className="project-section-head"><h2>Technologies</h2></div>
                    <ul className="project-tech-list">{techList}</ul>
                </div>
                <div className="project-section">
                    <div className="project-section-head"><h2>Overview</h2></div>
                    <p className="project-desc">{frontmatter.desc}</p>
                </div>
            </div>
           <div className="project-content" dangerouslySetInnerHTML={{__html: html}}></div>
        </Layout>
   );
}

export default Project

export const pageQuery = graphql`
    query($slug: String!) {
        site { 
            siteMetadata {
                title
            }
        }
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                timeline
                desc
                slug
                title
                technologies
            }
        }
    }
`
