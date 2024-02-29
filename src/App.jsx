
import './App.css';
import Navbar from './navbar/Navbar.jsx';
import Header from './header/Header.jsx';
import About from './about/About.jsx';
import Portfolio from './portfolio/Portfolio.jsx';

function App() {
  return (
    <div className="size">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
