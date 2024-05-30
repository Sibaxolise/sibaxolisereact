import React from 'react';
import Navbar from './Navbar'; // Adjust the path according to your project structure
import '../styles/styles.css';

function About() {
    return (
        <section id="About">
            <Navbar />
            <div className="About">
                <h1>About</h1>
                <div className="my-About">
                    <p className="about-p">
                        "Hello there! I'm <span className="name">Sibaxolise</span>, a dedicated student deeply passionate about web development. Currently honing my craft in HTML and CSS, I'm on a journey to master the art of front-end development. Driven by my ambitious goals, I thrive on the challenge of learning new concepts and techniques in the ever-evolving world of technology.

                        Beyond the screen, I find solace in the pages of captivating novels, where stories ignite my imagination and fuel my creativity. As I embark on this exciting journey, I'm eagerly seeking opportunities to contribute to innovative projects and collaborate with fellow developers who share my enthusiasm for pushing boundaries and creating meaningful experiences.

                        Curious to see what I've been working on? Feel free to explore my portfolio and discover the projects that reflect my dedication and passion. Let's connect and embark on this journey together, weaving code into captivating digital experiences!"
                    </p>
                </div>
                <div className="stickers">
                    <figure>
                        <img className="aboutImg" src="/images/confidence.png" width="150px" height="" alt="" />
                        <figcaption className="fcaption">Confidence</figcaption>
                    </figure>

                    <figure>
                        <img className="aboutImg" src="/images/time-management.png" width="150px" height="" alt="" />
                        <figcaption className="fcaption">Time Management</figcaption>
                    </figure>

                    <figure>
                        <img className="aboutImg" src="/images/idea.png" width="150px" height="" alt="" />
                        <figcaption className="fcaption">Innovative</figcaption>
                    </figure>

                    <figure>
                        <img className="aboutImg" src="/images/team.png" width="150px" height="" alt="" />
                        <figcaption className="fcaption">Team Player</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default About;
