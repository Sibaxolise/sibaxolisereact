import React, { useState } from 'react';
import '../styles/styles.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data for sending email
        const data = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        };

        console.log(data); // Check the data before sending

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Email sent successfully!');
                // Optionally, clear the form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send email. Please try again later.');
        }
    };

    return (
        <div>
            <section>
                {/* NavBar */}
                <nav className="navbar" role="navigation" aria-label="main menu">
                    <ul>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="about.html#Project">Projects</a></li>
                        <li><a href="about.html#Skills">Skills</a></li>
                        <li><a href="about.html#About">Bio</a></li>
                        <li><a href="index.html">Home</a></li>
                    </ul>
                </nav>
            </section>
            <section className="form-container">
                {/* Form */}
                <form className="contact" id="contactForm" onSubmit={handleSubmit}>
                    <h1 className="form-H"><i>Contact</i></h1>
                    <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br />
                    <input id="email" name="email" type="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required /><br />
                    <input id="subject" name="subject" type="text" placeholder="Enter Subject" value={formData.subject} onChange={handleChange} required /><br />
                    <textarea id="message" name="message" row="20" cols="30" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea><br />
                    <button className="form-button" type="submit" value="Send Message">Submit</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="contact-footer">
                {/* Social links */}
                <div className="social-Media">
                    <a href="https://www.linkedin.com/in/sibaxolise-mningiswa-76145a210/" target="_blank" rel="noopener noreferrer"><img src="/images/104493_linkedin_icon.png" width="60px" height="40px" alt="" /></a>
                    <a href="mailto:sibaxolisemningiswa@gmail.com" target="_blank" rel="noopener noreferrer"><img src="/images/1147408_address book_circle_contacts_email_gmail_icon.svg" width="60px" height="40px" alt="" /></a>
                    <a href="https://github.com/Sibaxolise" target="_blank" rel="noopener noreferrer"><img src="/images/8546919_github_square_icon.png" width="60px" height="40px" alt="" /></a>
                </div>
                <div className="copywrite">
                    <p className="copywrite-p">Sibaxolise Mningiswa &#169;</p>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
