const fs = require('fs');

// 1. Fix About.jsx
const aboutPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/About.jsx';
let aboutCode = `import React from 'react';

function About() {
    return (
        <section className="about" id="about">
            <div className="content">
                <div className="title"><span>Sobre mi</span></div>
                <div className="about-details">
                    <div className="left">
                        <img src="/img/profile2.jpg" alt="David Julio R." style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", display: "block" }} />
                    </div>
                    <div className="right">
                        <div className="topic scroll-animate">Desarrollador Backend con Python y Go</div>
                        <p className="scroll-animate">
                            Enfocado en la implementación de lógica de negocio, automatización de procesos y trabajo con
                            bases de datos PostgreSQL. Cuento con experiencia real en el desarrollo y mantenimiento de
                            sistemas empresariales del sector financiero (como LINIX ERP y sistemas Core Banking), aplicando
                            siempre buenas prácticas y Clean Architecture.
                            <br/><br/>
                            Complemento mi perfil backend con conocimientos sólidos en Frontend (React, TypeScript),
                            lo que me permite participar en soluciones web completas de extremo a extremo. Me caracterizo
                            por mi capacidad de adaptación, aprendizaje continuo y trabajo colaborativo en entornos reales.
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

// 2. Remove ArchitectureSection from App.jsx
const appPath = 'C:/Mis_Proyectos(github)/malet-n/src/App.jsx';
let appCode = fs.readFileSync(appPath, 'utf8');
appCode = appCode.replace(/import ArchitectureSection from '\.\/components\/ArchitectureSection';\n?/g, '');
appCode = appCode.replace(/<ArchitectureSection \/>\n?/g, '');
fs.writeFileSync(appPath, appCode, 'utf8');

// 3. Update ArchitectureModal to show all info
const modalPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/ArchitectureModal.jsx';
const modalCode = `import React from 'react';

const ArchitectureModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="arch-modal-overlay" onClick={onClose}>
            <div className="arch-modal-content tilt-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '800px', width: '95%', maxHeight: '90vh', overflowY: 'auto' }}>
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <span className="terminal-btn btn-red" onClick={onClose} style={{cursor: 'pointer'}}></span>
                        <span className="terminal-btn btn-yellow"></span>
                        <span className="terminal-btn btn-green"></span>
                    </div>
                    <div className="terminal-title">~/docs/architecture-overview.ts</div>
                </div>
                <div className="arch-modal-body">
                    
                    <h2 className="glitch-hover" data-text="Clean Architecture">Clean Architecture</h2>
                    <p className="arch-desc">> Separación de responsabilidades y capas independientes.</p>
                    <div className="arch-details" style={{marginBottom: '2rem'}}>
                        <div className="code-line"><span className="line-num">1</span><span><span className="code-keyword">import</span> { '{ CoreBusinessRules }' } <span className="code-keyword">from</span> <span className="code-string">"@domain"</span>;</span></div>
                        <div className="code-line"><span className="line-num">2</span><span></span></div>
                        <div className="code-line"><span className="line-num">3</span><span><span className="code-comment">// Aislamiento completo del framework y UI</span></span></div>
                        <div className="code-line"><span className="line-num">4</span><span><span className="code-keyword">class</span> UseCase { '{' }</span></div>
                        <div className="code-line"><span className="line-num">5</span><span style={{paddingLeft:'20px'}}><span className="code-keyword">execute</span>(repo: Repository) { '{' }</span></div>
                        <div className="code-line"><span className="line-num">6</span><span style={{paddingLeft:'40px'}}><span className="code-keyword">return</span> repo.saveData();</span></div>
                        <div className="code-line"><span className="line-num">7</span><span style={{paddingLeft:'20px'}}>{ '}' }</span></div>
                        <div className="code-line"><span className="line-num">8</span><span>{ '}' }</span></div>
                    </div>

                    <h2 className="glitch-hover" data-text="Domain-Driven Design">Domain-Driven Design</h2>
                    <p className="arch-desc">> Modelado profundo del negocio en el código.</p>
                    <div className="arch-details" style={{marginBottom: '2rem'}}>
                        <div className="code-line"><span className="line-num">1</span><span><span className="code-comment">// Bounded Contexts y Ubiquitous Language</span></span></div>
                        <div className="code-line"><span className="line-num">2</span><span><span className="code-keyword">const</span> aggregateRoot = <span className="code-keyword">new</span> Aggregate();</span></div>
                        <div className="code-line"><span className="line-num">3</span><span>aggregateRoot.applyEvent(<span className="code-string">"EntityCreated"</span>);</span></div>
                    </div>

                    <h2 className="glitch-hover" data-text="Sistemas Core & ERP">Sistemas Core & ERP</h2>
                    <p className="arch-desc">> Diseño para alta transaccionalidad y consistencia (ACID).</p>
                    <div className="arch-details">
                        <div className="code-line"><span className="line-num">1</span><span><span className="code-keyword">async function</span> processTransaction() { '{' }</span></div>
                        <div className="code-line"><span className="line-num">2</span><span style={{paddingLeft:'20px'}}><span className="code-keyword">await</span> db.transaction(<span className="code-keyword">async</span> (trx) => { '{' }</span></div>
                        <div className="code-line"><span className="line-num">3</span><span style={{paddingLeft:'40px'}}><span className="code-comment">// Bloqueo optimista / pesimista y logs de auditoría</span></span></div>
                        <div className="code-line"><span className="line-num">4</span><span style={{paddingLeft:'40px'}}><span className="code-keyword">await</span> updateBalances(trx);</span></div>
                        <div className="code-line"><span className="line-num">5</span><span style={{paddingLeft:'20px'}}>{ '}' });</span></div>
                        <div className="code-line"><span className="line-num">6</span><span>{ '}' }</span></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ArchitectureModal;
`;
fs.writeFileSync(modalPath, modalCode, 'utf8');

// 4. Update Hero.jsx to handle the modal
const heroPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/Hero.jsx';
const heroCode = `import React, { useState, useEffect } from 'react';
import ArchitectureModal from './ArchitectureModal';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "BACKEND ENGINEER • FULL STACK DEVELOPER";
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                <div style={{ padding: '2rem' }}>
                    <div className="text-1" style={{ fontSize: '1.2rem', color: '#8b949e', marginBottom: '0.5rem', fontWeight: 600 }}>Hola, soy</div>
                    <h1 className="text-2 text-gradient glitch-hover hero-text-animate hero-text-delay-1" data-text="David Julio R." style={{ 
                        fontSize: '4.5rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: '1.1', margin: '0 0 1.5rem 0'
                    }}>
                        David Julio R.
                    </h1>
                    <div className="text-3 hero-text-animate hero-text-delay-2" style={{ 
                        fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'monospace'
                    }}>
                        {typedText}<span className="typing-cursor"></span>
                    </div>

                    <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="cta-btn glitch-hover animated-btn" 
                        data-text="Explorar Arquitecturas"
                        style={{ cursor: 'pointer', background: 'transparent', outline: 'none' }}
                    >
                        Explorar Arquitecturas
                    </button>
                </div>
            </div>
            <ArchitectureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}

export default Hero;
`;
fs.writeFileSync(heroPath, heroCode, 'utf8');

console.log("Fixed accents and refactored modal to open from Hero button.");
