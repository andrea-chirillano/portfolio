import "./Header.css";
//import { FaUser } from 'react-icons/fa'; // Importa el icono de usuario de React Icons

//<FaUser style={{ fontSize: '3em' }} /> {}

const UserInfo = () => {
    return (
        <><div className="triangle">
            <div className="empty"></div>
        </div>
        <div className="square-one"></div>
        <div className="square-two"></div><div className="header">
            <div style={{ textAlign: "left" }}></div>
            <h1 style={{ textAlign: "left" }}>Hi, I&apos;m Andrea Chirillano</h1>
            <h2 style={{ textAlign: "left" }}>and I&apos;m a fullstack developer.</h2>{" "}

        </div></>
    );
};

export default UserInfo;
