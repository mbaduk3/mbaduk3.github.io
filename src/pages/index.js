import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import SubLayout from "../components/sublayout"
import { Link } from "gatsby"
import biopic from '../../static/assets/bio-pic.jpeg'
import Resume from '../components/resume'
import ReachMe from '../components/reachme'

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const options = [
    {name: "General", route: "/about/general"},
    {name: "Resume", route: "about/resume"},
    {name: "Contact", route: "about/contact"},
  ]

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        {null}
      </Helmet>
      <SubLayout 
        pageRoute={"/about"}
        pageTitle="Hello!"
        options={options}>
          <div className="bio">
            <div className="bio-text left">
              <p>I'm a computer science student at Cornell University, 
                and a motivated builder of various projects which 
                you can check out <Link to={"/portfolio"}>here.</Link><br/><br/>
                My interests include game development, design, and anything having to do with AI.<br/><br/>
              </p>
              <p style={{"marginBottom": 0}}>If you are interested in working with me, please <a href="mailto:mb2474@cornell.edu">reach out</a>.</p>
            </div>
            <div className="right">
              <img 
                src={biopic} 
                alt="This is me!"></img>
            </div>
          </div>
          <div className="resume">
            <Resume />
          </div>
          <div className="contact" style={{'width': '100%'}}>
            <ReachMe />
          </div>
      </SubLayout>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`