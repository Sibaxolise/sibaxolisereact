import React from 'react';
import '../styles/styles.css';

function Project() {
    // Define ProjectsContainer component
    const ProjectsContainer = () => {
        // Replace this with your actual project data
        const projects = [
            {
                title: "Tornowize",
                description: "Languages used: HTML, CSS & JavaScript",
                link: "https://www.tornowize.co.za/index.html", 
            },
            {
                title: "Let's Get Braided",
                description: "Languages used: HTML, CSS & JavaScript",
                link: "https://main--singular-salamander-e061dd.netlify.app/",
            },
            {
                title: "Sweet Memories",
                description: "Languages used: HTML, CSS",
                link: "https://landing-web-page-78vr.vercel.app/",
            },
        ];

        return (
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section id="Project">
            <hr />
            <h1>Projects</h1>
            <main>
                <section className="projects-container">
                    <ProjectsContainer /> {/* Include the ProjectsContainer component here */}
                </section>
            </main>
        </section>
    );
}

export default Project;

