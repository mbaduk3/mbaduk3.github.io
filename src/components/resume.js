import React from 'react'
import resumepdf from '../../static/assets/mb_2020_current — копия.pdf'
import { useStaticQuery, graphql } from 'gatsby'

const ResumeEntry = (props) => {
  return (
    <div className="resume-entry">
      {console.log(props)}
      <div className="resume-entry-meta">
          <h1>{props.title}</h1><h3>{props.timeline}</h3>
          <h3>{props.subtitle}</h3>
          <h3>{props.location}</h3>
      </div>
      <ul>
        {props.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}

const ResumeSection = (props) => {
  return (
    <div className="resume-section">
      <h1 className="resume-section-title">{props.title}</h1>
      {props.content == null ? null : props.content.map((entry, i) => 
        <ResumeEntry 
          key={entry.title + "_" + i}
          title={entry.title}
          subtitle={entry.subtitle}
          location={entry.location}
          timeline={entry.timeline}
          bullets={entry.bullets} />
      )}
    </div>
  )
}

const Resume = () => {

  const data = useStaticQuery(graphql`
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
    }`).allDataJson.nodes[0];

  const sections = data.sections.map((sec, i) => {
    return <ResumeSection
      key={sec.title + "_" + i}
      content={sec.content}
      title={sec.title} />
  });

  return (
        <>
          <p style={{ "fontSize": "1rem" }}>Download a pdf of my resume <a href={resumepdf}>here</a>.</p>
          {console.log(data)}
          {sections}
        </>
  );
}

export default Resume