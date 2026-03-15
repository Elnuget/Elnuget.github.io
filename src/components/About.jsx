function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="section-inner">
        <h2 className="section-title">Sobre mí</h2>
        <div className="about-content">
          <p>
            Soy un programador y docente con especialización en entornos digitales. 
            Mi enfoque combina el desarrollo de software con la pedagogía, 
            lo que me permite diseñar soluciones tecnológicas efectivas y transmitir 
            conocimiento de forma clara y estructurada.
          </p>
          <p>
            Puedo ayudar a tu institución o empresa a gestionar correctamente sus datos, 
            crear plataformas digitales a medida y optimizar procesos mediante tecnología.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">9+</span>
              <span className="stat-label">Proyectos entregados</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Títulos universitarios</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Posgrados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
