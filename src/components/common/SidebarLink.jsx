import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, end = false, children }) => {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `relative p-2 pl-4 rounded flex items-center transition no-underline ${
                    isActive
                        ? "bg-yellow-500 text-black font-semibold"
                        : "text-white hover:bg-gray-700"
                }`
            }
        >
            {/* Индикатор активного */}
            {({ isActive }) =>
                isActive && (
                    <span className="absolute left-0 w-1 h-6 bg-yellow-400 rounded-r"></span>
                )
            }
            {children}
        </NavLink>
    );
};

export default SidebarLink;
