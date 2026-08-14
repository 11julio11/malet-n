const fs = require('fs');

// Restore Contact.jsx
const origContact = fs.readFileSync('C:/Mis_Proyectos(github)/malet-n/original_Contact.jsx', 'utf8');
let newContact = `import React, { useState } from 'react';

function Contact() {
    const [phone, setPhone] = useState('+57');
    const [status, setStatus] = useState('');

    const handlePhoneInput = (e) => {
        let value = e.target.value;
        if (!value.startsWith('+57')) value = '+57' + value.replace(/^\+57/, '');
        setPhone(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
            if (response.ok) {
                setStatus('¡Mensaje enviado con éxito!');
                form.reset();
                setPhone('+57');
            } else {
                setStatus('Hubo un error al enviar el mensaje.');
            }
        } catch (error) {
            setStatus('Error de conexión.');
        }
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section className="contact" id="contact">
            <article className="content">
                <header className="title"><span>Contacto</span></header>
                
                <section className="contact-text" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>¿Tiene algún proyecto?</h3>
                    <p style={{ color: '#ccc', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        ¿Estás buscando dar vida a tu próximo proyecto? ¡Estás en el lugar correcto! Como desarrollador apasionado y dedicado, me encanta transformar ideas en realidad. Si te gusta mi trabajo y tienes un proyecto en mente, no dudes en contactarme. ¡Hagamos algo grandioso juntos!
                    </p>
                </section>

                <form className="contact-form minimalist-form" action="https://formsubmit.co/ajax/romerojesusdavid76@gmail.com" method="POST" onSubmit={handleSubmit}>
                    {status && (
                        <div className="status-message" style={{ color: status.includes('éxito') ? 'var(--primary-color)' : '#ff4d4d', textAlign: 'center', marginBottom: '1rem' }}>
                            {status}
                        </div>
                    )}
                    <fieldset>
                        <legend className="sr-only">Formulario de Contacto</legend>
                        <div className="input-group">
                            <label htmlFor="fullname" className="sr-only">Nombres y Apellidos</label>
                            <input type="text" id="fullname" name="fullname" placeholder="Nombres y Apellidos" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email" className="sr-only">Correo Electrónico</label>
                            <input type="email" id="email" name="email" placeholder="Correo Electrónico" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone" className="sr-only">Número de Teléfono</label>
                            <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneInput} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="affair" className="sr-only">Asunto</label>
                            <input type="text" id="affair" name="affair" placeholder="Asunto" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="message" className="sr-only">Mensaje</label>
                            <textarea id="message" name="message" placeholder="Mensaje" rows="4" required></textarea>
                        </div>
                        <input type="hidden" name="_next" value="https://lucent-kitsune-13784e.netlify.app" />
                        <input type="hidden" name="_captcha" value="false" />
                        <button type="submit" className="cta-btn animated-btn">Enviar</button>
                    </fieldset>
                </form>
            </article>
        </section>
    );
}

export default Contact;
`;
fs.writeFileSync('C:/Mis_Proyectos(github)/malet-n/src/components/sections/Contact.jsx', newContact, 'utf8');

// Restore Projects.jsx
const origProjects = fs.readFileSync('C:/Mis_Proyectos(github)/malet-n/original_Projects.jsx', 'utf8');
// I will parse the original projects array using regex or just extract it
const projectsMatch = origProjects.match(/const projects = \[([\s\S]*?)\]\n\n/);
let projectsDataText = projectsMatch ? projectsMatch[1] : '';

let newProjects = `import React, { useRef } from 'react';

function Projects() {
    const projects = [${projectsDataText}];

    return (
        <section className="projects" id="projects">
            <article className="content">
                <header className="title"><span>Proyectos & Experiencia</span></header>
                <div className="projects-grid">
                    {projects.map((proj, idx) => (
                        <figure className="project-card" key={idx}>
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className="project-img-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '2rem' }}>
                                    <i className={proj.icon} style={{ fontSize: '4rem', color: 'var(--primary-color)' }}></i>
                                </div>
                                <figcaption className="project-info" style={{ flexGrow: 1 }}>
                                    <h3>{proj.title}</h3>
                                    <p>{proj.description}</p>
                                    <div className="project-tags">
                                        {proj.badges.map(t => <span key={t} className="tag">{t}</span>)}
                                    </div>
                                </figcaption>
                            </a>
                        </figure>
                    ))}
                </div>
            </article>
        </section>
    );
}

export default Projects;
`;
fs.writeFileSync('C:/Mis_Proyectos(github)/malet-n/src/components/sections/Projects.jsx', newProjects, 'utf8');

// Restore Skills.jsx
const origSkills = fs.readFileSync('C:/Mis_Proyectos(github)/malet-n/original_Skills.jsx', 'utf8');
const skillsMatch = origSkills.match(/const skills = \[([\s\S]*?)\]\n/);
let skillsDataText = skillsMatch ? skillsMatch[1] : '';

let newSkills = `import React from 'react';

function Skills() {
    const skills = [${skillsDataText}];

    return (
        <section className="skills" id="skills">
            <article className="content">
                <header className="title"><span>Mis habilidades</span></header>
                <div className="skills-bento">
                    <section className="skills-intro">
                        <h3>Habilidades Técnicas</h3>
                        <p>
                            Mis habilidades técnicas cubren una variedad de áreas, desde la creación de interfaces interactivas hasta la programación del lado del servidor y la gestión de bases de datos. Siempre estoy buscando aprender nuevas tecnologías y herramientas.
                        </p>
                    </section>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <figure className="skill-card tilt-card" key={index} style={{ padding: '1rem', textAlign: 'center' }}>
                                <h4 style={{ margin: 0 }}>{skill.name}</h4>
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
fs.writeFileSync('C:/Mis_Proyectos(github)/malet-n/src/components/sections/Skills.jsx', newSkills, 'utf8');

console.log("Restored original data in minimalist components");
