import React from "react";

function Footer() {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container text-center">
                <h5 className="fw-bold">🚗 Авто Прокат</h5>
                <p>Лучшие автомобили для аренды в городе</p>

                <div className="mb-2">
                    <p>📍 Адрес: г. Алматы, ул. Абая 100</p>
                    <p>📞 Телефон: +7 (700) 123-45-67</p>
                    <p>✉️ Email: info@autorent.kz</p>
                </div>

                <div className="d-flex justify-content-center gap-3 mb-2">
                    <a href="https://instagram.com" className="text-white text-decoration-none">
                        Instagram
                    </a>
                    <a href="https://facebook.com" className="text-white text-decoration-none">
                        Facebook
                    </a>
                    <a href="https://wa.me/77001234567" className="text-white text-decoration-none">
                        WhatsApp
                    </a>
                </div>

                <p className="mb-0">© 2025 Авто Прокат. Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;
