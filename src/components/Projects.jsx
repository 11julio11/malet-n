function Projects() {
    const projects = [
        {
            icon: 'fas fa-laptop-code',
            title: 'Kronex',
            description: 'Landing page corporativa para empresa de soluciones tecnológicas. Desarrollada con React, TypeScript y Tailwind CSS, incluye formulario de contacto integrado con EmailJS y diseño completamente responsivo.',
            link: 'https://kronex.netlify.app/'
        },
        {
            icon: 'fas fa-dumbbell',
            title: 'GoldFit Gym',
            description: 'Sitio web moderno para gimnasio con React, TypeScript y Tailwind CSS. Integra Supabase como backend, formularios con Formspree, y secciones de servicios, planes, entrenadores y galería.',
            link: 'https://goldfitgym01.netlify.app/'
        }
    ]

    return (
        <section className="services" id="services">
            <div className="content">
                <div className="title"><span>Proyectos</span></div>
                <div className="boxes">
                    {projects.map((project, index) => (
                        <div className="box" key={index}>
                            <div className="icon">
                                <i className={project.icon}></i>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="topic">{project.title}</div>
                                <p>{project.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

