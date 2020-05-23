import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import SubLayout from "../components/sublayout"

const PortfolioEntry = (props) => {
  return (
  <div className="portfolio-entry">
    <a href=""><h1 className="portfolio-entry-title">{props.title}</h1></a>
    <p className="portfolio-entry-sub">{props.timeline}</p>
    <p>{props.desc}</p>
    {/* <p className="portfolio-entry-more">More Info ></p> */}
  </div>
  );
}

const PortfolioPage = () => {

  const options = [{name: "Selected Works", route: "/portfolio"}];

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
            <div>
              <PortfolioEntry title="project 1" timeline="july 2019 - august 4040" desc="hello world this is my projecto." />
              <PortfolioEntry title="project 1" timeline="july 2019 - august 4040" desc="hello world this is my projecto." />
            </div>
            <p></p>
      </SubLayout>
    </Layout>
  )
}

export default PortfolioPage