import "./Navbar.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useRef } from "react";
import useHover from "@react-hook/hover";

const externalLink = {
    default: {
        transition: 'opacity 0.3s, transform 0.3s',
    },
    Hovered: {
        transform: 'scale(1.1)'
    }
};

const pageLink = {
    default: {
        transition: 'opacity 1s, transform 1s',
    },
    Hovered: {
        fontSize: '16px'
    }
};

const Navbar = () => {
    const iconLinkedin = useRef(null);
    const iconGithub = useRef(null);
    const linkHome = useRef(null);
    const linkAboutMe = useRef(null);
    const linkPortfolio = useRef(null);
    const linkContact = useRef(null);

    const isHoveredIconLinkedin = useHover(iconLinkedin);
    const isHoveredIconGithub = useHover(iconGithub);
    const isHoveredHome = useHover(linkHome);
    const isHoveredAboutMe = useHover(linkAboutMe);
    const isHoveredPortfolio = useHover(linkPortfolio);
    const isHoveredContact = useHover(linkContact);

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
                    <a href="#" style={pageLink[isHoveredHome ? "Hovered" : "default"]} ref={linkHome}>Home</a>
                </li>
                <li>
                    <a href="#about-me" style={pageLink[isHoveredAboutMe ? "Hovered" : "default"]} ref={linkAboutMe}>About me</a>
                </li>
                <li>
                    <a href="#portfolio" style={pageLink[isHoveredPortfolio ? "Hovered" : "default"]} ref={linkPortfolio}>Portfolio</a>
                </li>
                <li>
                    <a href="#contact" style={pageLink[isHoveredContact ? "Hovered" : "default"]} ref={linkContact}>Contact</a>
                </li>
            </ul>
            <div className="icons-container">
                <div className="icons">
                    <button style={externalLink[isHoveredIconLinkedin ? "Hovered" : "default"]} ref={iconLinkedin}
                        onClick={() =>
                            openExternalLink("https://www.linkedin.com/in/andreachirillano/")
                        }
                    >
                        <FaLinkedin size={30} className="color-icon" />
                    </button>
                    <button style={externalLink[isHoveredIconGithub ? "Hovered" : "default"]} ref={iconGithub}
                        onClick={() =>
                            openExternalLink("https://github.com/andrea-chirillano")
                        }
                    >
                        <FaGithub size={30} className="color-icon" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
