import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Daniel Lopez. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
