import "./Contact.css";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6j4gd5h', 'template_5ljp8ds', e.target, 'W5qpAwNWAmFDClrde')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                alert('There was an error sending the message');
            });
    };

    return (
        <div className="contact-background" id="contact">
            <div className="contact-form">
            <h2>Contact me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit">Send message</button>
            </form>
            </div>
        </div>

    );
};

export default Contact;
