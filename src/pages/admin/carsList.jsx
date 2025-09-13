// src/components/CarList.jsx
import React, { useEffect, useState } from "react";
import { getCars } from "../../services/api";

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCars();
            setCars(data);
            setLoading(false);
        };
        fetchData();

    }, []);


    if (loading) return <p className="text-center text-lg">Загрузка...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {cars.map((car) => (
                <div
                    key={car._id}
                    className="border rounded-2xl shadow-lg p-4 bg-white hover:shadow-2xl transition"
                >
                    <img
                        src={car.imageUrls[0]}
                        alt={car.name}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    <h2 className="text-xl font-bold mt-3">{car.name}</h2>
                    <p className="text-gray-600">{car.class}</p>
                    <p className="text-gray-500">
                        {car.transmission} • {car.drive}
                    </p>
                    <p className="text-lg font-semibold text-blue-600 mt-2">
                        {car.pricePerDay.toLocaleString()} ₸ / день
                    </p>
                    <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                        Арендовать
                    </button>
                </div>
            ))}
        </div>
    );
};

export default CarList;
