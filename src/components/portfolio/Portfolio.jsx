import DirectionDemo from "../features/direction-aware-hover-demo";
import proyectOneImage from '../assets/images/proyect-one.jpg';
import proyectTwoImage from '../assets/images/proyect-two.jpg';
import proyectThreeImage from '../assets/images/proyect-three.jpg';
import proyectFourImage from '../assets/images/proyect-four.jpg';
import "./Portfolio.css";
import { useState } from 'react';


const Portfolio = () => {
    const openExternalLink = (url) => {
        console.log('Open external link:', url);
        try {
            window.open(url, "_blank");
        } catch (error) {
            console.error("Error opening link:", error);
        }
    };

    const items = [
        {
            element: (
                <a className="proyect-one" onClick={() => openExternalLink("https://andrea-chirillano.github.io/Calculator/")}>
                    <DirectionDemo text1="Calculator" text2="Calculator developed in Angular 17" value={proyectOneImage} />
                </a>
            )
        },
        {
            element: (
                <a className="proyect-two" onClick={() => openExternalLink("https://andrea-chirillano.github.io/weather/")}>
                    <DirectionDemo text1="Weather API" text2="Weather web application made with Angular 17, Python and Flask, using the Openweathermap API." value={proyectTwoImage} />
                </a>
            )
        },
        {
            element: (
                <a className="proyect-three">
                    <DirectionDemo text1="Pokemon shirt store (Developing)" text2="Shirt store made with Angular on the front, on the backend with Java, Spring and MySQL database." value={proyectThreeImage} />
                </a>
            )
        },
        {
            element: (
                <a className="proyect-four" onClick={() => openExternalLink("https://andrea-chirillano.github.io/ecommerce-pizza/")}>
                    <DirectionDemo text1="Pizza e-commerce" text2="Basic pizza ecommerce store frontend design made with ReactJS and Vite." value={proyectFourImage} />
                </a>
            )
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="portfolio" id="portfolio">
            <div className="slider-container">
            <div className="slides" style={{ transform: `translateX(-${currentIndex * (100 / (items.length * 2))}%)` }}>
                    {items.map((item, index) => (
                        <div key={index} className="slide">
                            {item.element}
                        </div>
                    ))}
                    {items.map((item, index) => (
                        <div key={index + items.length} className="slide">
                            {item.element}
                        </div>
                    ))}
                </div>
                <button className="prev" onClick={prevSlide}> &lt; </button>
                <button className="next" onClick={nextSlide}> &gt; </button>
            </div>
        </div>
    );
};

export default Portfolio;
