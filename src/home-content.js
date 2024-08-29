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
                        Hi, I'm a Full Stack Web Developer passionate about technology. Over the past
                        several years I've been building sites and apps for colleagues, friends, and family. Designed using a
                        variety of coding languages, frameworks and libraries. With my background in automotive
                        engineering, as well as mechanical and hands-on trades, I'm excited to pursue a career as a
                        developer in the mechanical / robotics industry, combining my expertise with professional
                        aspirations.
                    </p>

                    <p>
                        I am from North East Ohio, USA. I am ready to work locally,
                        remote (home-based or locally hybrid), or relocate for the
                        right opportunity. I am open to full-time, part-time or
                        contract work. As well as internships or apprenticeships
                        should I need to learn more about a specific technology or
                        system already in place.
                    </p>

                    <h3>Exploring the Page</h3>
                    <p>
                        Please feel free to explore the site and learn more about me, my projects, and how you can
                        contact me. At the top of the page is a collapsible navigation bar with various sections. Clicking
                        "About Me" will give an organized list of skills and technologies I'm familiar with, as well as an overview of my
                        background and a little about me as a person. Clicking on "Projects" will take you to view all of my
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