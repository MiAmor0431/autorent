import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // ✅

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Заполните все поля");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/auth/signInWithPassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Ошибка авторизации");
                return;
            }

            // save tokens
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("adminId", data.adminId);


            // ✅ useNavigate instead of window.location.href
            navigate("/admin");
        } catch (err) {
            setError("Сервер недоступен");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-black text-white">
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl w-96">
                <h2 className="text-2xl font-bold mb-6">Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700"
                />

                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700"
                />

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

export default Login;
