import React, { useEffect, useState, useMemo } from "react";
import { getCars } from "../services/api";
import { getUniqueValues, applyFilters } from "../utils/filterUtils";
import CarCard from "../components/CarCard";
import MultiSelectField from "../components/MultiSelectField";

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(6);
    const [showFilters, setShowFilters] = useState(false);

    // выбранные фильтры
    const [filters, setFilters] = useState({
        mark: [],
        color: [],
        bodywork: [],
        releaseDate: [],
        class: [],
    });

    useEffect(() => {
        getCars().then((data) => {
            setCars(data);
            setLoading(false);
        });
    }, []);

    // уникальные значения для фильтров
    const options = useMemo(() => ({
        mark: getUniqueValues(cars, "mark", true),
        color: getUniqueValues(cars, "color", true),
        bodywork: getUniqueValues(cars, "bodywork", true),
        releaseDate: getUniqueValues(cars, "releaseDate"),
        class: getUniqueValues(cars, "class"),
    }), [cars]);

    // применённые фильтры
    const filteredCars = useMemo(() => applyFilters(cars, filters), [cars, filters]);

    const handleFilterChange = ({ name, value }) => {
        setFilters((prev) => ({ ...prev, [name]: value }));
        setVisibleCount(6);
    };

    const resetFilters = () => {
        setFilters({ mark: [], color: [], bodywork: [], releaseDate: [], class: [] });
        setVisibleCount(6);
    };

    if (loading)
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    if (!cars.length) return <p className="text-center mt-5">Нет доступных машин</p>;

    return (
        <div id="catalog" className="container mt-4">
            <h1 className="mb-4 text-white">Прокат автомобилей в Алматы</h1>

            {/* Кнопки фильтрации */}
            <div className="mb-4 d-flex gap-2">
                <button
                    className={`btn ${showFilters ? "btn-dark" : "btn-light"}`}
                    onClick={() => setShowFilters((prev) => !prev)}
                >
                    {showFilters ? "Скрыть фильтры" : "Показать фильтры"}
                </button>

                <button
                    className="btn btn-dark text-light border-0"
                    onClick={resetFilters}
                    disabled={Object.values(filters).every((arr) => !arr.length)}
                >
                    ✕ Очистить фильтры
                </button>
            </div>

            {/* Блок фильтров */}
            {showFilters && (
                <div className="row mb-4">
                    {Object.keys(filters).map((key) => (
                        <div className="col-md-2 text-black" key={key}>
                            <MultiSelectField
                                name={key}
                                placeholder={key + "..."}
                                value={filters[key]}
                                options={options[key].map((val) => ({ value: val, label: val }))}
                                onChange={handleFilterChange}
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Список машин */}
            <div className="row">
                {filteredCars.slice(0, visibleCount).map((car) => (
                    <div className="col-md-4 mb-4" key={car._id}>
                        <CarCard car={car} />
                    </div>
                ))}
            </div>

            {/* Показать ещё */}
            {visibleCount < filteredCars.length && (
                <div className="text-center mt-3">
                    <button
                        className="px-4 border-0 bg-transparent"
                        onClick={() => setVisibleCount((v) => v + 6)}
                        style={{ color: "#fff", transition: "color 0.3s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#adb5bd")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                    >
                        Показать ещё ↓
                    </button>
                </div>
            )}
        </div>
    );
};

export default Catalog;
