import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
    return (
        <div
            className="card border-0 rounded-4 h-100 bg-dark text-white shadow-sm position-relative overflow-hidden"
            style={{ transition: "all 0.3s ease" }}
        >
            {/* Фото с эффектом зума */}
            <div className="position-relative overflow-hidden">
                <img
                    src={car.imageUrls[0]}
                    alt={car.name}
                    className="card-img-top"
                    style={{
                        height: "200px",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                    }}
                />
                <div
                    className="position-absolute bottom-0 start-0 w-100 p-2"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    }}
                >
                    <h5 className="text-white mb-0">{car.name}</h5>
                </div>

                {/* Бейдж с ценой */}
                <span className="badge bg-white text-black position-absolute top-0 end-0 m-2 px-3 py-2 fs-6">
                    {car.pricePerDay.toLocaleString()} ₸ / день
                </span>
            </div>

            {/* Контент */}
            <div className="card-body d-flex flex-column">
                <p className="card-text">Класс: {car.class}</p>

                {/* Кнопки */}
                <div className="mt-auto d-flex justify-content-between gap-2">
                    <Link
                        to={`/cars/${car._id}`}
                        className="btn btn-outline-light btn-sm w-50"
                    >
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
