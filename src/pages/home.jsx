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
                <img src={image} alt="car" className="bg-image w-100 h-100"/>

                {/* затемнение */}
                <div className="overlay"></div>

                {/* контент */}
                <div className="content position-absolute top-50 start-50 translate-middle text-center">
                    <h1 className="mb-3">Авто прокат</h1>
                    <p className="mb-4">Лучшие автомобили для аренды в городе 🚗</p>
                    <Link to="/catalog" className="btn btn-light">
                        Посмотреть каталог
                    </Link>
                </div>

            </div>
            <Catalog />
            <Features />
            <HowItWorks />
        </div>
    );
}

export default Home;