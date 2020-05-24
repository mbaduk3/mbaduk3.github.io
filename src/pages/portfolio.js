import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import SubLayout from "../components/sublayout"
import { Link } from "gatsby"

const PortfolioEntry = (props) => {
  return (
  <div className="portfolio-entry">
    <Link to={props.slug}><h1 className="portfolio-entry-title">{props.title}</h1></Link>
    <p className="portfolio-entry-sub">{props.timeline}</p>
    <p>{props.desc}</p>
    {/* <p className="portfolio-entry-more">More Info ></p> */}
  </div>
  );
}

const PortfolioPage = ({ data }) => {

  console.log(data);

  const options = [{name: "Selected Works", route: "/portfolio"}];

  const projects = data.allMarkdownRemark.edges.map((proj, i) => {
    console.log(proj.node);
    const fm = proj.node.frontmatter;
    return (
      <PortfolioEntry 
        key={fm.title + "_" + i}
        title={fm.title}
        timeline={fm.timeline}
        slug={fm.slug} 
        desc={fm.desc} />
    )});

  return (
    <Layout>
      <Helmet>
        <title>{"maxim baduk."}</title>
        <meta name="description" content={null} />
        {null}
      </Helmet>
      <SubLayout 
        pageRoute={"/portfolio"}
        pageTitle="Portfolio"
        options={options}>
            <div style={{"width": "100%"}}>
              {projects}
            </div>
            <p></p>
      </SubLayout>
    </Layout>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  query porfolioPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "Project" }}}) {
      edges {
        node {
          id
          frontmatter {
            timeline
            desc
            slug
            title
          }
        }
      }
    }
  }
`