import { motion } from "framer-motion";
import image from "../../assets/gemin.png";
import Catalog from "../catalog.jsx";
import Features from "../features.jsx";
import "./module.homepage.css";
import AboutUsSection from "../aboutUs/AboutUsSection.jsx";
import BookingStages from "../bookingStage/BookingStages.jsx";
import TermsSection from "../termsSection/TermsSection.jsx";
import FaqSection from "../FaqSection/FaqSection.jsx";

// Заголовок, который будет анимирован
const heroTitle = "Премиум — это не цена, это отношение.";

function Home() {
    // Разбиваем заголовок на буквы для анимации
    const titleChars = heroTitle.split("");

    return (
        <div id="top" style={{background: "black"}}>
            <div className="hero-section position-relative text-white">
                <img src={image} alt="car" className="bg-image w-100 h-100"/>
                <div className="overlay"></div>

                {/* Главный контент слева */}
                <div className="content-left">
                    <h1 className="hero-title">
                        {titleChars.map((char, i) => (
                            <motion.span
                                key={char + i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.1, delay: i * 0.05 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>

                    <p className="description mb-4">
                        Аренда премиальных автомобилей с доставкой по Almaty за 60 минут — комфорт и статус без компромиссов.
                    </p>
                </div>

                {/* Описание фишек справа */}
                <div className="features-right">
                    <ul>
                        <li><span className="dot"></span> Доступные цены</li>
                        <li><span className="dot"></span> Страховка включена</li>
                        <li><span className="dot"></span> Быстрое оформление</li>
                    </ul>


                    {/* 🔥 Новые карточки справа */}
                    <div className="extra-right">
                        <div className="extra-card">
                            <h3>24/7 Поддержка</h3>
                            <p>Мы всегда на связи</p>
                        </div>
                        <div className="extra-card">
                            <h3>Без залога</h3>
                            <p>Честные условия аренды</p>
                        </div>
                        <div className="extra-card">
                            <h3>Премиум авто</h3>
                            <p>Лучшие модели города</p>
                        </div>
                        <div className="extra-card">
                            <h3>Доставка</h3>
                            <p>Машина к вашему дому</p>
                        </div>
                    </div>
                </div>

            </div>
            <Catalog/>
            <AboutUsSection/>
            <Features/>
            <BookingStages/>
            <TermsSection/>
            <FaqSection/>
        </div>
    );
}

export default Home;