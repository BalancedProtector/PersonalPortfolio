import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home-content.css';

const HomeContent = () => {
    return (
        <Container className="custom-container">
            <Row className="text-center">
                <Col>
                    <img
                        src="CelticYin&Yang.svg"
                        className="Personal-Logo"
                        alt="A Yin and Yang in a Celtic Knotwork design"
                        height="200"
                    />
                    <h1>Hello and Welcome to</h1>
                    <h3>Steven Martin's Portfolio</h3>
                    <p>
                        I am a technical specialist and systems developer with a focus on the intersection of industrial hardware and digital logic.
                        My background in high-cycle mechanical systems and industrial electrical troubleshooting gives me a 'ground-up' perspective on the digital 'brains'
                        that power modern infrastructure. Whether I am performing precision diagnostics with a multi-meter or debugging a complex software application, my
                        commitment is to system uptime and industry-standard compliance. I bridge the gap between physical labor and digital development, ensuring that the
                        logic on the screen translates perfectly to the machinery in the field.
                    </p>

                    <h3>Exploring the Page</h3>
                    <p>
                        Please feel free to explore the site and learn more about me, my projects, and how you can
                        contact me. At the top of the page is a collapsible navigation bar with various sections. Opening the
                        menu will open the Navigation Bar containing the various pages in this site. Clicking
                        "About Me" will give an organized list of skills, certifications and technologies I'm familiar with, as well as an overview of my
                        background and a little about me as a person. Clicking on "Projects" will take you to view all of my development
                        projects in one place. Instead of clicking, try hovering to view a dropdown menu list of all my projects.
                        At the bottom of this dropdown is "Portfolio" which will still show you all of my projects in one place,
                        but also give more details at the top about most of the projects currently on display.
                    </p>

                </Col>
            </Row>
        </Container>
    );
};

export default HomeContent;