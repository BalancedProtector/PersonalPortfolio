import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './all-projects';
import './project-detail.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projects.find(proj => proj.id === projectId);
    if (!project) {
        return <div>Project isnt available yet or doesn't exist</div>
    }
    return (
        <div className="project-detail">
            <h1>{project.title}</h1>
            <h4>{project.description}</h4>
            <p>
                {project.activeLink ? (
                    <a href={project.activeLink} target="_blank" rel="noopener noreferrer">
                        Live Link
                    </a>
                ) : (
                    'Live site link is not available'
                )}
            </p>
            <p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                </a>
            </p>
        </div>
    );
};
export default ProjectDetail;