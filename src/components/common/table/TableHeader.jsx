import React from "react";

const TableHeader = ({ columns, sortConfig, onSort }) => {
    const getArrow = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "asc" ? "↑" : "↓";
        }
        return "";
    };

    return (
        <thead className="bg-gray-700 text-gray-200">
        <tr>
            {columns.map((col) => (
                <th
                    key={col.key}
                    className={`p-3 text-left ${
                        col.sortable ? "cursor-pointer" : ""
                    }`}
                    onClick={() => col.sortable && onSort(col.key)}
                >
                    {col.label} {col.sortable && getArrow(col.key)}
                </th>
            ))}
            <th className="p-3 text-center">Actions</th>
        </tr>
        </thead>
    );
};

export default TableHeader;
