const API_URL = "http://localhost:3000/api/cars";

function getAuthHeaders() {
    const token = localStorage.getItem("accessToken");
    return token
        ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
        : { "Content-Type": "application/json" };
}

// ✅ Get all cars
export async function getCars() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch cars");
    return res.json();
}

// ✅ Filter cars
export async function filterCars(params = {}) {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_URL}/filter?${query}`);
    if (!res.ok) throw new Error("Failed to filter cars");
    return res.json();
}

export const getCarById = async (id) => {
    const res = await fetch(`/api/cars/${id}`);
    if (!res.ok) throw new Error("Failed to fetch car");
    return res.json();
};

export const createCar = async (car) => {
    const res = await fetch(`/api/cars`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
    });
    return res.json();
};

export const updateCar = async (id, car) => {
    const res = await fetch(`/api/cars/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
    });
    return res.json();
};


// ✅ Delete car
export async function deleteCar(id) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
    });
    if (!res.ok) throw new Error("Failed to delete car");
    return res.json();
}
