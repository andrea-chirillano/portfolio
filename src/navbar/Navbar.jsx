import './Navbar.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>
            </ul>
            <div className="icons-container">
                <a className="icons" href="https://www.linkedin.com/in/andreachirillano/">
                    <FaLinkedin color="#020912" size={30}/>
                    </a>
                <a className="icons" href="https://github.com/andrea-chirillano">
                    <FaGithub color="#020912" size={30}/>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
