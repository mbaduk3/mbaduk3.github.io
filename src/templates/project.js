import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Project = ({ data, }) => {
   const { site, markdownRemark } = data;
   const { siteMetadata } = site;
   const { frontmatter, html } = markdownRemark;
   return (
       <Layout>
           <Helmet>
               <title>{frontmatter.title} | {siteMetadata.title}</title>
               <meta name="description" content={frontmatter.desc} />j
           </Helmet>
           <h1 className="portfolio-entry-title">{frontmatter.title}</h1>
           <p className="portfolio-entry-sub">{frontmatter.timeline}</p>
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
                slug
                title
            }
        }
    }
`
