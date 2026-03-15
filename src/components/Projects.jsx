const projects = [
  {
    id: 'roto',
    title: 'Roto',
    description: 'E-commerce para un estudio de tatuajes. Catálogo de diseños, reservas y galería de artistas.',
    tags: ['E-commerce', 'Web App'],
    image: '/projects/roto.png',
  },
  {
    id: 'titans',
    title: 'Titans',
    description: 'Plataforma web para un gimnasio con rutinas de entrenamiento y catálogo de máquinas disponibles.',
    tags: ['Web App', 'Fitness'],
    image: '/projects/titans.png',
  },
  {
    id: 'taxbridge',
    title: 'TaxBridge',
    description: 'Aplicación para la descarga automatizada de facturas por meses desde el SRI.',
    tags: ['Automatización', 'Finanzas'],
    image: '/projects/taxbridge.png',
  },
  {
    id: 'sabri',
    title: 'Sabri Multiservices',
    description: 'Sistema de agendamiento de citas para múltiples servicios con notificaciones.',
    tags: ['Gestión', 'Citas'],
    image: '/projects/sabri.png',
  },
  {
    id: 'portal-noxdata',
    title: 'Portal NoxData',
    description: 'Aplicación interna para la gestión y seguimiento de tareas del equipo de trabajo.',
    tags: ['Gestión', 'Productividad'],
    image: '/projects/portal-noxdata.png',
  },
  {
    id: 'noxdata',
    title: 'NoxData',
    description: 'E-commerce de mi empresa de software. Catálogo de servicios y productos digitales.',
    tags: ['E-commerce', 'SaaS'],
    image: '/projects/noxdata.png',
  },
  {
    id: 'lbarbosa',
    title: 'LBarbosa',
    description: 'Sistema de gestión de pedidos para una óptica con historiales clínicos de pacientes.',
    tags: ['Gestión', 'Salud'],
    image: '/projects/lbarbosa.png',
  },
  {
    id: 'escleroptica',
    title: 'Escleróptica',
    description: 'Sistema integral para óptica con facturación, gestión de pedidos y módulos clínicos avanzados.',
    tags: ['Facturación', 'Salud'],
    image: '/projects/escleroptica.png',
  },
  {
    id: 'capu',
    title: 'Cap U',
    description: 'Sistema de gestión académica para un preuniversitario. Control de estudiantes, horarios y evaluaciones.',
    tags: ['Educación', 'Gestión'],
    image: '/projects/capu.png',
  },
]

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.classList.add('no-image')
          }}
        />
        <div className="project-image-placeholder">
          <span>{project.title[0]}</span>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <div className="section-inner">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
