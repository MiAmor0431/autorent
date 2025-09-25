// Получить уникальные значения по ключу
export const getUniqueValues = (cars, key, nested = false) => {
    const values = cars.map((c) =>
        nested ? c[key]?.name : c[key]
    ).filter(Boolean);

    return [...new Set(values)];
};

// Применить фильтры
export const applyFilters = (cars, filters) => {
    return cars.filter((car) => {
        return Object.entries(filters).every(([key, selected]) => {
            if (!selected.length) return true;
            const carValue = key === "releaseDate" ? String(car[key]) :
                (car[key]?.name || car[key]);
            return selected.some((sel) => sel.value === carValue);
        });
    });
};
