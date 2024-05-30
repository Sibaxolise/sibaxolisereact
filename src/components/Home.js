// src/components/Home.js
import React from 'react';
import '../styles/styles.css';

 // Assuming you move your stylesheet.css content here

const Home = () => (
  <section id="Welcome">
    <div className="welcome-div"></div>
    <div className="welcome-p">
      <h1>
        Hello, I'm <span style={{ color: '#ff2c07', textTransform: 'uppercase' }}>Sibaxolise Mningiswa</span>
      </h1>
      <p>I'm a Full-Stack Developer Intern passionate about creating innovative web solutions.</p>
      <button className="Welcome-button">
        <a href="/about">View my work</a>
      </button>
    </div>

    <footer>
      <div className="social-Media">
        <a href="https://www.linkedin.com/in/sibaxolise-mningiswa-76145a210/" target="_blank" rel="noopener noreferrer">
          <img src="/images/104493_linkedin_icon.png" width="60px" height="40px" alt="LinkedIn" />
        </a>
        <a href="mailto:sibaxolisemningiswa@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/1147408_address book_circle_contacts_email_gmail_icon.svg" width="60px" height="40px" alt="Email" />
        </a>
        <a href="https://github.com/Sibaxolise" target="_blank" rel="noopener noreferrer">
          <img src="/images/8546919_github_square_icon.png" width="60px" height="40px" alt="GitHub" />
        </a>
      </div>
    </footer>
  </section>
);

export default Home;
