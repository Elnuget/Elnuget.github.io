function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hola, soy</p>
        <h1 className="hero-name">Carlos Angulo<span className="hero-dot">.</span></h1>
        <p className="hero-role">Programador &amp; Docente</p>
        <p className="hero-location">Quito, Ecuador</p>
        <div className="hero-actions">
          <a href="#proyectos" className="btn btn-primary">Ver proyectos</a>
          <a href="#contacto" className="btn btn-outline">Contactar</a>
        </div>
      </div>
      <div className="hero-decoration" aria-hidden="true">
        <div className="hero-circle"></div>
        <div className="hero-line"></div>
      </div>
    </section>
  )
}

export default Hero
