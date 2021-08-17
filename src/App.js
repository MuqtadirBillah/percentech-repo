import logo from './logo.svg';
import './design.css';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import About from './components/About';
import Services from './components/Services';
import Client from './components/Client';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Carousel />
      <About />
      <Services />
      <Client />
    </div>
  );
}

export default App;
