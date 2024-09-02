import React from 'react';
import './about-me.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h1>Learn more about me</h1>
            <h4>Below you can see my various skill sets listed from most current</h4>
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
                        <li>WireFraming</li>
                        <ul className="wireframing-skills">
                            <li>Client Communication</li>
                            <li>Physical Drawing</li>
                            <li>Prototyping</li>
                        </ul>
                        <li>Aglie Enviornment</li>
                        <li>Scrum Enviornment</li>
                    </ul>

                    <li>Mig Welding</li>
                    <ul className="welding-skills">
                        <li>Steel</li>
                        <li>Galvanized Steel</li>
                        <ul>
                            <li>Plates</li>
                            <li>Pipes</li>
                        </ul>
                        <li>Aluminum</li>
                        <ul>
                            <li>Plates</li>
                            <li>Angled Plates</li>
                        </ul>
                        <li>Stainless Steel</li>
                    </ul>
                    <li>Vehicle Maintenance</li>
                    <li>Vehicle Repair</li>
                    <li>Cooking</li>
                    <ul className="cooking-skills">
                        <li>Prepping</li>
                        <li>Trimming Meat</li>
                        <li>Fileting Meat</li>
                        <li>Knifework</li>
                        <li>Marinating</li>
                        <li>Grilling</li>
                        <li>Frying</li>
                        <li>Deep Frying</li>
                        <li>Sauces</li>
                        <li>Stocks + Broths</li>
                        <li>Spice Blends</li>
                        <li>Cooking to Order</li>
                        <li>Plating</li>
                    </ul>
                    <li>Researching</li>
                    <li>Writing</li>
                    <li>Reading</li>
                </ul>
                <li>Soft Skills:</li>
                <ul className="soft-skill-list">
                    <li>Adaptability</li>
                    <li>Attention to Detail</li>
                    <li>Communication</li>
                    <li>Creative Problem Solving</li>
                    <li>Critical Thinking</li>
                    <li>Delegation</li>
                    <li>Dependability</li>
                    <li>Determination</li>
                    <li>Empathy</li>
                    <li>Organization</li>
                    <li>Project Management</li>
                    <li>Teamwork</li>
                    <li>Time Management</li>
                </ul>
            </ul>
            <h4>Now let's get into my background</h4>
            <p>
                I am a career changer from North East Ohio. I am eager to start my career
                as a web developer in the industry through working locally, hybrid, or fully remote.
                I am willing to relocate for the right opportunity.
            </p>
            <p>
                My current resume (linked below) will detail some of my experience in the manual labor industry.
                Working on cars and trucks, learning to work with my hands and think in a 4-dimensional way.
                By 4-dimensional thinking, I believe in thinking not only in terms of what's physically here,
                but also considering how long a solution will last. This is imperative to maintaining
                an effective problem-solving strategy. My brief time in the customer service
                industry taught me to communicate in an effective manner for everyone to
                understand. Though it may take a couple of iterations to achieve the desired
                language or vocabulary, my goal through collaboration is to make sure everyone is
                satisfied with the product.
            </p>
            <p>
                I'm always looking to learn more skills and improve my current ones. So if there's a specific tech
                stack or specialization you're looking for, I'm willing to immerse myself into it and expand my
                knowledge base. I'm always looking for a challenge to keep me current with industry standards and
                emerging technologies.
            </p>
            <p>
                I'm currently enrolled in CareerFoundry's Full Stack Web Development Course, which is
                currently assisting in the re-development of my resume, LinkedIn profile, and portfolio.
            </p>
            <a href="https://profile.indeed.com/p/stevenm-aqtoghr">Check me out on Indeed!</a>
        </div>
    );
};
export default AboutMe;