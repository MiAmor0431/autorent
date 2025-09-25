import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FaBars, FaTimes, FaPhone, FaTelegramPlane, FaWhatsapp} from 'react-icons/fa';
import './module.navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (<nav className="navbar-custom"> {/* Лого */}
        <div className="navbar-left"><Link className="navbar-brand" to="/"> LUXDRIVE </Link></div>
        {/* Бургер-кнопка */}
        <button className="navbar-toggler d-lg-none" onClick={() => setIsOpen(!isOpen)}> {isOpen ? <FaTimes/> :
            <FaBars/>} </button>
        {/* Меню для больших экранов */}
        <div className="navbar-center d-none d-lg-flex">
            <ul className="navbar-nav">
                <li>
                    <a className="nav-link" href="#aboutUs" onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname !== "/") {
                            navigate("/");
                            setTimeout(() => {
                                const aboutUs = document.getElementById("aboutUs");
                                if (aboutUs) {
                                    aboutUs.scrollIntoView({behavior: "smooth"});
                                }
                            }, 200);
                        } else {
                            const aboutUs = document.getElementById("aboutUs");
                            if (aboutUs) {
                                aboutUs.scrollIntoView({behavior: "smooth"});
                            }
                        }
                    }}> О нас </a>
                </li>
                <li>
                    <Link className="nav-link" to="/catalog">Автопарк</Link></li>
                <li>
                    <a className="nav-link" href="#bookingStages" onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname !== "/") {
                            navigate("/");
                            setTimeout(() => {
                                const bookingStages = document.getElementById("bookingStages");
                                if (bookingStages) {
                                    bookingStages.scrollIntoView({behavior: "smooth"});
                                }
                            }, 300);
                        } else {
                            const bookingStages = document.getElementById("bookingStages");
                            if (bookingStages) {
                                bookingStages.scrollIntoView({behavior: "smooth"});
                            }
                        }
                    }}> Этапы </a></li>
                <li>
                    <a className="nav-link" href="#termSection" onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname !== "/") {
                            navigate("/terms");
                        } else {
                            const termSection = document.getElementById("termSection");
                            if (termSection) {
                                termSection.scrollIntoView({behavior: "smooth"});
                            }
                        }
                    }}> Условия </a></li>
                <li>
                    <a className="nav-link" href="#faqSection" onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname !== "/") {
                            navigate("/");
                            setTimeout(() => {
                                const bookingStages = document.getElementById("faqSection");
                                if (bookingStages) {
                                    bookingStages.scrollIntoView({behavior: "smooth"});
                                }
                            }, 300);
                        } else {
                            const bookingStages = document.getElementById("faqSection");
                            if (bookingStages) {
                                bookingStages.scrollIntoView({behavior: "smooth"});
                            }
                        }
                    }}> FAQ </a></li>
            </ul>
        </div>


        {/* Контакты справа */}
        <div className="navbar-right d-none d-lg-flex">
            <div className="social-icons"><a href="tel:+79998887766" className="icon-circle"><FaPhone/></a> <a
                href="https://t.me/username" className="icon-circle"><FaTelegramPlane/></a> <a
                href="https://wa.me/79998887766" className="icon-circle"><FaWhatsapp/></a></div>
        </div>
        {/* Бургер-меню */} {isOpen && (<div className="burger-menu">
            <ul className="navbar-nav">
                <li><a className="nav-link" href="#aboutUs" onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                            const aboutUs = document.getElementById("aboutUs");
                            if (aboutUs) {
                                aboutUs.scrollIntoView({behavior: "smooth"});
                            }
                        }, 200);
                    } else {
                        const aboutUs = document.getElementById("aboutUs");
                        if (aboutUs) {
                            aboutUs.scrollIntoView({behavior: "smooth"});
                        }
                    }
                }}> О нас </a></li>
                <li><Link className="nav-link" to="/catalog" onClick={() => setIsOpen(false)}>Автопарк</Link></li>
                <li><a className="nav-link" href="#bookingStages" onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                            const bookingStages = document.getElementById("bookingStages");
                            if (bookingStages) {
                                bookingStages.scrollIntoView({behavior: "smooth"});
                            }
                        }, 300);
                    } else {
                        const bookingStages = document.getElementById("bookingStages");
                        if (bookingStages) {
                            bookingStages.scrollIntoView({behavior: "smooth"});
                        }
                    }
                }}> Этапы </a></li>
                <li><a className="nav-link" href="#termSection" onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    if (location.pathname !== "/") {
                        navigate("/terms");
                    } else {
                        const termSection = document.getElementById("termSection");
                        if (termSection) {
                            termSection.scrollIntoView({behavior: "smooth"});
                        }
                    }
                }}> Условия </a></li>
                <li><a className="nav-link" href="#faqSection" onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                            const faq = document.getElementById("faqSection");
                            if (faq) {
                                faq.scrollIntoView({behavior: "smooth"});
                            }
                        }, 300);
                    } else {
                        const faq = document.getElementById("faqSection");
                        if (faq) {
                            faq.scrollIntoView({behavior: "smooth"});
                        }
                    }
                }}> FAQ </a></li>
            </ul>
        </div>)} </nav>);
}

export default Navbar;