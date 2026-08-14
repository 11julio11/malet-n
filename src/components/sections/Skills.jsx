function Skills() {
  const skills = [
    { name: 'Go (Golang)' },
    { name: 'Python / FastAPI' },
    { name: 'Node.js / Next.js' },
    { name: 'PostgreSQL / Prisma' },
    { name: 'Docker & AWS' },
    { name: 'React 19 / TypeScript' },
    { name: 'Clean Architecture' },
    { name: 'APIs RESTful' },
  ];

  return (
    <section className="skills" id="skills">
      <div className="content">
        <div className="title">
          <span>Mis habilidades</span>
        </div>
        <div className="skills-details">
          <div className="text">
            <div className="topic">Ecosistema y Arquitectura</div>
            <p>
              Construyo software escalable, mantenible y orientado a resolver problemas reales de
              negocio. Mi stack tecnológico se centra en lenguajes robustos para lógicas de negocio
              críticas (Go, Python) y soluciones Frontend modernas (React 18/19, Next.js). Manejo
              bases de datos avanzadas optimizando consultas en PostgreSQL e implemento despliegues
              con Docker y AWS.
            </p>
          </div>
          <div className="boxes">
            {skills.map((skill, index) => (
              <div className="box" key={index}>
                <div className="topic">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
