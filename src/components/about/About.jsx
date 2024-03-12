import "./About.css";
import { useRef } from 'react';
import useHover from "@react-hook/hover";
import { FaAngular, FaJs, FaDocker, FaNodeJs, FaPython, FaPhp } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGolang } from '@fortawesome/free-brands-svg-icons';

const hoverIcons = {
    default: {
        transition: 'opacity 0.3s, transform 0.3s',
    },
    Hovered: {
        transform: 'scale(1.1)'
    }
};

const About = () => {
    const targetAngular = useRef(null);
    const targetJavascript = useRef(null);
    const targetReactJS = useRef(null);
    const targetDocker = useRef(null);
    const targetNodeJS = useRef(null);
    const targetGolang = useRef(null);
    const targetPython = useRef(null);
    const targetPHP = useRef(null);


    const isHoveredAngular = useHover(targetAngular);
    const isHoveredJavascript = useHover(targetJavascript);
    const isHoveredReactJS = useHover(targetReactJS);
    const isHoveredDocker = useHover(targetDocker);
    const isHoveredNodeJS = useHover(targetNodeJS);
    const isHoveredGolang = useHover(targetGolang);
    const isHoveredPython = useHover(targetPython);
    const isHoveredPHP = useHover(targetPHP);


    const openExternalLink = (url) => {
        console.log('Open external link:', url);
        try {
            window.open(url, "_blank");
        } catch (error) {
            console.error("Error opening link:", error);
        }
    };


    return(
        <div className="about" id="about-me">
            <div className="gradient">
                <div className="triangle">
                    <div className="empty"></div>
                </div>
                <div className="header">
                    <h1 style={{ textAlign: "center" }}>Hi, I&apos;m Andrea Chirillano</h1>
                    <div className="text-h2">
                        <h2 style={{ textAlign: "center" }}>and I&apos;m a fullstack developer with two years of experience</h2>{" "}
                        <h2 style={{ textAlign: "center" }}>developing web applications and working with databases.</h2>{" "}
                    </div>
                    

                </div>
                <div className="text">  I am a proactive, responsible and hard-working developer, <br/>
                                        I like challenges and achieving goals. <br/>
                </div> 
                <div className="hard-skills">
                    <div className="title-hard-skills">Hard skills: <br/> </div> 
                    <div className="skill-icons">
                        <div style={hoverIcons[isHoveredAngular ? "Hovered" : "default"]} ref={targetAngular} onClick={() => openExternalLink("https://angular.io/")}>
                            <FaAngular color="white" size={30} /> 
                        </div>
                        <div style={hoverIcons[isHoveredJavascript ? "Hovered" : "default"]} ref={targetJavascript} onClick={() => openExternalLink("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}>
                            <FaJs color="white" size={30} />
                        </div>
                        <div style={hoverIcons[isHoveredReactJS ? "Hovered" : "default"]} ref={targetReactJS} onClick={() => openExternalLink("https://react.dev/")}>
                            <FontAwesomeIcon icon={faReact} color="white" size="2x" />
                        </div>
                        <div style={hoverIcons[isHoveredDocker ? "Hovered" : "default"]} ref={targetDocker} onClick={() => openExternalLink("https://www.docker.com/")}>
                            <FaDocker color="white" size={30} />
                        </div>
                        <div style={hoverIcons[isHoveredNodeJS ? "Hovered" : "default"]} ref={targetNodeJS} onClick={() => openExternalLink("https://nodejs.org/en")}>
                            <FaNodeJs color="white" size={30} />
                        </div>
                        <div style={hoverIcons[isHoveredGolang ? "Hovered" : "default"]} ref={targetGolang} onClick={() => openExternalLink("https://go.dev/")}>
                            <FontAwesomeIcon icon={faGolang} color="white" size="2x" />
                        </div>
                        <div style={hoverIcons[isHoveredPython ? "Hovered" : "default"]} ref={targetPython} onClick={() => openExternalLink("https://www.python.org/")}>
                            <FaPython color="white" size={30} />
                        </div>
                        <div style={hoverIcons[isHoveredPHP ? "Hovered" : "default"]} ref={targetPHP} onClick={() => openExternalLink("https://www.php.net/")}>
                            <FaPhp color="white" size={30} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;