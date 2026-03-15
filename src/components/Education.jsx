const education = [
  {
    year: '2026',
    title: 'Ingeniería de Software',
    institution: 'Universidad de las Américas',
    type: 'Pregrado',
  },
  {
    year: '2025',
    title: 'Maestría en Pedagogía en Entornos Digitales',
    institution: 'Universidad Bolivariana del Ecuador',
    type: 'Posgrado',
  },
  {
    year: '2024',
    title: 'Tecnología Superior en Desarrollo de Software',
    institution: 'ITS "Vida Nueva"',
    type: 'Tecnología',
  },
  {
    year: '2023',
    title: 'Licenciatura en Pedagogía de Matemática y Física',
    institution: 'Universidad Central del Ecuador',
    type: 'Pregrado',
  },
]

function Education() {
  return (
    <section id="educacion" className="section education">
      <div className="section-inner">
        <h2 className="section-title">Educación</h2>
        <div className="education-timeline">
          {education.map((item, i) => (
            <div key={i} className="education-item">
              <div className="education-year">{item.year}</div>
              <div className="education-info">
                <span className="education-type">{item.type}</span>
                <h3 className="education-degree">{item.title}</h3>
                <p className="education-institution">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
