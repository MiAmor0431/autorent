import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ShieldCheck, Truck, CarFront, Headset } from "react-bootstrap-icons";

function Features() {
    const items = [
        { icon: <ShieldCheck size={40} />, text: "Без залога" },
        { icon: <Truck size={40} />, text: "Доставка авто в любую точку города" },
        { icon: <CarFront size={40} />, text: "Новые и чистые автомобили" },
        { icon: <Headset size={40} />, text: "Поддержка 24/7" },
    ];

    return (
        <section className="py-5 bg-black text-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Почему выбирают нас?</h2>
                    <p className="text-secondary">
                        Мы делаем аренду авто простой, удобной и доступной для каждого клиента
                    </p>
                </div>
                <Row className="text-center">
                    {items.map((item, index) => (
                        <Col md={3} sm={6} key={index} className="mb-4">
                            <div className="d-flex flex-column align-items-center">
                                <div className="mb-3 text-white">{item.icon}</div>
                                <p className="fw-semibold">{item.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

    );
}

export default Features;
