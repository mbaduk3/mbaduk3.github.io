import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import SubLayout from "../components/sublayout"

const PortfolioPage = () => {

  const options = []

  return (
    <Layout>
      <Helmet>
        <title>{"maxim baduk."}</title>
        <meta name="description" content={null} />
        {null}
      </Helmet>
      <SubLayout 
        pageRoute={"/portfolio"}
        pageTitle="Portfolio">
          <div><p>coming soon...</p></div>
          <div><p>Portfolio</p></div>
          <div><p>Portfolio</p></div>
      </SubLayout>
    </Layout>
  )
}

export default PortfolioPage