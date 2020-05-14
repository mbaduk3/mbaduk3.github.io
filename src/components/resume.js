import React from 'react'
import resumepdf from '../../static/assets/mb_2020_current — копия.pdf'

const Resume = () => {

    return (
        <div className="left">

            <p style={{"font-size": "1rem"}}>Download a pdf of my resume <a href={resumepdf}>here</a>.</p>

            <h6>EDUCATION</h6>
            <h3>Cornell University</h3>
            <p>B.A. Computer Science - GPA: 3.73 - Expected December 2021</p>
            <p>Relevant coursework: stuff</p>

            <h6>WORK EXPERIENCE</h6>
            <h3>Anaplan</h3>
            <p>Software Engineering Intern - June to August 2019</p>
            <p>Wrote and deployed Java patches to a Serverless-Architecture production environment (AWS Lambda) for Anaplan’s $1.4 billion-valued platform
               to solve communication issues between two microservices.</p>

            <h3>EDUCATION</h3>
            <p>B.A. Computer Science - GPA: 3.73 - Expected December 2021</p>
            <p>Relevant coursework: stuff</p>

        </div>
    );
}

export default Resume