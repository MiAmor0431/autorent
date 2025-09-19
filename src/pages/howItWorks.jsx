import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCar, FaPhoneAlt, FaKey, FaSmile } from "react-icons/fa";

function HowItWorks() {
    const steps = [
        { number: 1, text: "Выберите авто", icon: <FaCar size={30} /> },
        { number: 2, text: "Забронируйте онлайн или по телефону", icon: <FaPhoneAlt size={30} /> },
        { number: 3, text: "Получите ключи в удобное время", icon: <FaKey size={30} /> },
        { number: 4, text: "Наслаждайтесь поездкой", icon: <FaSmile size={30} /> },
    ];

    return (
        <section className="py-5 bg-black text-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Как это работает?</h2>
                    <p className="text-secondary">
                        Всего несколько простых шагов до вашего идеального автомобиля
                    </p>
                </div>
                <Row className="text-center">
                    {steps.map((step, index) => (
                        <Col md={3} sm={6} key={index} className="mb-4">
                            <div className="d-flex flex-column align-items-center">
                                <div
                                    className="rounded-circle bg-light text-dark fw-bold d-flex align-items-center justify-content-center mb-3"
                                    style={{ width: "60px", height: "60px" }}
                                >
                                    {step.icon}
                                </div>
                                <h5 className="fw-semibold">{step.text}</h5>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default HowItWorks;
