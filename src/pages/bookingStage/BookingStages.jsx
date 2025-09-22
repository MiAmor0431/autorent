// src/components/BookingStages/BookingStages.jsx
import React from 'react';
import './module.bookingStages.css';

function BookingStages() {
    return (
        <section id="bookingStages" className="booking-stages-section">
            <div className="container">
                <div className="header-grid">
                    <div className="header-title">
                        <h2>Этапы бронирования</h2>
                    </div>
                    <div className="header-description">
                        <p>
                            Мы сделали процесс аренды легким и прозрачным — от выбора авто до поездки мечты.
                        </p>
                    </div>
                </div>

                <div className="stages-grid">
                    <div className="stage-card">
                        <p className="stage-number border-bottom">01</p>
                        <h3>ВЫБОР АВТОМОБИЛЯ</h3>
                        <p className="stage-text">
                            Подберите премиальную модель из нашего автопарка и оставьте заявку.
                        </p>
                    </div>

                    <div className="stage-card">
                        <p className="stage-number border-bottom">02</p>
                        <h3>ПОДТВЕРЖДЕНИЕ ДЕТАЛЕЙ</h3>
                        <p className="stage-text">
                            Менеджер свяжется с вами, уточнит условия и предложит индивидуальные решения.
                        </p>
                    </div>

                    <div className="stage-card">
                        <p className="stage-number border-bottom">03</p>
                        <h3>ОФОРМЛЕНИЕ ДОГОВОРА</h3>
                        <p className="stage-text">
                            Подписывайте договор онлайн — все условия прозрачны и без скрытых платежей.
                        </p>
                    </div>

                    <div className="stage-card">
                        <p className="stage-number border-bottom">04</p>
                        <h3>ОПЛАТА АРЕНДЫ</h3>
                        <p className="stage-text">
                            Выбирайте удобный способ: онлайн или наличными при получении автомобиля.
                        </p>
                    </div>

                    <div className="stage-card">
                        <p className="stage-number border-bottom">05</p>
                        <h3>ДОСТАВКА АВТОМОБИЛЯ</h3>
                        <p className="stage-text">
                            Доставим авто в любое удобное место Москвы и области — в удобное для вас время и точку.
                        </p>
                    </div>

                    <div className="stage-card">
                        <p className="stage-number border-bottom">06</p>
                        <h3>НАСЛАЖДЕНИЕ ПОЕЗДКОЙ</h3>
                        <p className="stage-text">
                            Садитесь за руль и получайте удовольствие от премиального сервиса без хлопот.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookingStages;