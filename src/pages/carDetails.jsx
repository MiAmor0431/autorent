import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById } from '../services/api';
import WhatsappButton from '../components/whatsappButton';

function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        getCarById(id).then(setCar);
    }, [id]);

    if (!car) return <p>Загрузка...</p>;

    return (
        <div>
            <h2>{car.name}</h2>
            <p>Класс: {car.class}</p>
            <p>Цена: {car.price} ₸/день</p>
            <WhatsappButton car={car} />
        </div>
    );
}

export default CarDetails;
