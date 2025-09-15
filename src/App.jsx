import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Catalog from './pages/catalog';
import CarDetails from './pages/carDetails';
import Login from './pages/admin/login';
import CarsList from './pages/admin/carsList';
import CarForm from './pages/admin/carForm';
import Dashboard from './pages/admin/dashboard';
import NotFound from './pages/notFound';
import Navbar from './components/NavBar';
import Footer from './components/footer';

function App() {
    return (
        <>

            <main style={{ minHeight: "80vh"  }} className="bg-black">

                    <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/car/:id" element={<CarDetails />} />

                    {/* Admin */}
                    <Route path="/admin/login" element={<Login />} />
                    <Route path="/admin" element={<Dashboard />}>
                        <Route path="cars" element={<CarsList />} />
                        <Route path="cars/new" element={<CarForm />} />
                        <Route path="cars/:id/edit" element={<CarForm />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
