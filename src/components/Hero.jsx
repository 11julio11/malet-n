function Hero() {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <div className="text">
                    <video src="/video/primer video.mp4" autoPlay muted loop></video>
                    <div className="text-one">{"{ profile: 'active', user: 'David Julio R.' }"}</div>
                    <div className="text-two">Junior Developer</div>
                    <div className="text-three">Formado en Desarrollo Frontend & Backend</div>
                    <div className="text-four">En constante crecimiento y apasionado por resolver retos técnicos.</div>
                    <div className="hud-circle"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
