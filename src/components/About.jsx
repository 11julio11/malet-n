function About() {
    return (
        <section className="about" id="about">
            <div className="content">
                <div className="title"><span>Sobre mi</span></div>
                <div className="about-details">
                    <div className="left">
                        <img src="/img/diseño01.jpg" alt="Profile" />
                    </div>
                    <div className="right">
                        <div className="topic">El desarrollo web es mi pasión</div>
                        <p>
                            Soy un desarrollador web full-stack con experiencia en la creación de aplicaciones modernas
                            utilizando React, TypeScript y Tailwind CSS. Mi expertise abarca desde el diseño de interfaces
                            responsivas hasta la implementación de backends con PostgreSQL y la gestión de contenedores con
                            Docker. Trabajo con herramientas profesionales como Postman e Insomnia para pruebas de API, y
                            utilizo Vite para optimizar el rendimiento de mis aplicaciones. Mi objetivo es crear productos
                            digitales escalables, eficientes y con las mejores prácticas de la industria.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
