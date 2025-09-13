import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h1>Админ-панель</h1>
            <nav>
                <Link to="cars">Машины</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Dashboard;
