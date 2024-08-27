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
                        remote (home-based or locally hybrid), or relocate for the right opportunity.
                    </p>

                </Col>
            </Row>
        </Container>
    );
};

export default HomeContent;