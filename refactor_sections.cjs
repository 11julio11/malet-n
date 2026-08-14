const fs = require('fs');

// 1. Refactor Skills.jsx
const skillsPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/sections/Skills.jsx';
const newSkillsContent = `import React from 'react';

function Skills() {
    const skills = [
        { name: 'Go (Golang)', type: 'Backend' },
        { name: 'Python / FastAPI', type: 'Backend' },
        { name: 'Node.js / Next.js', type: 'Full Stack' },
        { name: 'PostgreSQL / Prisma', type: 'Database' },
        { name: 'Docker & AWS', type: 'DevOps' },
        { name: 'React 19 / TypeScript', type: 'Frontend' },
        { name: 'Clean Architecture', type: 'Design' },
        { name: 'APIs RESTful', type: 'Architecture' }
    ];

    return (
        <section className="skills" id="skills">
            <article className="content">
                <header className="title"><span>Ecosistema Tecnológico</span></header>
                <div className="skills-bento">
                    <section className="skills-intro">
                        <h3>Arquitectura y Escalabilidad</h3>
                        <p>
                            Construyo software escalable, mantenible y orientado a resolver problemas reales de negocio.
                            Mi stack tecnológico se centra en lenguajes robustos para lógicas de negocio críticas y
                            soluciones Frontend modernas. Manejo bases de datos avanzadas optimizando consultas e implemento despliegues eficientes.
                        </p>
                    </section>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <figure className="skill-card tilt-card" key={index}>
                                <figcaption className="skill-type">{skill.type}</figcaption>
                                <h4>{skill.name}</h4>
                            </figure>
                        ))}
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Skills;
`;
if (fs.existsSync(skillsPath)) fs.writeFileSync(skillsPath, newSkillsContent, 'utf8');


// 2. Refactor Projects.jsx
const projectsPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/sections/Projects.jsx';
const newProjectsContent = `import React from 'react';

function Projects() {
    const projects = [
        {
            title: "ERP de Telecomunicaciones",
            desc: "Sistema central de facturación y cortes de servicio (RADIUS).",
            tech: ["Go", "React", "PostgreSQL"],
            img: "/img/design01.jpg"
        },
        {
            title: "Plataforma IoT",
            desc: "Gestión de dispositivos y telemetría en tiempo real.",
            tech: ["Python", "FastAPI", "AWS"],
            img: "/img/design01.jpg"
        }
    ];

    return (
        <section className="projects" id="projects">
            <article className="content">
                <header className="title"><span>Proyectos Destacados</span></header>
                <div className="projects-grid">
                    {projects.map((proj, idx) => (
                        <figure className="project-card" key={idx}>
                            <div className="project-img-wrapper">
                                <img src={proj.img} alt={proj.title} loading="lazy" />
                            </div>
                            <figcaption className="project-info">
                                <h3>{proj.title}</h3>
                                <p>{proj.desc}</p>
                                <div className="project-tags">
                                    {proj.tech.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </article>
        </section>
    );
}

export default Projects;
`;
if (fs.existsSync(projectsPath)) fs.writeFileSync(projectsPath, newProjectsContent, 'utf8');


// 3. Refactor Contact.jsx
const contactPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/sections/Contact.jsx';
const newContactContent = `import React from 'react';

function Contact() {
    return (
        <section className="contact" id="contact">
            <article className="content">
                <header className="title"><span>Hablemos</span></header>
                <form className="contact-form minimalist-form">
                    <fieldset>
                        <legend className="sr-only">Formulario de Contacto</legend>
                        <div className="input-group">
                            <label htmlFor="name" className="sr-only">Nombre</label>
                            <input type="text" id="name" name="name" placeholder="Tu Nombre" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" id="email" name="email" placeholder="tu@email.com" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="message" className="sr-only">Mensaje</label>
                            <textarea id="message" name="message" placeholder="¿En qué puedo ayudarte?" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="cta-btn animated-btn">Enviar Mensaje</button>
                    </fieldset>
                </form>
            </article>
        </section>
    );
}

export default Contact;
`;
if (fs.existsSync(contactPath)) fs.writeFileSync(contactPath, newContactContent, 'utf8');

// 4. Update CSS for Bento, Cards, and Forms
const cssPath = 'C:/Mis_Proyectos(github)/malet-n/src/index.css';
if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    
    // Add new styles
    css += `\n
/* --- Minimalist Bento & Cards --- */
.skills-bento {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
}
@media (min-width: 768px) {
    .skills-bento {
        grid-template-columns: 1fr 2fr;
    }
}
.skills-intro h3 { color: var(--primary-color); margin-bottom: 1rem; }
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}
.skill-card {
    background: rgba(10, 20, 10, 0.6);
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid rgba(57, 255, 20, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.skill-type {
    font-size: 0.8rem;
    color: #8b949e;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}
.project-card {
    background: rgba(10, 20, 10, 0.6);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(57, 255, 20, 0.2);
    display: flex;
    flex-direction: column;
}
.project-img-wrapper {
    width: 100%;
    height: 220px;
    overflow: hidden;
}
.project-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}
.project-card:hover .project-img-wrapper img {
    transform: scale(1.05); /* Subtler hover effect */
}
.project-info {
    padding: 1.5rem;
}
.project-info h3 { margin-bottom: 0.5rem; color: #fff; }
.project-info p { color: #ccc; font-size: 0.95rem; margin-bottom: 1rem; }
.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}
.tag {
    background: rgba(57, 255, 20, 0.1);
    color: var(--primary-color);
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-family: monospace;
}

/* --- Minimalist Form --- */
.minimalist-form {
    max-width: 600px;
    margin: 2rem auto;
}
.minimalist-form fieldset {
    border: none;
    padding: 0;
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
.input-group {
    margin-bottom: 1.5rem;
}
.input-group input, .input-group textarea {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.75rem 0;
    color: #fff;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s ease;
}
.input-group input:focus, .input-group textarea:focus {
    outline: none;
    border-bottom-color: var(--primary-color);
    box-shadow: 0 1px 0 var(--primary-color);
}
.minimalist-form button {
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;
}
`;

    // Adjusting over-scaled image transitions in About
    css = css.replace(/transition:\s*transform\s*0\.5s\s*ease/g, 'transition: transform 0.3s ease-out');
    css = css.replace(/transform:\s*scale\(1\.02\)/g, 'transform: scale(1.01)');

    fs.writeFileSync(cssPath, css, 'utf8');
}

console.log("Refactored Skills, Projects, and Contact sections successfully.");
