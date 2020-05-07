import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import SubLayout from "../components/sublayout"

const AllWorkPage = () => {

  const options = [
    {name: "Web", route: "/work/web"},
  ]

  return (
    <Layout>
      <Helmet>
        <title>{"maxim baduk."}</title>
        <meta name="description" content={null} />
        {null}
      </Helmet>
      <SubLayout 
        pageRoute={"/work"}
        pageTitle="All Work"
        options={options}>
          <div><p>coming soon...</p></div>
          <div><p>Coming Soon</p></div>
          <div><p>Portfolio</p></div>
      </SubLayout>
    </Layout>
  )
}

export default AllWorkPage