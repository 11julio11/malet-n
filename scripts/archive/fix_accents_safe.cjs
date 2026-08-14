const fs = require('fs');

const aboutPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/About.jsx';
let aboutCode = `import React from 'react';

function About() {
    return (
        <section className="about" id="about">
            <div className="content">
                <div className="title"><span>Sobre m&iacute;</span></div>
                <div className="about-details">
                    <div className="left">
                        <img src="/img/profile2.jpg" alt="David Julio R." style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", display: "block" }} />
                    </div>
                    <div className="right">
                        <div className="topic scroll-animate">Desarrollador Backend con Python y Go</div>
                        <p className="scroll-animate">
                            Enfocado en la implementaci&oacute;n de l&oacute;gica de negocio, automatizaci&oacute;n de procesos y trabajo con
                            bases de datos PostgreSQL. Cuento con experiencia real en el desarrollo y mantenimiento de
                            sistemas empresariales del sector financiero (como LINIX ERP y sistemas Core Banking), aplicando
                            siempre buenas pr&aacute;cticas y Clean Architecture.
                            <br/><br/>
                            Complemento mi perfil backend con conocimientos s&oacute;lidos en Frontend (React, TypeScript),
                            lo que me permite participar en soluciones web completas de extremo a extremo. Me caracterizo
                            por mi capacidad de adaptaci&oacute;n, aprendizaje continuo y trabajo colaborativo en entornos reales.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
`;

fs.writeFileSync(aboutPath, aboutCode, 'utf8');
console.log("About.jsx rewritten with HTML entities to guarantee no encoding issues.");
