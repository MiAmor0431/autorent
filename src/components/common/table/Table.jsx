import React from "react";

const Table = ({ children }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-700 bg-gray-800 text-white rounded-lg">
                {children}
            </table>
        </div>
    );
};

export default Table;
