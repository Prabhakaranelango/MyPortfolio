import './App.css';
import About from './components/About';
import Header from './components/header';
import Hero from './components/Hero'
import Skills from './components/skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
