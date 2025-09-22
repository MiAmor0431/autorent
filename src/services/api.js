// src/api/api.js
const API_URL = "http://192.168.1.8:3000/api";

// Получить все машины
export const getCars = async () => {
    try {
        const res = await fetch(`${API_URL}/cars`);
        if (!res.ok) throw new Error("Ошибка загрузки машин");

        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

// Получить машину по ID
export const getCarById = async (id) => {
    try {
        const res = await fetch(`${API_URL}/cars/${id}`);
        if (!res.ok) throw new Error("Ошибка загрузки машины");
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Создать машину (для админки)
export const createCar = async (carData) => {
    try {
        const res = await fetch(`${API_URL}/cars`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(carData),
        });
        if (!res.ok) throw new Error("Ошибка при создании машины");
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const filterCars = async (filters) => {
    try {
        const res = await fetch(`${API_URL}/cars/filter`, {
            params: filters,
        });
        return res.data;
    } catch (error){
        console.error("Ошибка при фильтрации машин:", error);
        throw error;
    }
};

export const getMarks = async () => {
    const cars = await getCars();
    const marks = cars.map(car => car.mark?.name); // ✅ берём name
    return [...new Set(marks)];
};

export const getColor = async () => {
    const cars = await getCars();
    const colors = cars.map(car => car.color?.name); // ✅ берём name
    return [...new Set(colors)];
};

export const getBodywork = async () => {
    const cars = await getCars();
    const bodyworks = cars.map(car => car.bodywork?.name); // ✅ берём name
    return [...new Set(bodyworks)];
};

export const getReleaseDate = async () => {
    const cars = await getCars();
    const releaseDates = cars.map(car => car.releaseDate); // у тебя год — число
    return [...new Set(releaseDates)];
};

export const getClass = async () => {
    const cars = await getCars();
    const classes = cars.map(car => car.class); // строка, норм
    return [...new Set(classes)];
};
