import React, { useEffect, useState } from "react";
import { getCars, deleteCar } from "../../../services/carService.js";
import Table from "../../../components/common/Table/Table.jsx";
import TableHeader from "../../../components/common//Table/TableHeader.jsx";
import TableRow from "../../../components/common//Table/TableRow.jsx";

const CarsList = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    useEffect(() => {
        loadCars();
    }, []);

    const loadCars = async () => {
        try {
            setLoading(true);
            const data = await getCars();
            setCars(data);
        } catch (err) {
            console.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Удалить эту машину?")) return;
        try {
            await deleteCar(id);
            setCars((prev) => prev.filter((car) => car._id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    const sortedCars = React.useMemo(() => {
        let sortableCars = [...cars];
        if (sortConfig.key !== null) {
            sortableCars.sort((a, b) => {
                let aVal = a[sortConfig.key];
                let bVal = b[sortConfig.key];

                if (sortConfig.key === "mark") {
                    aVal = a.mark?.name || "";
                    bVal = b.mark?.name || "";
                }
                if (sortConfig.key === "color") {
                    aVal = a.color?.name || "";
                    bVal = b.color?.name || "";
                }
                if (sortConfig.key === "bodywork") {
                    aVal = a.bodywork?.name || "";
                    bVal = b.bodywork?.name || "";
                }
                if (sortConfig.key === "class") {
                    aVal = a.class?.name || "";
                    bVal = b.class?.name || "";
                }

                if (typeof aVal === "string") {
                    aVal = aVal.toLowerCase();
                    bVal = bVal.toLowerCase();
                }

                if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
                if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
                return 0;
            });
        }
        return sortableCars;
    }, [cars, sortConfig]);

    if (loading) return <p className="text-white">Загрузка...</p>;

    const columns = [
        { key: "name", label: "Name", sortable: true },
        { key: "mark", label: "Mark", sortable: true },
        { key: "color", label: "Color", sortable: true },
        { key: "bodywork", label: "Bodywork", sortable: true },
        { key: "class", label: "Class", sortable: true },
        { key: "pricePerDay", label: "Price/Day", sortable: true },
        { key: "available", label: "Available", sortable: true },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-yellow-500">Cars List</h1>
            <Table>
                <TableHeader columns={columns} sortConfig={sortConfig} onSort={handleSort} />
                <tbody>
                {sortedCars.map((car) => (
                    <TableRow key={car._id} rowData={car} columns={columns} onDelete={handleDelete} />
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CarsList;
