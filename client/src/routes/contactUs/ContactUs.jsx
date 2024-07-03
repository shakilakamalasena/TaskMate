import React from "react";
import "./contactUs.scss";
import ContactForm from "../../components/contactForm/ContactForm";

const ContactUs = () => {
    return (
        <div className="contactUs">
            <div className="textContainer">
                <div className="wrapper">
                    <h1>Contact Us</h1>
                    <div className="top">
                        We would love to hear from you! If you have any
                        questions, feedback, or suggestions, please feel free to
                        contact us. Your input is invaluable in helping us
                        improve and serve you better. Thank you for choosing
                        TaskMate. We look forward to helping you with all your
                        service needs!
                    </div>
                    <ContactForm />
                </div>
            </div>
            <div className="imageContainer">
                <img src="/logo.png" alt="" />
                <p>&copy; 2024 TASKMATE. All rights reserved.</p>
            </div>
        </div>
    );
};

export default ContactUs;
