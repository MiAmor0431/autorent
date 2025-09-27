import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/homePage/home';
import Catalog from './pages/catalog';
import CarDetails from './pages/carDetails.jsx';
import Login from './auth/login.jsx';
import CarsList from './pages/admin/car/carsList.jsx';
import CarForm from './pages/admin/car/carForm.jsx';
import Dashboard from './pages/admin/dashboard';
import NotFound from './pages/notFound';
import Navbar from './components/navbar/NavBar';
import Footer from './pages/footer/Footer.jsx';
import TermsPage from "./pages/termsSection/TermsPage.jsx";
import PrivateRoute from "./auth/PrivateRoute.jsx";

function App() {
    const location = useLocation();

    // ✅ Check if we are in admin panel
    const isAdminRoute = location.pathname.startsWith("/admin");

    return (
        <>
            <main style={{ paddingTop: isAdminRoute ? "0" : "60px" }} className="bg-black">
                {/* ✅ Show Navbar/Footer only for public pages */}
                {!isAdminRoute && <Navbar />}

                <Routes>
                    {/* Public */}
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/cars/:id" element={<CarDetails />} />
                    <Route path="/terms" element={<TermsPage />} />

                    {/* Admin */}
                    <Route path="/admin/login" element={<Login />} />
                    <Route
                        path="/admin/*"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    >
                        <Route path="cars" element={<CarsList />} />
                        <Route path="cars/new" element={<CarForm />} />
                        <Route path="cars/:id/edit" element={<CarForm />} />
                    </Route>

                    {/* 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            {!isAdminRoute && <Footer />}
        </>
    );
}

export default App;
