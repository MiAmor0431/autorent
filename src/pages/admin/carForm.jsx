import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCar } from '../../services/api';

function CarForm() {
    const [car, setCar] = useState({ name: '', price: '', class: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCar(car);
        navigate('/admin/cars');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Добавить/Редактировать машину</h2>
            <input
                type="text"
                placeholder="Название"
                value={car.name}
                onChange={(e) => setCar({ ...car, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Цена"
                value={car.price}
                onChange={(e) => setCar({ ...car, price: e.target.value })}
            />
            <input
                type="text"
                placeholder="Класс"
                value={car.class}
                onChange={(e) => setCar({ ...car, class: e.target.value })}
            />
            <button type="submit">Сохранить</button>
        </form>
    );
}

export default CarForm;
