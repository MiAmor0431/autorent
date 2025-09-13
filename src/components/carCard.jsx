import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
    return (
        <div className="card shadow-sm h-100">
            <img
                src={car.imageUrls[0]}
                alt={car.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">Класс: {car.class}</p>
                <p className="card-text fw-bold">
                    {car.pricePerDay.toLocaleString()} ₸ / день
                </p>
                <div className="mt-auto d-flex justify-content-between">
                    <Link to={`/cars/${car._id}`} className="btn btn-outline-primary btn-sm">
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
