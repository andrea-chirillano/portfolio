import "./Header.css";
import backgroundLaptop from "../assets/images/laptop-background.png";

const Header = () => {
    return (
        <div className="background" id="home">
            <img className="image-home" src={backgroundLaptop} style={{ width: '800px', height: '600px' }} />
            
        </div>
    );
};

export default Header;
