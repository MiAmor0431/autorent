import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/hero-section.jpg';
import Catalog from "./catalog.jsx";
import Features from "./features.jsx";
import HowItWorks from "./howItWorks.jsx";

function Home() {
    return (
        <div>
            <div className="hero-section position-relative text-white">
                {/* Фон */}
                <img
                    src={image}
                    alt="car"
                    className="bg-image w-100 h-100 position-absolute top-0 start-0"
                    style={{ objectFit: "cover", zIndex: 0 }}
                />

                {/* Overlay */}
                <div
                    className="overlay position-absolute top-0 start-0 w-100 h-100"
                    style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1 }}
                ></div>

                {/* Контент */}
                <div className="container position-relative py-5 mt-5" style={{ zIndex: 2 }}>
                    <div className="row  min-vh-100">
                        <div className="col-lg-6 text-start">
                            <h2 className="fw-semibold mb-3" style={{ fontSize: "2.2rem" }}>
                                Премиум — это не цена, <br /> это отношение
                            </h2>
                            <p className="mb-4" style={{ fontSize: "1.1rem" }}>
                                Аренда премиальных автомобилей с доставкой по городу за 60 минут —
                                комфорт и статус без компромиссов.
                            </p>
                        </div>

                        <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
                            <ul className="list-unstyled fs-5">
                                <li className="mb-1">Доставка за 60 минут</li>
                                <li className="mb-1">30+ премиальных моделей</li>
                                <li className="mb-1">Поддержка 24/7</li>
                            </ul>
                            <Link to="/catalog" className="btn btn-light text-center btn-lg px-4 rounded-5">
                                Выбрать авто
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


            <Catalog />
            <Features />
            <HowItWorks />

            {/* Стили анимации */}
            <style>{`
                .animate-fade {
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInUp 1s ease forwards;
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade[style*="animation-delay"] {
                    animation-fill-mode: forwards;
                }
            `}</style>
        </div>
    );
}

export default Home;
