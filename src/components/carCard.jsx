import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
    return (
        <div className="card border-dark rounded-3 h-100">
            <img
                src={car.imageUrls[0]}
                alt={car.name}
                className="card-img-top "
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column bg-dark rounded-bottom">
                <h5 className="card-title text-white">{car.name}</h5>
                <p className="card-text text-white">Класс: {car.class}</p>
                <p className="card-text fw-bold text-white">
                    {car.pricePerDay.toLocaleString()} ₸ / день
                </p>
                <div className="mt-auto d-flex justify-content-between">
                    <Link to={`/cars/${car._id}`} className="btn btn-outline-light btn-sm">
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;