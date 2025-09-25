const API_URL = "http://localhost:3000/api";

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

// Создать машину (админка)
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

