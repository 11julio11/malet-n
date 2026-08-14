import React, { useRef } from 'react';

function Projects() {
  const handleMouseMove = (e, ref) => {
    if (!ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  const handleMouseLeave = (e, ref) => {
    if (!ref.current) return;
    ref.current.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const projects = [
    {
      icon: 'fas fa-money-check-alt',
      title: 'CrediBoard (Sistemas en Líneas)',
      badges: ['Backend', 'Go', 'Arquitectura Limpia'],
      description:
        'Desarrollador Backend. Sistema financiero para entidades. Se redujo el tiempo de consultas críticas implementando índices en PostgreSQL y microservicios robustos en Go aplicando Clean Code.',
      link: '#',
    },
    {
      icon: 'fas fa-car',
      title: 'Mecanio',
      badges: ['Backend', 'FastAPI', 'DDD'],
      description:
        'Backend Developer Freelance. Sistema end-to-end empresarial de gestión de estacionamientos. Implementación de nuevas funcionalidades, optimización y mantenimiento de un sistema de gestión de estacionamientos existente, aplicando buenas prácticas y patrones de diseño.',
      link: '#',
    },
    {
      icon: 'fas fa-server',
      title: 'Conexiones G (Plataforma ISP)',
      badges: ['Full Stack', 'Next.js', 'Prisma'],
      description:
        'Full Stack Developer. Sistema de gestión técnica e inventario. Arquitectura híbrida Server-to-Server, optimizando la trazabilidad en campo mediante códigos QR y PWAs para operarios.',
      link: '#',
    },

    {
      icon: 'fas fa-laptop-code',
      title: 'Kronex',
      badges: ['Frontend', 'React', 'Tailwind'],
      description:
        'Landing page corporativa para empresa de soluciones tecnológicas. Demuestra dominio de UI/UX moderno, diseño completamente responsivo y consumo de APIs de terceros (EmailJS).',
      link: 'https://kronex.netlify.app/',
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'GoldFit Gym',
      badges: ['Frontend', 'Supabase'],
      description:
        'Sitio web comercial para gimnasio. Integración full-stack ligera utilizando React y Supabase como BaaS, enfocada en la conversión de leads (formularios Formspree) y velocidad de carga.',
      link: 'https://goldfitgym01.netlify.app/',
    },
  ];

  return (
    <section className="services" id="services">
      <div className="content">
        <div className="title glitch-hover" data-text="Proyectos & Experiencia">
          <span>Proyectos & Experiencia</span>
        </div>
        <div className="boxes">
          {projects.map((project, index) => {
            const cardRef = useRef(null);
            return (
              <div
                className="box tilt-card scroll-animate"
                key={index}
                ref={cardRef}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={(e) => handleMouseLeave(e, cardRef)}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div className="icon">
                  <i className={project.icon}></i>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', flexGrow: 1 }}
                >
                  <div className="topic" style={{ marginBottom: '8px' }}>
                    {project.title}
                  </div>

                  <div
                    style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}
                  >
                    {project.badges.map((badge, bIndex) => (
                      <span
                        key={bIndex}
                        style={{
                          fontSize: '0.75rem',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          background:
                            badge === 'Backend'
                              ? 'rgba(57, 255, 20, 0.15)'
                              : badge === 'Full Stack'
                                ? 'rgba(0, 229, 255, 0.15)'
                                : badge === 'Frontend'
                                  ? 'rgba(255, 0, 127, 0.15)'
                                  : 'rgba(255,255,255,0.05)',
                          color:
                            badge === 'Backend'
                              ? '#39FF14'
                              : badge === 'Full Stack'
                                ? '#00E5FF'
                                : badge === 'Frontend'
                                  ? '#FF007F'
                                  : '#ccc',
                          fontWeight: 'bold',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <p>{project.description}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
