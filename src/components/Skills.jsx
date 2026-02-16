function Skills() {
    const skills = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Docker' },
        { name: 'PostgreSQL' }
    ]

    return (
        <section className="skills" id="skills">
            <div className="content">
                <div className="title"><span>Mis habilidades</span></div>
                <div className="skills-details">
                    <div className="text">
                        <div className="topic">Crecimiento y Aprendizaje</div>
                        <p>
                            Mi stack tecnológico es la base de mi aprendizaje estratégico.
                            Me enfoco en dominar profundamente el ecosistema de JavaScript para crear interfaces
                            interactivas y backends eficientes.
                            Estoy en constante exploración de nuevas librerías y frameworks, perfeccionando mi capacidad para
                            resolver problemas y optimizar procesos, siempre con la curiosidad de descubrir cómo llevar mis
                            habilidades al siguiente nivel.
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
    )
}

export default Skills
