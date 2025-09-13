import React, { useState } from 'react';
import { login } from '../../services/auth';

function Login() {
    const [form, setForm] = useState({ username: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Админ — вход</h2>
            <input
                type="text"
                placeholder="Логин"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button type="submit">Войти</button>
        </form>
    );
}

export default Login;
