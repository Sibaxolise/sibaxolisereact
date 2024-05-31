import React, { useState } from 'react';
import '../styles/styles.css';

function Skills() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const plusSlides = (step) => {
        const newIndex = currentSlideIndex + step;
        setCurrentSlideIndex(newIndex >= 0 ? newIndex % totalSlides : totalSlides - 1);
    };

    const currentSlide = (index) => {
        setCurrentSlideIndex(index - 1);
    };

    const totalSlides = 20; 
    return (
        <section id="Skills">
            <div>
                <h1 className="skills-H">Skills</h1>
                <p className="slide-p">
                    The main area of expertise is front end development (client side of the web). HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress. Visit my <a href="https://www.linkedin.com/in/sibaxolise-mningiswa-76145a210/" target="_blank" rel="noopener noreferrer" className="linked">LinkedIn</a> for more details.
                </p>
            </div>
            <div className="carousel-container">
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/agile.png" width="150px" height="" alt="" id="firstClone" />
                <figcaption className="caption">Agile</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/scrum.png" width="150px" height="" alt="" />
                <figcaption className="caption">Scum</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/project-management.png" width="150px" height="" alt="" id="firstClone" />
                <figcaption className="caption">Project Management.png</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/data-management.png" width="150px" height="" alt="" />
                <figcaption className="caption">Database Design and management</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/software-development.png" width="150px" height="" alt="" id="firstClone" />
                <figcaption className="caption">Software Development</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/web-development.png" width="150px" height="" alt="" />
                <figcaption className="caption">Web Development</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/html-5-logo.png" width="150px" height="" alt="" id="firstClone" />
                <figcaption className="caption">HTML</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/css-3.png" width="150px" height="" alt="" />
                <figcaption className="caption">CSS</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/java-script.png" width="150px" height="" alt="" id="firstClone" />
                <figcaption className="caption">JavaScript</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/java.png" width="150px" height="" alt="" />
                <figcaption className="caption">Java</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/c-logo.png" width="150px" height="" alt="" id="firstClone" />
                <figcaption className="caption">C#</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/sql-server.png" width="150px" height="" alt="" />
                <figcaption className="caption">Sql</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/excel.png" width="150px" height="" alt="" id="firstClone" />
                <figcaption className="caption">Microsoft Excel</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/microsoft-access.png" width="150px" height="" alt="" />
                <figcaption className="caption">Microsoft Access</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/wordpress.png" width="150px" height="" alt="" id="firstClone" />
                <figcaption className="caption">Wordpress</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/docker.png" width="150px" height="" alt="" />
                <figcaption className="caption">Docker</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/git.png" width="150px" height="" alt="" id="firstClone" />
                <figcaption className="caption">Git</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/seo.png" width="150px" height="" alt="" />
                <figcaption className="caption">SEO</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/1012816_code_development_logo_nodejs_icon.png" width="150px" height="" alt="" id="firstClone" />
                <figcaption className="caption">NODEJS</figcaption>
            </figure>
            <figure className="mySlides fade">
                <img className="skill-Image" src="/images/core-value_13101876.png" width="150px" height="" alt="" />
                <figcaption className="caption">ReactJS</figcaption>
            </figure>

            <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
            <a className="next" onClick={() => plusSlides(1)}>❯</a>

            </div>
            <br />
            <div className="dot-container" style={{ textAlign: 'center' }}>
                {Array.from({ length: totalSlides }, (_, index) => (
                    <span key={index} className={`dot ${index === currentSlideIndex ? 'active' : ''}`} onClick={() => currentSlide(index + 1)}></span>
                ))}
            </div>
        </section>
    );
}

export default Skills;
