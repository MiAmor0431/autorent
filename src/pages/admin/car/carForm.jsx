import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCarById, createCar } from "../../../services/api.js";

const CarForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState({ name: "", pricePerDay: "" });

    useEffect(() => {
        if (id) {
            getCarById(id).then(setCar);
        }
    }, [id]);

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCar(car);
        navigate("/admin/cars");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <h1 className="text-2xl font-bold">{id ? "Edit Car" : "Add Car"}</h1>
            <input
                type="text"
                name="name"
                placeholder="Car Name"
                value={car.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <input
                type="number"
                name="pricePerDay"
                placeholder="Price Per Day"
                value={car.pricePerDay}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
                Save
            </button>
        </form>
    );
};

export default CarForm;
