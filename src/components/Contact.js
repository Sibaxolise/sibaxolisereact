import React, { useState } from 'react';
import '../styles/styles.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Prepare data for sending email
        const data = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        };

        console.log(data); // Check the data before sending

        // Send data to the server
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
        <section className="form-container">
            <form className="contact" id="contactForm" onSubmit={handleSubmit}>
                <h1 className="form-H"><i>Contact</i></h1>
                <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br />
                <input id="email" name="email" type="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required /><br />
                <input id="subject" name="subject" type="text" placeholder="Enter Subject" value={formData.subject} onChange={handleChange} required /><br />
                <textarea id="message" name="message" rows="20" cols="30" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea><br />
                <button className="form-button" type="submit">Submit</button>
            </form>
        </section>
    );
};

const ContactFooter = () => {
    return (
        <footer className="contact-footer">
            <div className="social-Media">
                <a href="https://www.linkedin.com/in/sibaxolise-mningiswa-76145a210/" target="_blank" rel="noopener noreferrer"><img src="/images/104493_linkedin_icon.png" width="60px" height="40px" alt="" /></a>
                <a href="mailto:sibaxolisemningiswa@gmail.com" target="_blank" rel="noopener noreferrer"><img src="/images/1147408_address book_circle_contacts_email_gmail_icon.svg" width="60px" height="40px" alt="" /></a>
                <a href="https://github.com/Sibaxolise" target="_blank" rel="noopener noreferrer"><img src="/images/8546919_github_square_icon.png" width="60px" height="40px" alt="" /></a>
            </div>
            <div className="copywrite">
                <p className="copywrite-p">Sibaxolise Mningiswa &#169;</p>
            </div>
        </footer>
    );
};

const Contact = () => {
    return (
        <>
            <ContactForm />
            <ContactFooter />
        </>
    );
};

export default Contact;
