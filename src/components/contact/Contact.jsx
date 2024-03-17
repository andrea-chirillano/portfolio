import "./Contact.css";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6j4gd5h', 'template_i0ymcon', form.current, { publicKey: 'W5qpAwNWAmFDClrde' })
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully');
            }, (error) => {
                console.log(error.text);
                alert('There was an error sending the message');
            });
        setFormData({
            from_name: '',
            from_email: '',
            message: ''
        });
    };

    return (
        <div className="contact-background" id="contact">
            <div className="contact-form">
                <h2>Contact me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="from_name">Name:</label>
                        <input type="text" id="from_name" name="from_name" value={formData.from_name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="from_email">Email:</label>
                        <input type="email" id="from_email" name="from_email" value={formData.from_email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <button type="submit" value="Send">Send message</button>
                </form>
            </div>
        </div>

    );
};

export default Contact;
