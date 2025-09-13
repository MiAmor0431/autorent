import React from 'react';

function FilterBar() {
    return (
        <div style={{ marginBottom: "20px" }}>
            <label>Фильтр по классу:</label>
            <select>
                <option value="">Все</option>
                <option value="econom">Эконом</option>
                <option value="business">Бизнес</option>
                <option value="premium">Премиум</option>
            </select>
        </div>
    );
}

export default FilterBar;
