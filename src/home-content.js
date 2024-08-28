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
                        className="Personal-Logo "
                        alt="A Yin and Yang in a Celtic Knotwork design"
                        height="200"
                    />
                    <h1>Hello and Welcome to</h1>
                    <h3>Steven Martins Portfolio</h3>
                    <p>
                        I'll keep most of the information brief so you won't
                        need to read more than necessary. I'm a web developer
                        from Ohio, USA. Mainly NE Ohio, I am ready to work locally,
                        remote (home-based or locally hybrid), or relocate for the
                        right opportunity.
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