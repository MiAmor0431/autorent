import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SidebarLink from "../../components/common/SidebarLink.jsx"; // 👈 импортируем

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("adminId");
        navigate("/admin/login");
    };

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 p-5 flex flex-col">
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
                <nav className="flex flex-col gap-3">
                    <SidebarLink to="/admin/cars" end>
                        Cars List
                    </SidebarLink>
                    <SidebarLink to="/admin/cars/new">
                        Add Car
                    </SidebarLink>
                </nav>

                <button
                    onClick={handleLogout}
                    className="mt-auto bg-red-600 hover:bg-red-700 p-2 rounded"
                >
                    Logout
                </button>
            </aside>

            {/* Main content */}
            <section className="flex-1 p-6 overflow-y-auto">
                <Outlet />
            </section>
        </div>
    );
};

export default Dashboard;
