import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
            const logoElement = document.querySelector('.navbar-brand');
            const navbarMenu = document.querySelector('.navbar-menu');
            if (logoElement && navbarMenu) {
                const logoBottom = logoElement.getBoundingClientRect().bottom;
                if (logoBottom < 0) {
                    navbarMenu.style.position = 'fixed';
                    navbarMenu.style.top = '0';
                } else {
                    navbarMenu.style.position = 'absolute';
                    navbarMenu.style.top = '70px';
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const dropdown = document.querySelector('.dropdown');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        let timeout;
        const handleMouseEnter = () => {
            clearTimeout(timeout);
            dropdownMenu.style.display = 'block';
        };
        const handleMouseLeave = () => {
            timeout = setTimeout(() => {
                dropdownMenu.style.display = 'none';
            }, 400);
        };
        if (dropdown && dropdownMenu) {
            dropdown.addEventListener('mouseenter', handleMouseEnter);
            dropdown.addEventListener('mouseleave', handleMouseLeave);
            dropdownMenu.addEventListener('mouseenter', handleMouseEnter);
            dropdownMenu.addEventListener('mouseleave', handleMouseLeave);
        }
    })
    return (
        <header className="custom-navbar">
            <div className="navbar-brand">
                <a href="/">
                    <img
                        src="/Name-Logo-200x70.svg"
                        alt="A stylized logo of the text 'Steven Martin'"
                        height="70"
                    />
                </a>
            </div>
            <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li className="dropdown">
                        <a href="/portfolio" className="dropdown-toggle">Portfolio</a>
                        <ul className="dropdown-menu">
                            <li><a href="/portfolio/project1">Porfolio Site</a></li>
                            <li><a href="/portfolio/project2">To-Do-List JS App</a></li>
                            <li><a href="/portfolio/project3">Basic Pokedex</a></li>
                            <li><a href="/portfolio/project4">MindTheatre Backend</a></li>
                            <li><a href="/portfolio/project5">MindTheatre Frontend</a></li>
                            <li className="divider"></li>
                            <li><a href="/portfolio/all">All Projects</a></li>
                        </ul>
                    </li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
    );
};


export default Header;