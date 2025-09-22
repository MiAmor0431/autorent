import React, { useEffect, useState } from "react";
import {
    getCars,
    getMarks,
    getColor,
    getBodywork,
    getReleaseDate,
    getClass,
} from "../services/api";
import CarCard from "../components/carCard";
import MultiSelectField from "../components/multiSelectField";

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(6);

    // фильтры
    const [marks, setMarks] = useState([]);
    const [colors, setColors] = useState([]);
    const [bodyworks, setBodyworks] = useState([]);
    const [releaseDates, setReleaseDates] = useState([]);
    const [classes, setClasses] = useState([]);
    const [filter, setFilter] = useState(false);
    const [filterClass, setFilterClass] = useState("btn btn-light");

    // выбранные значения (массив объектов react-select)
    const [selectedMark, setSelectedMark] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
    const [selectedBodywork, setSelectedBodywork] = useState([]);
    const [selectedReleaseDate, setSelectedReleaseDate] = useState([]);
    const [selectedClass, setSelectedClass] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCars();
                setCars(data);
                setFilteredCars(data);

                setMarks(await getMarks());
                setColors(await getColor());
                setBodyworks(await getBodywork());
                setReleaseDates(await getReleaseDate());
                setClasses(await getClass());
            } catch (err) {
                console.error("Ошибка загрузки:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let result = [...cars];

        if (selectedMark.length)
            result = result.filter((c) =>
                selectedMark.some((m) => m.value === c.mark?.name)
            );

        if (selectedColor.length)
            result = result.filter((c) =>
                selectedColor.some((col) => col.value === c.color?.name)
            );

        if (selectedBodywork.length)
            result = result.filter((c) =>
                selectedBodywork.some((b) => b.value === c.bodywork?.name)
            );

        if (selectedReleaseDate.length)
            result = result.filter((c) =>
                selectedReleaseDate.some((d) => d.value === String(c.releaseDate))
            );

        if (selectedClass.length)
            result = result.filter((c) =>
                selectedClass.some((cl) => cl.value === c.class)
            );

        setFilteredCars(result);
        setVisibleCount(6);
    }, [selectedMark, selectedColor, selectedBodywork, selectedReleaseDate, selectedClass, cars]);

    if (loading)
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    if (cars.length === 0)
        return <p className="text-center mt-5">Нет доступных машин</p>;

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const handleFilter = () => {
        setFilter(!filter);
        setFilterClass(
            !filter ? "btn btn-black border-light text-light" : "btn btn-light"
        );
    };

    const handleEmpty = () => {
        setSelectedMark([]);
        setSelectedColor([]);
        setSelectedBodywork([]);
        setSelectedReleaseDate([]);
        setSelectedClass([]);
        setFilteredCars(cars);
        setVisibleCount(6);
    };

    const handleFilterChange = ({ name, value }) => {
        if (name === "mark") setSelectedMark(value);
        if (name === "color") setSelectedColor(value);
        if (name === "bodywork") setSelectedBodywork(value);
        if (name === "releaseDate") setSelectedReleaseDate(value);
        if (name === "class") setSelectedClass(value);
    };

    return (
        <div id="catalog" className="container mt-4">
            <h1 className="mb-4 text-white">Прокат автомобилей в Алматы</h1>

            {/* Кнопки фильтров */}
            <div className="mb-4 d-flex gap-2">
                <button className={filterClass} onClick={handleFilter}>
                    {filter ? "Скрыть фильтры" : "Показать фильтры"}
                </button>

                <button
                    className="btn btn-black text-light border-0"
                    onClick={handleEmpty}
                    disabled={
                        !selectedMark.length &&
                        !selectedColor.length &&
                        !selectedBodywork.length &&
                        !selectedReleaseDate.length &&
                        !selectedClass.length
                    }
                >
                    ✕ Очистить фильтры
                </button>
            </div>

            {/* Фильтры */}
            {filter && (
                <div className="row mb-4">
                    <div className="col-md-2 text-black">
                        <MultiSelectField
                            name="mark"
                            placeholder="Марка…"
                            value={selectedMark}
                            options={marks.map((m) => ({ value: m, label: m }))}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col-md-2 text-black">
                        <MultiSelectField
                            name="color"
                            placeholder="Цвет..."
                            value={selectedColor}
                            options={colors.map((c) => ({ value: c, label: c }))}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col-md-2 text-black">
                        <MultiSelectField
                            name="bodywork"
                            placeholder="Кузов..."
                            value={selectedBodywork}
                            options={bodyworks.map((b) => ({ value: b, label: b }))}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col-md-2 text-black">
                        <MultiSelectField
                            name="releaseDate"
                            placeholder="Год..."
                            value={selectedReleaseDate}
                            options={releaseDates.map((d) => ({ value: d, label: d }))}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col-md-2 text-black">
                        <MultiSelectField
                            name="class"
                            placeholder="Класс..."
                            value={selectedClass}
                            options={classes.map((cl) => ({ value: cl, label: cl }))}
                            onChange={handleFilterChange}
                        />
                    </div>
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

            {/* Кнопка "Показать больше" */}
            {visibleCount < filteredCars.length && (
                <div className="text-center mt-3">
                    <button
                        className="px-4 border-0 bg-transparent"
                        onClick={handleShowMore}
                        style={{ color: "#fff", transition: "color 0.3s" }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#adb5bd")
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                    >
                        Показать еще{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-double-down"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                            />
                            <path
                                fillRule="evenodd"
                                d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Catalog;
