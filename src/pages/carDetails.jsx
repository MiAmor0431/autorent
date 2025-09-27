import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById } from '../services/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import TermsSection from "./termsSection/TermsSection.jsx";
import { BellFill, CarFront } from "react-bootstrap-icons";
// Assuming ShieldCheck was replaced by CarFront for the second card based on the new image.
function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        getCarById(id).then(carData => {
            if (carData) {
                setCar(carData);
            }
        });
    }, [id]);

    if (!car)
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    const bookingPrices = {
        '1 сутки': `${car.pricePerDay}₸`,
// Добавь сюда другие варианты цен, если они будут. Например:
// '3 суток': `${car.pricePerDay * 3 * 0.95}₸`,
// '7 суток': `${car.pricePerDay * 7 * 0.9}₸`,
    };

    return (
        <div className="bg-black text-white p-4">
            {/* Header Section */}
            <header className="container my-5">
                <div className="row align-items-center mb-2">
                    {/* Название и описание */}
                    <div className="col-12 col-md-8 mb-3 mb-md-0 text-center text-md-start">
                        <h1 className="display-6 fw-bold">{car.name}</h1>
                        <p className="lead">{car.bodywork.name}, {car.color.name}</p>
                    </div>

                    {/* Цена и кнопка */}
                    <div className="col-12 col-md-4 text-center text-md-end">
                        <p className="fs-5 fw-bold mb-2">
                            {car.pricePerDay.toLocaleString("ru-RU")}₸ / сутки
                        </p>
                        <button className="btn btn-light rounded-pill px-4 py-2 fw-bold w-100 w-md-auto">
                            Забронировать
                        </button>
                    </div>
                </div>

                {/* Галерея */}
                <div className="gallery-container">
                    <Swiper
                        modules={[Navigation, Thumbs]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={true}
                        thumbs={{swiper: thumbsSwiper}}
                        className="main-swiper"
                    >
                        {car.imageUrls.map((url, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={url}
                                    alt={`Фото ${index + 1}`}
                                    style={{
                                        width: "100%",
                                        maxHeight: "600px", // меньше на мобилке
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Превью */}
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        modules={[Navigation, Thumbs]}
                        watchSlidesProgress
                        className="thumbs-swiper mt-3"
                        breakpoints={{
                            0: {slidesPerView: 3, spaceBetween: 6},
                            480: {slidesPerView: 4, spaceBetween: 8},
                            768: {slidesPerView: 5, spaceBetween: 10, height: 70},
                        }}
                    >
                        {car.imageUrls.map((url, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={url}
                                    alt={`Превью ${index + 1}`}
                                    className="thumb-image"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </header>

            {/* Карточки условий */}
            <section>
                <div className="container py-5 d-flex justify-content-center">
                    <div className="row justify-content-center g-4 w-100">
                        {/* Card 1: Возраст */}
                        <div className="col-md-6 col-lg-5">
                            <div className="card border-0 shadow-none rounded-4 text-white h-100"
                                 style={{backgroundColor: '#212529'}}>
                                <div
                                    className="card-body border-0 border-top border-dark bg-black d-flex align-items-center justify-content-center gap-3">
                                    <div>
                                        <BellFill size={32} color="#adb5bd"/>
                                    </div>
                                    <div className="text-center text-md-start">
                                        <h4 className="fw-bolder mb-1">от 23-х лет</h4>
                                        <p className="text-uppercase text-secondary mb-0 fw-semibold"
                                           style={{fontSize: '0.9rem'}}>
                                            Возраст
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Водительский опыт */}
                        <div className="col-md-6 col-lg-5">
                            <div className="card border-0 shadow-none rounded-4 text-white h-100"
                                 style={{backgroundColor: '#212529'}}>
                                <div
                                    className="card-body border-0 border-top border-dark bg-black d-flex align-items-center justify-content-center gap-3">
                                    <div>
                                        <CarFront size={32} color="#adb5bd"/>
                                    </div>
                                    <div className="text-center text-md-start">
                                        <h4 className="fw-bolder mb-1">от 3-х лет</h4>
                                        <p className="text-uppercase text-secondary mb-0 fw-semibold"
                                           style={{fontSize: '0.9rem'}}>
                                            Водительский опыт
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* Booking Cost Section - Улучшенный стиль */}


            {/* Specifications Section */}
            <section className="container my-5">
                {/* The heading is bolder and larger in the image, but we'll stick to h2 for structure */}
                <h2 className="mb-5 fw-bold text-white">Характеристики</h2>

                {/* Added custom styling for a very thin border and removed default list styling */}
                <ul className="list-group list-group-flush bg-transparent border-0">

                    {/* Style for individual list items */}
                    <li
                        className="list-group-item bg-transparent text-white d-flex justify-content-between py-3 px-0 border-bottom border-dark"
                        style={{borderColor: 'rgba(255, 255, 255, 0.1)'}} // Very subtle white border
                    >
                        {/* The property name is regular font weight */}
                        <span className="text-gray-400">Двигатель</span>
                        {/* The value is bold, just like in the image */}
                        <span className="fw-bold">{car.volume} л</span>
                    </li>

                    <li
                        className="list-group-item bg-transparent text-white d-flex justify-content-between py-3 px-0 border-bottom border-dark"
                        style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    >
                        <span className="text-gray-400">Тип кузова</span>
                        <span className="fw-bold">{car.bodywork.name}</span>
                    </li>

                    <li
                        className="list-group-item bg-transparent text-white d-flex justify-content-between py-3 px-0 border-bottom border-dark"
                        style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    >
                        <span className="text-gray-400">Привод</span>
                        <span className="fw-bold">{car.drive}</span>
                    </li>

                    <li
                        className="list-group-item bg-transparent text-white d-flex justify-content-between py-3 px-0 border-bottom border-dark"
                        style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    >
                        <span className="text-gray-400">Топливо</span>
                        <span className="fw-bold">{car.fuel}</span>
                    </li>

                    <li
                        className="list-group-item bg-transparent text-white d-flex justify-content-between py-3 px-0 border-bottom border-dark"
                        style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    >
                        <span className="text-gray-400">Коробка передач</span>
                        <span className="fw-bold">{car.transmission}</span>
                    </li>

                    {/* The last item might not need a border-bottom, depending on the full design, but we'll keep it for now */}
                    <li
                        className="list-group-item bg-transparent text-white d-flex justify-content-between py-3 px-0"
                    >
                        <span className="text-gray-400">Год выпуска</span>
                        <span className="fw-bold">{car.releaseDate}</span>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default CarDetails;