import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
    return (
        <div
            className="card border-0 rounded-3 h-100 bg-dark text-white shadow-sm"
            style={{ transition: "all 0.3s ease" }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(255,255,255,0.7)";
                e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
                e.currentTarget.style.transform = "translateY(0)";
            }}
        >
            <img
                src={car.imageUrls[0]}
                alt={car.name}
                className="card-img-top rounded-top"
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">Класс: {car.class}</p>
                <p className="card-text fw-bold">
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