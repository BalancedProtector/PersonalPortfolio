import React from 'react';
import './about-me.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h1>Learn more about me</h1>
            <h4>Let's get into my background and then below, take a look at the skills I've aquired</h4>
            <p>
                I am a career changer from Northeast Ohio, with a background in manual labor and a passion for technical problem-solving.
                Weather it's diagnosing complex electrical systems or performing precision mechanical maintenance, I focus on doing the
                job right the first time.
            </p>
            <p>
                My Experience spans from automitive and truck repair to high cycle garage doors and motorized operators. I am a G1 ASE certified technician
                and hold my OSHA 10 and EPA 609 cards. Weather I'm using an acetylene torch, hyrdraulic tube bender, or advanced diagnostic software, I
                prioritize safety and efficiency. I don't just swap parts; I diagnose the underlying systems to ensure long-term performance.
            </p>
            <h4>Why the hybrid background?</h4>
            <p>
                Having spent time learning to code, I have a unique perspective on the "brains" and logic behind modern industrial machinery. Hoever, I've found
                my greatest value is in the physical / mechanical space - working with my hands to maintain and test the systems that keep operations running.
                I'm looking for a role that rewards a high level of technical skill and a commitment to industry standards.

            </p>
            <a href="https://profile.indeed.com/p/stevenm-aqtoghr">Check me out on Indeed!</a>

            <h4>Below you can see my various skill sets and certifications listed from most transferrable to specialized skills</h4>

            <h2>Soft Skills and Certifications</h2>
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

                <ul className="certifications-list">
                    <ul>
                        <li style={{ fontWeight: 'bold', borderBottom: '1px solid #ccc', marginBottom: '5px', color: '#333' }}>
                            OSHA 10 - Issued 5/15/2025
                        </li>
                        <h4>ASE</h4>
                        <ul>
                            <li>G1 - General Meintenence </li>
                            <li>EPA - 609 </li>
                            <li>A1 - Entry </li>
                            <li>A2 - Entry </li>
                            <li>A3 - Entry </li>
                            <li>A4 - Entry </li>
                            <li>A5 - Entry </li>
                            <li>A6 - Entry </li>
                            <li>A7 - Entry </li>
                            <li>A8 - Entry </li>
                        </ul>
                    </ul>
                    {/* certifications*/}
                </ul>
            </div>
            <h2>Hard Skills:</h2>
            <div className="skills-list-container hard-skills-container">
                <div className="hard-skill-category">
                    <h3>Mig Welding</h3>
                    <ul className="welding-skills">
                        <h4>Metals</h4>
                        <ul>
                            <li>Steel</li>
                            <li>Galvanized Steel</li>
                            <li>Aluminum</li>
                            <li>Stainless Steel</li>
                        </ul>

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
                    </ul>
                </div>
                <div className="hard-skill-category">
                    <h3>Coding Skills</h3>
                    <ul className="coding-skills">
                        <h4>Languages</h4>
                        <ul>
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