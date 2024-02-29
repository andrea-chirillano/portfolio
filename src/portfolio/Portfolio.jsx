import "./Portfolio.css";
import proyectOneImage from '../assets/images/proyect-one.png';
import proyectTwoImage from '../assets/images/proyect-two.png';
import proyectThreeImage from '../assets/images/proyect-three.png';

const Portfolio = () => {
    return(
        <div className="portfolio">
            <div className="proyects-container">
                <a href="https://andrea-chirillano.github.io/Calculator/" className="proyect-one">
                    <div className="proyect-title"><p>Calculator</p></div>
                    <img src={proyectOneImage} style={{ width: '250px', height: '150px' }} />
                    <br/>
                    Calculator developed in <br/>
                    Angular 17.
                </a>
                <a href="https://andrea-chirillano.github.io/weather/" className="proyect-two">
                    <div className="proyect-title"><p>Weather API</p></div>
                    <img src={proyectTwoImage} style={{ width: '300px', height: '125px' }} />
                    <br/>
                    Weather web application made <br/>
                    with Angular 17, Python and <br/>
                    Flask, using the Openweathermap <br/>
                    API.
                </a>
                <a className="proyect-three">
                    <div className="proyect-title"><p>Pokemon shirt store (Developing)</p></div>
                    <img src={proyectThreeImage} style={{ width: '300px', height: '125px' }} />
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