import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
