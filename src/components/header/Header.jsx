import "./Header.css";
import backgroundLaptop from "../assets/images/laptop-background.png";

const Header = () => {
    return (
        <div className="background" id="home">
            <img className="image-home" src={backgroundLaptop}/>
        </div>
    );
};

export default Header;
