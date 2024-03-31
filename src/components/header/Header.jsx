import "./Header.css";
import { AuroraBackgroundDemo } from "../features/aurora-background-demo";

const Header = () => {
    return (
        <div className="background" id="home">
            <AuroraBackgroundDemo className="aurora"/>
        </div>
    );
};

export default Header;
