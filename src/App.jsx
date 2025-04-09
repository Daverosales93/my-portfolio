import { useTranslation } from 'react-i18next';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { use, useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className="container">
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <button onClick={() => i18n.changeLanguage('en')} className="btn">🇺🇸 English</button>
        <button onClick={() => i18n.changeLanguage('es')} className="btn">🇲🇽 Español</button>
        <button onClick={() => setDarkMode(!darkMode)} className="btn">
          {darkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
      </div>
      <header data-aos="fade-down">
      import { Typewriter } from 'react-simple-typewriter';

<motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  👋 Hi! I'm{' '}
  <span style={{ color: '#61dafb' }}>
    <Typewriter
      words={['David Rosales', 'a Developer', 'a Tech Lover 💻']}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
</motion.h1>
        <img src={`${import.meta.env.BASE_URL}dave-profile.png`} alt="Dave Rosales" className="profile-pic"/>
        <p>{t('header.description')}</p>
        <a href={`${import.meta.env.BASE_URL}CV_David.pdf`} download className="btn">
          📄 {t('header.download')}
        </a>
      </header>

      <section className="about" data-aos="fade-up">
      <motion.h2 initial={{ opacity: 0, y: -50 }}animate={{ opacity: 1, y: 0 }}transition={{ duration: 1 }}>{t('about.title')}</motion.h2>
        <p>
          {t('about.description')}
        </p>
      </section>

      <section className="projects" data-aos="fade-left">
      <motion.h2 initial={{ opacity: 0, y: -50 }}animate={{ opacity: 1, y: 0 }}transition={{ duration: 1 }}>{t('projects.title')}</motion.h2>
        <ul>
          <li>🧠 <strong>{t('projects.serverWatchdog.title')}</strong> – {t('projects.serverWatchdog.description')}</li>
          <li>🎫 <strong>{t('projects.ticketHero.title')}</strong> – {t('projects.ticketHero.description')}</li>
          <li>🌐 <strong>{t('projects.portfolio.title')}</strong> – {t('projects.portfolio.description')}</li>
        </ul>
      </section>

      <footer className="contact" data-aos="fade-up">
      <motion.h2 initial={{ opacity: 0, y: -50 }}animate={{ opacity: 1, y: 0 }}transition={{ duration: 1 }}>{t('contact.title')}</motion.h2>
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