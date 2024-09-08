import React from 'react';
import './about-me.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h1>Learn more about me</h1>
            <h4>Let's get into my background and then below, take a look at the skills I've aquired</h4>
            <p>
                I am a career changer from North East Ohio. I am eager to start my career
                as a web developer in the industry through working locally, hybrid, or fully remote.
                I am willing to relocate for the right opportunity.
            </p>
            <p>
                My current Indeed resume (linked below) will detail some of my experience in the manual labor industry.
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
            <h4>Below you can see my various skill sets listed from most current</h4>
            <h2>Soft Skills:</h2>
            <div className="skills-list-container">
                <ul className="soft-skill-list">
                    <li>Adaptability</li>
                    <li>Attention to Detail</li>
                    <li>Analytical Thinking</li>
                    <li>Communication</li>
                    <li>Creative Problem Solving</li>
                    <li>Critical Thinking</li>
                    <li>Delegation</li>
                    <li>Dependability</li>
                    <li>Determination</li>
                    <li>Empathy</li>
                    <li>Organization</li>
                    <li>Project Management</li>
                    <li>Researching</li>
                    <li>Teamwork</li>
                    <li>Time Management</li>
                    {/* soft-skill-list*/}
                </ul>
            </div>

            <h2>Hard Skills:</h2>
            <div className="skills-list-container hard-skills-container">
                <div className="hard-skill-category">
                    <h3>Coding Skills</h3>
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
                        <li>Aglie Enviornment</li>
                        <li>Scrum Enviornment</li>
                        <li>User Feedback and Updates</li>
                        <h4>Wireframing skills: </h4>
                        <ul className="wireframing-skills">
                            <li>Client Communication</li>
                            <li>Physical Drawing</li>
                            <li>Prototyping</li>
                        </ul>
                    </ul>
                </div>
                <div className="hard-skill-category">
                    <h3>Mig Welding</h3>
                    <ul className="welding-skills">
                        <li>Steel</li>
                        <li>Galvanized Steel</li>
                        <li>Aluminum</li>
                        <li>Stainless Steel</li>
                        <h4>Positions: </h4>
                        <ul className="welding-positions">
                            <li>Flat</li>
                            <li>Verticle</li>
                            <li>Horizontal</li>
                            <li>Round Pipe</li>
                        </ul>

                    </ul>
                </div>
                <div className="hard-skill-category">
                    <h3>Vehicle Maintenance</h3>
                    <ul className="vehicle-skills">
                        <h4>Engine Maintenance and Repair: </h4>
                        <ul>
                            <li>Detailed and Thorough Inspections</li>
                            <li>Oil Changes</li>
                            <li>Filter Changes</li>
                            <li>Serpentine Belt Replacement</li>
                            <li>Stretch Belt Replacement</li>
                            <li>Timing Belt / Chain / Gear Replacement</li>
                            <li>Flywheel Replacement</li>
                        </ul>

                        <h4>Transmission Maintenance and Repair: </h4>
                        <ul>
                            <li>Fluid Exchanges</li>
                            <li>Filter Changes</li>
                            <h4>Manual Transmission: </h4>
                            <ul>
                                <li>Clutch Pedal Diagnostic</li>
                                <li>Clutch Replacement</li>
                                <li>Shift Assembly Repair</li>
                            </ul>
                            <h4>Automatic Transmission: </h4>
                            <ul>
                                <li>Torque Converter Repair</li>
                                <li>Valve Body Repair</li>
                                <li>Transmission Cooler Repair</li>
                            </ul>
                        </ul>

                        <h4>Brake Systems: </h4>
                        <ul>
                            <li>Brake Pads</li>
                            <li>Rotors</li>
                            <li>Calipers</li>
                        </ul>
                        <ul>
                            <li>Drums</li>
                            <li>Shoes</li>
                            <li>Wheel Cylinders</li>
                        </ul>
                        <ul>
                            <li>Master Cylinder</li>
                            <li>Brake Lines</li>
                            <li>Brake Fluid</li>
                        </ul>

                        <h4>Suspension Diagnosis and Repair: </h4>
                        <ul>
                            <li>Shocks</li>
                            <li>Struts</li>
                            <li>Control Arms</li>
                            <li>Ball Joints</li>
                            <li>Wheel Bearings</li>
                        </ul>

                        <h4>Steering Diagnosis and Repair: </h4>
                        <ul>
                            <li>Power Steering</li>
                            <li>Steering Rack</li>
                            <li>Steering Column</li>
                            <li>Steering Wheel</li>
                        </ul>

                        <h4>Electrical Diagnosis and Repair: </h4>
                        <ul>
                            <li>Alternator</li>
                            <li>Starter</li>
                            <li>Battery</li>
                            <li>Wiring</li>
                            <li>Grounding</li>
                        </ul>

                        <h4>HVAC: </h4>
                        <ul>
                            <li>Heater Core Diagnosis</li>
                            <li>Thermostat Replacement</li>
                            <li>AC Compressor Diagnosis</li>
                            <li>AC Condenser Replacement</li>
                            <li>AC Recovery and Refresh</li>
                            <li>Leak Detection</li>
                        </ul>
                    </ul>
                </div>
                <div className="hard-skill-category">
                    <h3>Cooking Skills</h3>
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
                </div>
                {/* hard-skill-list*/}
            </div>
            {/* skills-list-container*/}
            {/* about-me*/}
        </div>
    );
};
export default AboutMe;