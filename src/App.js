import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
