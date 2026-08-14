import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <article className="content">
        <header className="title">
          <span>Sobre m&iacute;</span>
        </header>
        <figure className="about-details">
          <aside className="left">
            <img
              src="/img/profile2.jpg"
              alt="Jesus David Julio Romero."
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
                display: 'block',
              }}
              loading="lazy"
            />
          </aside>
          <section className="right">
            <div className="topic scroll-animate">Backend Devoloper</div>
            <p className="scroll-animate">
              Enfocado en la implementaci&oacute;n de l&oacute;gica de negocio,
              automatizaci&oacute;n de procesos y trabajo con bases de datos PostgreSQL. Cuento con
              experiencia real en el desarrollo y mantenimiento de sistemas empresariales del sector
              financiero (como LINIX ERP y sistemas Core Banking), aplicando siempre buenas
              pr&aacute;cticas y Clean Architecture.
              <br />
              <br />
              Complemento mi perfil backend con conocimientos s&oacute;lidos en Frontend (React,
              TypeScript), lo que me permite participar en soluciones web completas de extremo a
              extremo. Me caracterizo por mi capacidad de adaptaci&oacute;n, aprendizaje continuo y
              trabajo colaborativo en entornos reales.
            </p>
          </section>
        </figure>
      </article>
    </section>
  );
}

export default About;
