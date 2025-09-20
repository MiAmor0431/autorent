// src/components/AboutUsSection/AboutUsSection.jsx
import React from 'react';
import './module.aboutUsSection.css'; // Подключаем стили

function AboutUsSection() {
    return (
        <section id="aboutUs" className="about-us-section">
            <div className="container">
                {/* Заголовок секции */}
                <div className="main-header">
                    <h2>
                        LuxDrive — это не просто аренда <br/>
                        премиальных автомобилей.
                    </h2>
                </div>

                {/* Основное описание */}
                <div className="main-description">
                    <p>
                        Для нас «премиум» — это не только статус, но и сервис, продуманный
                        до мелочей. Каждый клиент — VIP персона. В LuxDrive вы получаете не просто
                        ключи от машины, а эмоции и комфорт, которые запомнятся надолго.
                    </p>
                </div>

                {/* Секция с карточками-преимуществами */}
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>ЧЕСТНОСТЬ И ПРОЗРАЧНОСТЬ</h3>
                        <p>Полное отсутствие скрытых платежей, понятный договор, все условия на виду.</p>
                    </div>
                    <div className="feature-card">
                        <h3>АВТОПАРК БЕЗ КОМПРОМИССОВ</h3>
                        <p>Только автомобили не старше 3 лет, в идеальном состоянии и с безупречным салоном.</p>
                    </div>
                    <div className="feature-card">
                        <h3>ОФОРМЛЕНИЕ ЗА ЧАС</h3>
                        <p>От звонка до ключей — меньше 60 минут, без лишних формальностей.</p>
                    </div>
                    <div className="feature-card">
                        <h3>ИНДИВИДУАЛЬНЫЙ ПОДХОД</h3>
                        <p>Настраиваем условия под вас: нестандартные запросы, особые события, уникальные решения.</p>
                    </div>
                    <div className="feature-card">
                        <h3>ВАШИ ДАННЫЕ В БЕЗОПАСНОСТИ</h3>
                        <p>Мы гарантируем конфиденциальность личной информации и данных о ваших поездках.</p>
                    </div>
                    <div className="feature-card">
                        <h3>СЕРВИС 24/7</h3>
                        <p>Поддержка клиентов и помощь в любых ситуациях в любое время суток.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutUsSection;