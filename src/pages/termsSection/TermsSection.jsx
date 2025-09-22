// src/components/TermsSection/TermsSection.jsx
import React from 'react';
import './module.termsSection.css';
import {useNavigate} from "react-router-dom";

function TermsSection() {
    const navigate = useNavigate();
    return (
        <section id="termSection" className="terms-section">
            <div className="container">
                <div className="terms-grid">
                    {/* Left Column: Main Title and Description */}
                    <div className="terms-left">
                        <h2 className="section-title">Минимальные условия аренды</h2>
                        <div className="terms-desc">
                            <p className="section-description">
                                Полный список условий вы найдете <br/>
                                на отдельной странице.
                            </p>
                            <button onClick={()=> navigate("/terms")} className="button-terms">Смотреть все условия</button>
                        </div>
                    </div>

                    {/* Right Column: List of Terms */}
                    <div className="terms-right">
                        <div className="term-item">
                            <p className="term-value">от 21 года</p>
                            <p className="term-description">Минимальный возраст</p>
                        </div>
                        <div className="term-item">
                            <p className="term-value">от 3 лет</p>
                            <p className="term-description">Минимальный стаж</p>
                        </div>
                        <div className="term-item">
                            <p className="term-value">2 документа</p>
                            <p className="term-description">
                                Паспорт и водительское удостоверение категории B, действующее не менее 3 лет.
                                Для иностранцев — загранпаспорт и международное водительское удостоверение.
                            </p>
                        </div>
                        <div className="term-item">
                            <p className="term-value">от 30 000₽</p>
                            <p className="term-description">
                                Залог блокируется на карте или вносится наличными при получении. Размер зависит
                                от модели — от 30 000 до 300 000 ₽. Возвращается при соблюдении условий аренды.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TermsSection;