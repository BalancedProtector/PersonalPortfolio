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
                        I'm a web developer from Ohio, USA. Mainly NE Ohio, I am ready to work locally,
                        remote (home-based or locally hybrid), or relocate for the
                        right opportunity.
                    </p>
                    <p>
                        Hi, I'm a Full Stack Web Developer passionate about technology. Over the past
                        several years I’ve been building sites for colleagues, friends, and family. Designed using a
                        variety of coding languages, frameworks and libraries. With my background in automotive
                        engineering, as well as mechanical and hands-on trades, I'm excited to pursue a career as a
                        developer in the mechanical / robotics industry, combining my expertise with professional
                        aspirations.
                    </p>
                    <p>
                        You can find the navigation bar up top which
                        will lead you to the different sections of my portfolio. And in
                        staying always upfront, some sections may have more details than
                        others, depending how you navigate the page. You'll notice that
                        the "Portfolio" section is a dropdown, but also a link to a more
                        detailed page. Selecting an individual project will take you to view
                        it's information and available links, and All Projects will only show
                        the projects and not the more detailed portfolio section. Both will
                        showcase all of my projects and link to their respective pages.
                    </p>

                </Col>
            </Row>
        </Container>
    );
};

export default HomeContent;