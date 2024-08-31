import React from 'react';
import { Link } from 'react-router-dom';
import "./all-projects.css";
const projects = [
    {
        id: 'project1',
        title: 'Portfolio Site',
        description: `The site I use to showcase my history, abilities, and completed 
        projects to friends, family, and potential employers or clients. This project 
        has completed three revisions, the first being simple HTML and CSS and is no 
        longer deployed, the second being the prototype for the current and third version
        which you are currently viewing. The third version is a React app mainly utilizing 
        Javascript and HTML, styled with CSS. This version focused on implementing new 
        technologies and features learned while building other projects. This site is hosted 
        on Vercel and is actively monitored and updated with my currently public projects. 
        Privacy is always at the forefront of my mind, so I've made sure to keep unfinished 
        or personal projects private until they are ready to be shared or purchased. 
        To me this site is a living resume, showcasing my abilities, projects, and skills.`,
        activeLink: 'https://stevemartin.vercel.app',
        githubLink: 'https://github.com/BalancedProtector/PersonalPortfolio'
    },
    {
        id: 'project2',
        title: 'To Do List App',
        description: `Very simple To Do List App created using HTML, JS, and CSS. The App
        wasn't meant to be pretty or complex, but showcase simple functionality and ability
        to use local storage to save data. This project shows that not only are complex pages
        or apps like the ones to follow within my abilities, but also simple ones that are 
        useful and functional / open to creative design.`,
        githubLink: 'https://github.com/BalancedProtector/To-Do-List-App'
    },
    {
        id: 'project3',
        title: 'Basic Pokedex',
        description: `Utilizing an external API source, this project aims to showcase
        more diverse abilities and knowledge of coding, including more advanced JavaScript. 
        Grabbing individual Pokemon or datasets, extracting certain pieces of information, 
        and displaying them in a readable format. Using minification and a couple other 
        external tools like promise methods, in this app's case, Polyfill to ensure every 
        platform gets the same experience. While the page doesn't look like much when run, 
        it demonstrates the ability to use external sources, manipulate data, and display 
        it in a readable format. After cloning the app from GitHub, try changing the number
        of Pokemon the app grabs and see the different pokemon displayed in real time utilizing
        a live test server.`,
        githubLink: 'https://GitHub.com/BalancedProtector/Basic-Pokedex'
    },
    {
        id: 'project4',
        title: 'MindTheatre Database or Backend',
        description: `MindTheatre is the name of the full stack site developed to showcase the largest
        project I've completed to date. This API was built using Node, Express, Heroku, MongoDB, 
        and MongoDB Atlas. Written primarily in JavaScript with a few pages of HTML and CSS, 
        this API is secured by bcrypt, OAuth, and Passport. The API is hosted on Heroku 
        actively, so the next project is constantly up and running.`,
        activeLink: 'https://mind-theatre-api-dc69e2dcb161.herokuapp.com/',
        githubLink: 'https://GitHub.com/BalancedProtector/Movie_API'
    },
    {
        id: 'project5',
        title: 'MindTheatre Frontend',
        description: `MindTheatre is a web application designed to offer users an immersive 
        experience in exploring and engaging with a curated collection of movies. 
        Built with React and styled with SCSS, it provides a sleek, responsive interface 
        for movie enthusiasts. The app is designed to be user-friendly and intuitive. You can 
        run the app in a live test server after cloning the app from GitHub, and it'll 
        automatically connect to the API.`,
        githubLink: 'https://github.com/BalancedProtector/MindTheatre-Client'
    }

];
const AllProjects = () => {
    return (
        <div className="all-projects">
            {projects.map(project => (
                <div key={project.id} className="project">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <Link to={`/projects/${project.id}`}>View Details and Links</Link>
                </div>
            ))}
        </div>
    )
};
export { AllProjects as default, projects };
