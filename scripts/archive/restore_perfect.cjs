const fs = require('fs');

// 1. Remove ArchitectureSection completely
const archSecPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/ArchitectureSection.jsx';
if (fs.existsSync(archSecPath)) {
    fs.unlinkSync(archSecPath);
}

// 2. Clean App.jsx properly
const appPath = 'C:/Mis_Proyectos(github)/malet-n/src/App.jsx';
let appCode = fs.readFileSync(appPath, 'utf8');
appCode = appCode.replace(/import ArchitectureSection from ['"].\/components\/ArchitectureSection['"];?\s*/g, '');
appCode = appCode.replace(/<ArchitectureSection \/>\s*/g, '');
fs.writeFileSync(appPath, appCode, 'utf8');

// 3. Rewrite Hero.jsx to have the terminal and the button pointing to #projects
const heroPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/Hero.jsx';
const heroCode = `import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "BACKEND ENGINEER � FULL STACK DEVELOPER";

    useEffect(() => {
        let i = 0;
        const typingId = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(typingId);
            }
        }, 100);
        return () => clearInterval(typingId);
    }, []);

    return (
        <section className="home" id="home" style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="hero-grid">
                
                {/* Left Side: Impact Title & CTA */}
                <div style={{ padding: '2rem' }}>
                    <div className="text-1" style={{ fontSize: '1.2rem', color: '#8b949e', marginBottom: '0.5rem', fontWeight: 600 }}>Hola, soy</div>
                    
                    <h1 className="text-2 text-gradient glitch-hover hero-text-animate hero-text-delay-1" data-text="David Julio R." style={{ 
                        fontSize: '4.5rem', 
                        fontWeight: '900', 
                        letterSpacing: '-0.04em',
                        lineHeight: '1.1',
                        margin: '0 0 1.5rem 0'
                    }}>
                        David Julio R.
                    </h1>
                    
                    <div className="text-3 hero-text-animate hero-text-delay-2" style={{ 
                        fontSize: '1.2rem', 
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        fontFamily: 'monospace'
                    }}>
                        {typedText}<span className="typing-cursor"></span>
                    </div>

                    <a href="#projects" className="cta-btn glitch-hover animated-btn" data-text="Explorar Arquitecturas">
                        Explorar Arquitecturas
                    </a>
                </div>

                {/* Right Side: Terminal / Philosophy */}
                <div className="terminal-window tilt-card" style={{ maxWidth: '600px', width: '100%' }}>
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <span className="terminal-btn btn-red"></span>
                            <span className="terminal-btn btn-yellow"></span>
                            <span className="terminal-btn btn-green"></span>
                        </div>
                        <div className="terminal-title">~/philosophy.ts</div>
                    </div>
                    <div className="terminal-body">
                        <div className="code-line">
                            <span className="line-num">1</span>
                            <span><span className="code-keyword">import</span> { '{ CleanArchitecture, DDD }' } <span className="code-keyword">from</span> <span className="code-string">'@principles'</span>;</span>
                        </div>
                        <div className="code-line">
                            <span className="line-num">2</span>
                            <span></span>
                        </div>
                        <div className="code-line">
                            <span className="line-num">3</span>
                            <span><span className="code-keyword">class</span> EngineerProfile { '{' }</span>
                        </div>
                        <div className="code-line">
                            <span className="line-num">4</span>
                            <span style={{ paddingLeft: '20px' }}><span className="code-keyword">constructor</span>() { '{' }</span>
                        </div>
                        <div className="code-line">
                            <span className="line-num">5</span>
                            <span style={{ paddingLeft: '40px' }}><span className="code-comment">// "El mejor software no es el que tiene mas codigo,"</span></span>
                        </div>
                        <div className="code-line">
                            <span className="line-num">6</span>
                            <span style={{ paddingLeft: '40px' }}><span className="code-comment">// "sino el que resuelve mejor los problemas del negocio."</span></span>
                        </div>
                        <div className="code-line">
                            <span className="line-num">7</span>
                            <span style={{ paddingLeft: '40px' }}>this.focus = [<span className="code-string">'Escalabilidad'</span>, <span className="code-string">'Clean Code'</span>, <span className="code-string">'Alto Rendimiento'</span>];</span>
                        </div>
                        <div className="code-line">
                            <span className="line-num">8</span>
                            <span style={{ paddingLeft: '20px' }}>{ '}' }</span>
                        </div>
                        <div className="code-line">
                            <span className="line-num">9</span>
                            <span>{ '}' }</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero;
`;
fs.writeFileSync(heroPath, heroCode, 'utf8');
console.log("Restored perfectly");
