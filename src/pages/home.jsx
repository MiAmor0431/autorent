import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Авто прокат</h1>
            <p>Лучшие автомобили для аренды в городе 🚗</p>
            <Link to="/catalog">Посмотреть каталог</Link>
        </div>
    );
}

export default Home;
