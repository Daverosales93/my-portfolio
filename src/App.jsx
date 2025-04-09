import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <header data-aos="fade-down">
        <h1>👋 Hi! I'm David Rosales</h1>
        <p>Full Stack Developer in progress. Passionate about tech, lifelong learning, and good coffee ☕</p>
        <a href="/CV_David.pdf" download className="btn">
          📄 Download CV
        </a>
      </header>

      <section className="about" data-aos="fade-up">
        <h2>About me</h2>
        <p>
          I have experience in tech support, systems administration, and I'm training in Python development as a Full Stack Developper.
          I love mixing visuals with functionality. I speak Spanish as native, English as second language and French and brazilian Portuguese😎.
          I take pride in building trustworthy, empathetic relationships with end users and always strive to maintain a calm, professional demeanor under pressure. My “can-do” attitude and proactive communication style have helped me resolve complex technical issues efficiently, while promoting a collaborative team environment.
        </p>
      </section>

      <section className="projects" data-aos="fade-left">
        <h2>Featured Projects</h2>
        <ul>
          <li>🧠 <strong>Server Watchdog</strong> – A system resource monitor built in Python</li>
          <li>🎫 <strong>Ticket Hero</strong> – Task automation for support teams</li>
          <li>🌐 <strong>This Portfolio</strong> – Built with Vite + React and deployed to GitHub Pages</li>
        </ul>
      </section>

      <footer className="contact" data-aos="fade-up">
        <h2>Contact</h2>
        <p>📧 daverosales93@gmail.com</p>
        <p>
          <a href="https://github.com/Daverosales93" target="_blank" rel="noreferrer">GitHub</a> |
          <a href="https://www.linkedin.com/in/daverosales93" target="_blank" rel="noreferrer"> LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;