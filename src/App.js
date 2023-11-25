import './App.css';
import Main from './components/Main/Main';
import Experience from './components/Experience/Experience';
import Tools from './components/Tools/Tools'
import Projects from './components/Projects/Projects'
import ContactUs from './components/ContactUs/ContactUs';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App font-bold text-red-500">
      <Main />
      <About />
      <Skills />
      {/* <Tools /> */}
      <Experience />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
