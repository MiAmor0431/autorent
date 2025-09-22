// src/components/FaqSection/FaqSection.jsx
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./module.faqSection.css";

const faqData = [
    {
        question: "Какие документы нужны для аренды автомобиля?",
        answer: "Паспорт и водительское удостоверение категории B со стажем не менее 3 лет. Для иностранцев — загранпаспорт и международное водительское удостоверение."
    },
    {
        question: "Сколько времени занимает оформление?",
        answer: "Обычно процесс занимает не более 15–20 минут при наличии всех необходимых документов."
    },
    {
        question: "Есть ли ограничения по возрасту и стажу водителя?",
        answer: "Минимальный возраст арендатора — 21 год, минимальный стаж — 3 года."
    },
    {
        question: "Что включено в стоимость аренды и какие могут быть дополнительные платежи?",
        answer: "В стоимость включено базовое страхование и техническая поддержка. Дополнительно может взиматься плата за превышение лимита пробега, топливо или доставку."
    },
    {
        question: "Что делать, если с автомобилем что-то случится во время аренды?",
        answer: "Необходимо связаться с нашей службой поддержки, указанной в договоре, и следовать инструкциям."
    },
    {
        question: "Можно ли отменить или изменить бронь?",
        answer: "Да, изменения и отмена возможны в соответствии с условиями аренды. Подробности указаны в договоре."
    }
];

function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqSection" className="faq-section">
            <div className="container">
                <h2 className="faq-title">FAQ</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? "open" : ""}`}
                            onClick={() => toggleQuestion(index)}
                        >
                            <div className="faq-question">
                                <span>{item.question}</span>
                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                            </div>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FaqSection;
