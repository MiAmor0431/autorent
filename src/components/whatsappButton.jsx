import React from 'react';

function WhatsappButton({ car }) {
    const message = `Здравствуйте! Я хочу забронировать ${car.name}, класс: ${car.class}, цена: ${car.price} ₸/день`;
    const url = `https://wa.me/77078095519?text=${encodeURIComponent(message)}`;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            📲 Забронировать в WhatsApp
        </a>
    );
}

export default WhatsappButton;
