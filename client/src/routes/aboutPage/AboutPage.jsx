import React, { useState } from "react";
import "./aboutPage.scss";
import ContactForm from "../../components/contactForm/ContactForm";

const AboutPage = () => {
    const [isParagraphVisible, setIsParagraphVisible] = useState({});

    const toggleParagraphVisibility = (id) => {
        setIsParagraphVisible((prevStates) => ({
            ...prevStates,
            [id]: !prevStates[id],
        }));
    };

    return (
        <div className="aboutPage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="heading">About Us</h1>
                    <div className="top">
                        Welcome to TaskMate, your one-stop solution for a wide
                        range of household and professional services. Whether
                        you need a skilled carpenter, a reliable plumber, or a
                        thorough cleaning service, TaskMate is here to connect
                        you with the best professionals in the industry. Our
                        platform is designed to make your life easier by
                        providing easy access to quality services at the click
                        of a button.
                    </div>
                    <h1
                        className="subHeading"
                        onClick={() => toggleParagraphVisibility("mission")}
                    >
                        Our Mission <span className="plusMark">+</span>
                    </h1>
                    {isParagraphVisible["mission"] && (
                        <p>
                            At TaskMate, our mission is to simplify the process
                            of finding and hiring trusted service providers. We
                            understand the challenges that come with maintaining
                            a home or business, and our goal is to provide a
                            seamless and stress-free experience for our users.
                            With TaskMate, you can be confident that you are
                            hiring experienced professionals who are committed
                            to delivering excellent service.
                        </p>
                    )}
                    <h1
                        className="subHeading"
                        onClick={() => toggleParagraphVisibility("services")}
                    >
                        Our Services <span className="plusMark">+</span>
                    </h1>
                    {isParagraphVisible["services"] && (
                        <p>
                            TaskMate offers a comprehensive range of services to
                            meet your every need:
                            <ul>
                                <li>
                                    Carpentry: Custom furniture, wood repairs,
                                    and installations.
                                </li>
                                <li>
                                    Plumbing: Leak repairs, pipe installations,
                                    and emergency plumbing services.
                                </li>
                                <li>
                                    Electrical: Wiring, lighting installations,
                                    and electrical safety inspections.
                                </li>
                                <li>
                                    Painting: Interior and exterior painting,
                                    wallpapering, and color consultations.
                                </li>
                                <li>
                                    Gardening: Garden design, lawn maintenance,
                                    and plant care.
                                </li>
                                <li>
                                    Cleaning: Home deep cleaning, office
                                    cleaning, and regular maintenance.
                                </li>
                                <li>
                                    Handyman: General repairs, installations,
                                    and maintenance tasks.
                                </li>
                                <li>
                                    HVAC: Heating, ventilation, and air
                                    conditioning system maintenance and repairs.
                                </li>
                                <li>
                                    Pest Control: Extermination and prevention
                                    services for pests.
                                </li>
                                <li>
                                    Moving Services: Professional movers for
                                    home and office relocations.
                                </li>
                                <li>
                                    Appliance Repair: Fixing and maintaining
                                    household appliances.
                                </li>
                                <li>
                                    Locksmith: Lock installations, repairs, and
                                    emergency lockout services.
                                </li>
                                <li>
                                    Renovation: Home improvement, remodeling,
                                    and renovation projects.
                                </li>
                                <li>
                                    Roofing: Roof repairs, maintenance, and
                                    installations.
                                </li>
                                <li>
                                    Window Cleaning: Professional window
                                    cleaning services.
                                </li>
                                <li>
                                    IT Support: Computer and network
                                    troubleshooting and repairs.
                                </li>
                                <li>
                                    Home Security: Installation and maintenance
                                    of security systems.
                                </li>
                                <li>
                                    Pet Care: Pet sitting, grooming, and walking
                                    services.
                                </li>
                                <li>
                                    Landscaping: Full-service landscape design
                                    and maintenance.
                                </li>
                                <li>
                                    Snow Removal: Seasonal snow and ice removal
                                    services.
                                </li>
                            </ul>
                        </p>
                    )}
                    <h1
                        className="subHeading"
                        onClick={() => toggleParagraphVisibility("stories")}
                    >
                        Our Story <span className="plusMark">+</span>
                    </h1>
                    {isParagraphVisible["stories"] && (
                        <p>
                            TaskMate was born out of a simple idea: to create a
                            reliable platform where people can easily find and
                            hire skilled professionals for various tasks. We
                            noticed a gap in the market for a service that
                            brings together a diverse range of professionals
                            under one roof, and we set out to fill that gap. Our
                            team has worked tirelessly to develop a platform
                            that is user-friendly, efficient, and trustworthy.
                        </p>
                    )}
                    <h1
                        className="subHeading"
                        onClick={() => toggleParagraphVisibility("team")}
                    >
                        Meet the Team <span className="plusMark">+</span>
                    </h1>
                    {isParagraphVisible["team"] && (
                        <p>
                            TaskMate is a project developed by a dedicated group
                            of students from the Department of Computer Science
                            at the University of Ruhuna. This project was
                            undertaken as part of our second-year
                            second-semester project for the Internet Programming
                            course module. Our team members include:
                            <ul>
                                <li>Shakila Kamalasena</li>
                                <li>Chathuranga Lakmal</li>
                                <li>Pasindu Himakara</li>
                                <li>Harsha Udara</li>
                                <li>Kavindu Nimesh</li>
                            </ul>
                            We have combined our diverse skills and knowledge to
                            bring TaskMate to life, and we are proud to present
                            it to you.
                        </p>
                    )}
                    <h1
                        className="subHeading"
                        onClick={() => toggleParagraphVisibility("why")}
                    >
                        Why Choose TaskMate? <span className="plusMark">+</span>
                    </h1>
                    {isParagraphVisible["why"] && (
                        <p>
                            <ol>
                                <li>
                                    <b>Trustworthy Professionals:</b> We
                                    carefully vet all our service providers to
                                    ensure they meet our high standards of
                                    quality and reliability.
                                </li>
                                <li>
                                    <b>Convenience:</b> With TaskMate, you can
                                    book services online at your convenience,
                                    saving you time and effort.
                                </li>
                                <li>
                                    <b>Comprehensive Services:</b> Our wide
                                    range of services means you can find exactly
                                    what you need, all in one place.
                                </li>
                                <li>
                                    <b>Customer Support:</b> Our dedicated
                                    support team is always ready to assist you
                                    with any questions or concerns you may have.
                                </li>
                            </ol>
                        </p>
                    )}
                    <h1
                        className="subHeading"
                        onClick={toggleParagraphVisibility}
                    >
                        Get in Touch
                    </h1>
                    <p>
                        We would love to hear from you! If you have any
                        questions, feedback, or suggestions, please feel free to
                        contact us. Your input is invaluable in helping us
                        improve and serve you better. Thank you for choosing
                        TaskMate. We look forward to helping you with all your
                        service needs!
                    </p>
                    <ContactForm />
                </div>
            </div>
            <div className="imageContainer">
                <img src="/fullLogo.png" alt="" />
            </div>
        </div>
    );
};

export default AboutPage;
