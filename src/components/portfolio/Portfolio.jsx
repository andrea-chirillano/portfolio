import "./Portfolio.css";
import { useRef } from "react";
import useHover from "@react-hook/hover";
import proyectOneImage from '../assets/images/proyect-one.png';
import proyectTwoImage from '../assets/images/proyect-two.png';
import proyectThreeImage from '../assets/images/proyect-three.png';

const hoverStyle = {
    default: {
        backgroundImage: 'linear-gradient(0, #bad8ff, #80afee)',
        color: '#020912',
        fontFamily: 'Neue Machina Regular, sans-serif',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        transition: 'opacity 0.3s, transform 0.3s',
        marginRight: '50px'
    },
    Hovered: {
        transform: 'scale(1.1)',
        filter: 'brightness(105%)'
    }
};

const Portfolio = () => {
    const targetOneRef = useRef(null);
    const targetTwoRef = useRef(null);
    const targetThreeRef = useRef(null);

    const isHoveredOne = useHover(targetOneRef);
    const isHoveredTwo = useHover(targetTwoRef);
    const isHoveredThree = useHover(targetThreeRef);

    const openExternalLink = (url) => {
        console.log('Open external link:', url);
        try {
            window.open(url, "_blank");
        } catch (error) {
            console.error("Error opening link:", error);
        }
    };

    return(
        <div className="portfolio" id="portfolio">
            <div className="proyects-container">
                <a className="proyect-one" onClick={() => openExternalLink("https://andrea-chirillano.github.io/Calculator/")} style={hoverStyle[isHoveredOne ? "Hovered" : "default"]} ref={targetOneRef}>
                    <div className="proyect-title"><p>Calculator</p></div>
                    <img className="image-one" src={proyectOneImage} alt="Project One" />
                    <br/>
                    Calculator developed in <br/>
                    Angular 17.
                </a>
                <a className="proyect-two" onClick={() => openExternalLink("https://andrea-chirillano.github.io/weather/")} style={hoverStyle[isHoveredTwo ? "Hovered" : "default"]} ref={targetTwoRef}>
                    <div className="proyect-title"><p>Weather API</p></div>
                    <img className="image-two" src={proyectTwoImage} alt="Project Two" />
                    <br/>
                    Weather web application made <br/>
                    with Angular 17, Python and <br/>
                    Flask, using the Openweathermap <br/>
                    API.
                </a>
                <a className="proyect-three" style={hoverStyle[isHoveredThree ? "Hovered" : "default"]} ref={targetThreeRef}>
                    <div className="proyect-title"><p>Pokemon shirt store (Developing)</p></div>
                    <img className="image-two" src={proyectThreeImage} alt="Project Three" />
                    <br/>
                    Shirt store made with Angular on <br/>
                    the front, on the backend with Java, <br/>
                    Spring and MySQL database.
                </a>
            </div>
        </div>
    );
};

export default Portfolio;
