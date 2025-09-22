import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./module.footer.css"

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer">
            <div className="container footer-top">
                {/* Лого */}
                <div className="footer-right">
                    <div className="footer-logo">
                        <h2>LUXDRIVE</h2>
                    </div>

                    {/* Навигация */}
                    <ul className="footer-nav">
                        <li>
                            <a
                                className="nav-link"
                                href="#aboutUs"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (location.pathname !== "/") {
                                        navigate("/"); // возвращаемся на главную
                                        setTimeout(() => {
                                            const aboutUs = document.getElementById("aboutUs");
                                            if (aboutUs) {
                                                aboutUs.scrollIntoView({behavior: "smooth"});
                                            }
                                        }, 200); // ждём пока отрендерится главная
                                    } else {
                                        const aboutUs = document.getElementById("aboutUs");
                                        if (aboutUs) {
                                            aboutUs.scrollIntoView({behavior: "smooth"});
                                        }
                                    }
                                }}
                            >
                                О нас
                            </a>

                        </li>
                        <li><Link className="nav-link" to="/catalog">Автопарк</Link></li>
                        <li>
                            <a
                                className="nav-link"
                                href="#bookingStages"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (location.pathname !== "/") {
                                        navigate("/"); // если мы не на главной
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
                                }}
                            >
                                Этапы
                            </a>
                        </li>
                        <li>
                            <a
                                className="nav-link"
                                href="#termSection"
                                onClick={(e) => {
                                    e.preventDefault();

                                    if (location.pathname !== "/") {
                                        navigate("/terms"); // идём на главную
                                    } else {
                                        const termSection = document.getElementById("termSection");
                                        if (termSection) {
                                            termSection.scrollIntoView({behavior: "smooth"});
                                        }
                                    }
                                }}
                            >
                                Условия
                            </a>
                        </li>
                        <li>
                            <a
                                className="nav-link"
                                href="#faqSection"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (location.pathname !== "/") {
                                        navigate("/"); // если мы не на главной
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
                                }}
                            >
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-left">
                    {/* Кнопка */}
                    <div className="footer-btn">
                        <button className="contact-btn">Связаться с нами</button>
                    </div>


                    <div className="footer-bottom">
                        <Link to="/privacy">Политика конфиденциальности</Link>
                        <Link to="/terms">Пользовательское соглашение</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
        ;
};

export default Footer;
