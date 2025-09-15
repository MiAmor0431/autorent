import React, { useEffect, useState } from "react";
import { getCars } from "../services/api";
import CarCard from "../components/carCard";

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCars();
                setCars(data);
                console.log("Машины из API:", data);
            } catch (err) {
                console.error("Ошибка загрузки:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p className="text-center mt-5">Загрузка...</p>;
    if (cars.length === 0) return <p className="text-center mt-5">Нет доступных машин</p>;

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-white">Прокат автомобилей в Алматы</h1>
            <div className="row">
                {cars.map((car) => (
                    <div className="col-md-4 mb-4" key={car._id}>
                        <CarCard car={car} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
