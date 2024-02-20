import "./Navbar.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const openExternalLink = (url) => {
        console.log('Open external link:', url);
        try {
            window.open(url, "_blank");
        } catch (error) {
            console.error("Error opening link:", error);
        }
    };
    return (
        <nav>
            <ul>
                <li>
                    <a href="/Header">Header</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>
            </ul>
            <div className="icons-container">
                <div className="icons">
                    <button
                        onClick={() =>
                            openExternalLink("https://www.linkedin.com/in/andreachirillano/")
                        }
                    >
                        <FaLinkedin color="#020912" size={30} />
                    </button>
                    <button
                        onClick={() =>
                            openExternalLink("https://github.com/andrea-chirillano")
                        }
                    >
                        <FaGithub color="#020912" size={30} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
