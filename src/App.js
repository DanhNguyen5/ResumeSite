import Skills from './components/Skills';
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import Experience from './components/Experience';
import './styles.css';


function App() {
  return (
    <div className="App">
       <NavBar />
       <About />
       <Experience />
       <Skills />
       <Footer />
    </div>
  );
}

export default App;
