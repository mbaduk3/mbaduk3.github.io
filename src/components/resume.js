import React from 'react'
import resumepdf from '../../static/assets/mb_2020_current — копия.pdf'
import { StaticQuery, graphql } from 'gatsby'

graphql`
{
    allDataJson {
      nodes {
        sections {
          title
          content {
            bullets
            location
            subtitle
            timeline
            title
          }
        }
      }
    }
  }
`

const ResumeEntry = () => {
    return (
        <div className="resume-entry">

        </div>
    )
}

const ResumeSection = (props) => { 
   return (
       <div className="resume-section">
          <h1>{props.title}</h1> 
          { props.entries.map(entry => <ResumeEntry name={entry.name} />) }
       </div>
   ) 
}

const Resume = () => {

    return (
        <StaticQuery 
            query={graphql`
            query resumeQuery {
                allDataJson {
                nodes {
                  sections {
                    title
                    content {
                      bullets
                      location
                      subtitle
                      timeline
                      title
                    }
                  }
                }
                }
              }
            `} 
        render={data => (
        <div className="left">
            <p style={{"fontSize": "1rem"}}>Download a pdf of my resume <a href={resumepdf}>here</a>.</p>
            {console.log(data)}
        </div>
        ) } />
    );
}

export default Resume