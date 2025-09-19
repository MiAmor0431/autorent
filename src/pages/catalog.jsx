import React, { useEffect, useState } from "react";
import { getCars } from "../services/api";
import CarCard from "../components/carCard";

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(6);
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

    const  handleShowMore = () => {
        setVisibleCount((prev) => prev +6);
    }

    return (
        <div id="catalog" className="container mt-4">
            <h1 className="mb-4 text-white">Прокат автомобилей в Алматы</h1>
            <div className="row">
                {cars.slice(0, visibleCount).map((car) => (
                    <div className="col-md-4 mb-4" key={car._id}>
                        <CarCard car={car} />
                    </div>
                ))}
            </div>

            {/* Кнопка "Показать больше" */}
            {visibleCount < cars.length && (
                <div className="text-center mt-3">
                    <button
                        className="btn btn-outline-light px-4"
                        onClick={handleShowMore}
                    >
                        Показать больше
                    </button>
                </div>
            )}
        </div>
    );
};

export default Catalog;
