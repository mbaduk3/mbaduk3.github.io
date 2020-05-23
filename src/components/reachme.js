import React from 'react'
import { AiFillMail, AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const ReachEntry = (props) => {
    return (
        <div className="reachme-entry">
            <p>{props.title}</p><div></div>
            <span><a href={props.link}>{props.icon()}</a></span>
        </div>
    );
}

const ReachMe = () => {
    return (
    <div className="reachme">
        <ReachEntry title="Email" icon={AiFillMail} link={"mailto:mb2474@cornell.edu"}></ReachEntry>
        <ReachEntry title="Github" icon={AiFillGithub} link={"https://github.com/mbaduk3"}></ReachEntry>
        <ReachEntry title="LinkedIn" icon={AiFillLinkedin} link={"https://www.linkedin.com/in/maxim-b-bb5770147/"}></ReachEntry>
        <ReachEntry title="Instagram" icon={AiFillInstagram} link={"https://www.instagram.com/mbaduk3/"}></ReachEntry>
        <ReachEntry title="Facebook" icon={AiFillFacebook} link={"https://www.facebook.com/maxim.baduk"}></ReachEntry>
    </div>
    );
}

export default ReachMe