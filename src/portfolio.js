import React from 'react';
import './portfolio.css';
import AllProjects from './all-projects.js';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>This is what im all about</h1>
            <h4>Here is where I'll give more details about each project</h4>
            <h5>And how it can benefit your company or project</h5>
            <p>
                This page was one of the first projects that I worked on, and I'm proud to say that
                I've implemented many new features and changes to the original design. You can take
                a look at how far I've advanced by checking out the older repository on my GitHub profile.
            </p>

            <p>
                I'm confident in my ability to code a functional page. However, even with
                my creative mind, I am color blind to a degree and have issues maintaining a desirable style.
                Because of this, you'll see mostly greys, whites, and blacks in my projects with a couple
                of vibrant outlines in my simpler apps like the Pokedex.
            </p>

            <p>
                This actually leads me right into that project. It took a while to get used to handling fetch
                requests when it was originally introduced to me, but look at my projects for yourself and
                you'll see a few fetch requests for external APIs like this one and a custom hosted API that
                I designed myself for the MindTheatre Project. The Pokedex app is certainly basic with simple
                outlined clickable boxes to open up details from the external API that was loaded.
            </p>

            <p>
                The MindTheatre project was definitely one of my most extensive projects to date. I created both
                an SQL version (relational) of the database and a MongoDB Atlas database (non-relational).
                The Atlas database is the one referenced in the client side of the project. It should be
                noted that the API is hosted on Heroku and is constantly running to be available to the client.
                The client side is a React app that is styled with SCSS and is designed to be user-friendly and
                intuitive. I'm proud of the work I've done on this project and I'm excited to see where it could
                lead me.
            </p>
            <hr className="divider" />
            <h2>Public projects I've worked on</h2>
            <AllProjects />
        </div>
    );
};
export default Portfolio;