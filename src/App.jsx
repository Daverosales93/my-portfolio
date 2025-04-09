import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>👋 ¡Hola! Soy Dave Rosales</h1>
        <p>Desarrollador Full Stack en proceso. Apasionado por la tecnología, el aprendizaje constante y el café ☕</p>
        <a href="/cv_dave_rosales.pdf" download className="btn">
          📄 Descargar CV
        </a>
      </header>

      <section className="about">
        <h2>Sobre mí</h2>
        <p>
          Tengo experiencia en soporte técnico, administración de sistemas y me estoy formando como desarrollador Python y frontend con React.
          Me encanta combinar lo visual con lo funcional. También hablo francés, italiano, y algo de latín 😎.
        </p>
      </section>

      <section className="projects">
        <h2>Proyectos destacados</h2>
        <ul>
          <li>🧠 <strong>Server Watchdog</strong> - Monitor de recursos del sistema en Python</li>
          <li>🎫 <strong>Ticket Hero</strong> - Automatización de tareas de soporte</li>
          <li>🌐 <strong>Este portafolio</strong> - hecho con Vite + React y desplegado en GitHub Pages</li>
        </ul>
      </section>
    </div>
  );
}

export default App;