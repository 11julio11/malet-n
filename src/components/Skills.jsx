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
                        <div className="topic">Innovación y Tecnología</div>
                        <p>
                            Mi stack tecnológico abarca desde el desarrollo frontend con React, TypeScript y Tailwind CSS,
                            hasta el backend con PostgreSQL y la gestión de contenedores con Docker. Utilizo herramientas
                            profesionales como Postman e Insomnia para pruebas de API, y frameworks modernos como Vite para
                            optimizar el rendimiento. Mi experiencia incluye desarrollo de aplicaciones web completas, desde
                            el diseño de interfaces responsivas hasta la implementación de bases de datos relacionales y
                            despliegue en producción.
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
