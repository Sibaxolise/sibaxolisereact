import React from 'react';
import '../styles/styles.css';

function Skills() {
    return (
        <section id="Skills">
            <div>
                <h1 className="skills-H">Skills</h1>
                <p className="slide-p">
                    The main area of expertise is front end development (client side of the web). HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress. Visit my <a href="https://www.linkedin.com/in/sibaxolise-mningiswa-76145a210/" target="_blank" rel="noopener noreferrer" className="linked">LinkedIn</a> for more details.
                </p>
            </div>
            <div className="carousel-container">
                {/* Include figures and captions here */}
            </div>
            <br />
            <div className="dot-container" style={{ textAlign: 'center' }}>
                {/* Include dots here */}
            </div>
        </section>
    );
}

export default Skills;
