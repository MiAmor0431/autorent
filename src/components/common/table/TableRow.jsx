import React from "react";
import { useNavigate } from "react-router-dom";

const TableRow = ({ rowData, columns, onDelete }) => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate(`/admin/cars/${rowData._id}/edit`);
    };

    return (
        <tr
            className="border-t border-gray-700 hover:bg-gray-700 cursor-pointer"
            onClick={handleRowClick}
        >
            {columns.map((col) => {
                let value = rowData[col.key];

                if (col.key === "mark") value = rowData.mark?.name || "-";
                if (col.key === "color") value = rowData.color?.name || "-";
                if (col.key === "bodywork") value = rowData.bodywork?.name || "-";
                if (col.key === "class") value = rowData.class?.name || "-";
                if (col.key === "available") {
                    value = rowData.available ? (
                        <span className="px-2 py-1 text-xs rounded bg-green-600">Yes</span>
                    ) : (
                        <span className="px-2 py-1 text-xs rounded bg-red-600">No</span>
                    );
                }
                if (col.key === "pricePerDay") value = `$${rowData.pricePerDay}`;

                return (
                    <td key={col.key} className="p-3">
                        {value}
                    </td>
                );
            })}

            <td className="p-3 text-center">
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // prevent row navigation
                        onDelete(rowData._id);
                    }}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TableRow;
