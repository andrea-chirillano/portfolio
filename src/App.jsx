
import '../globals.css';
import Navbar from './components/navbar/Navbar.jsx';
import Header from './components/header/Header.jsx';
import About from './components/about/About.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact.jsx';
import ComputerComponent from './components/computer/ComputerComponent.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="size">
      <Router>
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <ComputerComponent />
      </Router>
    </div>
  );
}

export default App;
