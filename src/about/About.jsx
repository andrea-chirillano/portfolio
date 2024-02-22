import "./About.css";
import { FaAngular, FaJs, FaDocker, FaNodeJs, FaPython, FaPhp } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGolang } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return(
        <div className="about">
            <div className="gradient">
                <div className="text">  I am a proactive, responsible and hard-working developer, <br/>
                                        I like challenges and achieving goals. I have two years of <br/>
                                        experience developing web applications and working with databases.<br/></div> 
                <div className="hard-skills">
                    Hard skills: <br/>
                    <div className="skill-icons">
                        <FaAngular color="white" size={30} />
                        <FaJs color="white" size={30} />
                        <FontAwesomeIcon icon={faReact} color="white" size="2x" />
                        <FaDocker color="white" size={30} />
                        <FaNodeJs color="white" size={30} />
                        <FontAwesomeIcon icon={faGolang} color="white" size="2x" />
                        <FaPython color="white" size={30} />
                        <FaPhp color="white" size={30} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;