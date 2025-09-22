import {Link, useNavigate} from "react-router-dom";

const CarCard = ({ car }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/cars/${car._id}`);
    }
    return (
        <div
            className="card border-1 rounded-4 h-100 bg-dark text-white position-relative overflow-hidden"
            style={{
                transition: "all 0.3s ease",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" // дефолтная тень
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(255, 255, 255, 0.7)"; // белая тень при hover
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(0, 0, 0, 0.5)"; // обычная тёмная тень
            }}
            onClick={
                () =>handleClick()
            }
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
                <p className="card-text"> {car.class}</p>
            </div>
            <div className="card-footer justify-content-between d-flex text">
                <p className="card-text"><small className="text-body-light">{car.drive}</small></p>
                <p className="card-text"><small className="text-body-light">{car.fuel}</small></p>
                <p className="card-text"><small className="ttext-body-light">{car.transmission}</small></p>
            </div>
        </div>

    );
};

export default CarCard;
