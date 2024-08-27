import React from 'react';
import './about-me.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h1>If you want to learn more about me as a person</h1>
            <h4>We can start with a list of my skills</h4>
            <ul className="skills-list">
                <li>Hard Skills:</li>
                <ul className="hard-skill-list">
                    <li>Coding</li>
                    <ul className="coding-skills">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>GitHub</li>
                        <li>Git</li>
                    </ul>
                    <li>WireFraming</li>
                    <ul className="wireframing-skills">
                        <li>Client Communication</li>
                        <li>Physical Drawing</li>
                        <li>Prototyping</li>
                    </ul>
                    <li>Aglie Enviornment</li>
                    <li>Scrum Enviornment</li>
                    <li>Mig Welding</li>
                    <ul className="welding-skills">
                        <li>Steel</li>
                        <li>Galvanized Steel</li>
                        <ul>
                            <li>Plates</li>
                            <li>Pipes</li>
                        </ul>
                        <li>Aluminum</li>
                        <li>Stainless Steel</li>
                    </ul>
                    <li>Vehicle Maintenance</li>
                    <li>Vehicle Repair</li>
                    <li>Cooking</li>
                    <li>Researching</li>
                    <li>Writing</li>
                    <li>Reading</li>
                </ul>
                <li>Soft Skills:</li>
                <ul className="soft-skill-list">
                    <li>Communication</li>
                    <li>Organization</li>
                    <li>Critical Thinking</li>
                    <li>Creative Problem Solving</li>
                    <li>Dependability</li>
                    <li>Empathy</li>
                    <li>Project Managment</li>
                    <li>Attention to Detail</li>
                </ul>
            </ul>
            <h4>Now let's get into my background</h4>
            <p>
                I am a career changer from North East Ohio, USA. I am eager to establish myself
                in the web development industry through working locally, hybrid or fully remote.
                I am willing to relocate for the right opportunity.
            </p>
            <p>
                My current resume (linked below) may give pause
                due to my time in the manual labor industry. Working on cars and trucks,
                learning to work with my hands and think in a 4-dimensional way. Practicing
                with tools, equipment, and machinery; I'm well-versed in creative applications
                of tools and parts. You may ask what I mean by 4-dimensional thinking.
                I believe in thinking not only in terms of what's physically here, but also
                considering how long a solution will last is imperative to maintaining
                effective problem-solving strategies. My brief time in the customer service
                industry taught me to communicate in an effective manner for everyone to
                understand. Though it may take a couple of iterations to achieve the desired
                language, my goal is to make sure everyone is on the same page.
            </p>
            <p>
                I'm always looking to learn more skills and improve my current ones. So if there's a certain tech
                stack you're looking for, I'm more than willing to learn it and expand my toolbelt. I'm always looking
                for a fun challenge to keep me on my toes, but there's nothing wrong with using what works as well.
            </p>
            <p>
                I'm currently enrolled in CareerFoundry's Full Stack Web Development Course, which is
                assisting in the re-development of my resume, linkedin profile, and portfolio.
            </p>
            <a href="https://profile.indeed.com/p/stevenm-aqtoghr">Check me out on Indeed!</a>
        </div>
    );
};
export default AboutMe;