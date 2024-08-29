import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <footer className="pg-footer">
            <Container>
                <Row className="text-center">
                    <Col>
                        <p>Find me on:</p>
                        <div className="footer-links">
                            <a href="https://github.com/BalancedProtector" target="_blank" rel="noopener noreferrer">
                                <img className="social-media" src="/GitHub.svg" alt="GitHub" height="32" />
                            </a>
                            <a href="https://linkedin.com/in/balancedprotector" target="_blank" rel="noopener noreferrer">
                                <img className="social-media" src="/linkedIn.svg" alt="LinkedIn" height="32" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;