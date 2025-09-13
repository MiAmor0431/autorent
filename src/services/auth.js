export async function login({ username, password }) {
    if (username === "admin" && password === "1234") {
        localStorage.setItem("token", "fake-jwt-token");
        alert("Успешный вход!");
    } else {
        alert("Неверные данные");
    }
}
