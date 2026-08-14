const fs = require('fs');

const modalPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/ArchitectureModal.jsx';
const modalCode = `import React from 'react';

const ArchitectureModal = ({ isOpen, onClose, data }) => {
    if (!isOpen || !data) return null;

    return (
        <div className="arch-modal-overlay" onClick={onClose}>
            <div className="arch-modal-content tilt-card" onClick={e => e.stopPropagation()}>
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <span className="terminal-btn btn-red" onClick={onClose} style={{cursor: 'pointer'}}></span>
                        <span className="terminal-btn btn-yellow"></span>
                        <span className="terminal-btn btn-green"></span>
                    </div>
                    <div className="terminal-title">~/docs/{data.id}.ts</div>
                </div>
                <div className="arch-modal-body">
                    <h2 className="glitch-hover" data-text={data.title}>{data.title}</h2>
                    <p className="arch-desc">> {data.description}</p>
                    <div className="arch-details">
                        {data.details.map((line, i) => (
                            <div key={i} className="code-line">
                                <span className="line-num">{i + 1}</span>
                                <span>{line}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureModal;
`;

const sectionPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/ArchitectureSection.jsx';
const sectionCode = `import React, { useState } from 'react';
import ArchitectureModal from './ArchitectureModal';

const archData = [
    {
        id: 'clean-arch',
        title: 'Clean Architecture',
        description: 'Separación de responsabilidades y capas independientes.',
        details: [
            '<span className="code-keyword">import</span> { CoreBusinessRules } <span className="code-keyword">from</span> <span className="code-string">"@domain"</span>;',
            '',
            '<span className="code-comment">// Aislamiento completo del framework y UI</span>',
            '<span className="code-keyword">class</span> UseCase {',
            '  <span className="code-keyword">execute</span>(repo: Repository) {',
            '    <span className="code-keyword">return</span> repo.saveData();',
            '  }',
            '}'
        ]
    },
    {
        id: 'ddd',
        title: 'Domain-Driven Design',
        description: 'Modelado profundo del negocio en el código.',
        details: [
            '<span className="code-comment">// Bounded Contexts y Ubiquitous Language</span>',
            '<span className="code-keyword">const</span> aggregateRoot = <span className="code-keyword">new</span> Aggregate();',
            'aggregateRoot.applyEvent(<span className="code-string">"EntityCreated"</span>);',
            '',
            '<span className="code-comment">// Orientado a eventos y reglas complejas</span>'
        ]
    },
    {
        id: 'core-banking',
        title: 'Core Banking / ERP',
        description: 'Diseño para alta transaccionalidad y consistencia (ACID).',
        details: [
            '<span className="code-keyword">async function</span> processTransaction() {',
            '  <span className="code-keyword">await</span> db.transaction(<span className="code-keyword">async</span> (trx) => {',
            '    <span className="code-comment">// Bloqueo optimista / pesimista</span>',
            '    <span className="code-keyword">await</span> updateBalances(trx);',
            '    <span className="code-keyword">await</span> generateAuditLog(trx);',
            '  });',
            '}'
        ]
    }
];

const ArchitectureSection = () => {
    const [selectedArch, setSelectedArch] = useState(null);

    return (
        <section className="architecture-section" id="architecture">
            <div className="content">
                <div className="title"><span className="glitch-hover" data-text="Architecture & Backend">Architecture & Backend</span></div>
                <div className="arch-grid">
                    {archData.map(item => (
                        <div key={item.id} className="arch-card scroll-animate" onClick={() => setSelectedArch(item)}>
                            <h3>{item.title}</h3>
                            <p>>_ {item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <ArchitectureModal 
                isOpen={!!selectedArch} 
                onClose={() => setSelectedArch(null)} 
                data={selectedArch} 
            />
        </section>
    );
};

export default ArchitectureSection;
`;

fs.writeFileSync(modalPath, modalCode);
fs.writeFileSync(sectionPath, sectionCode);

const cssPath = 'C:/Mis_Proyectos(github)/malet-n/src/index.css';
let css = fs.readFileSync(cssPath, 'utf8');

const archCSS = `
/* --- Architecture Section & Modal --- */
.architecture-section {
    padding: 60px 0;
    position: relative;
    z-index: 10;
}
.arch-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}
.arch-card {
    background: rgba(10, 20, 10, 0.8);
    border: 1px solid var(--primary-color);
    padding: 2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: inset 0 0 10px rgba(57, 255, 20, 0.1);
}
.arch-card:hover {
    box-shadow: inset 0 0 15px rgba(57, 255, 20, 0.3), 0 0 25px rgba(57, 255, 20, 0.5);
    border-color: #00ffff;
    transform: translateY(-5px);
}
.arch-card h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

/* Modal Overlay */
.arch-modal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
}
.arch-modal-content {
    background: #0d1117;
    border: 1px solid #00ffff;
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
    width: 90%;
    max-width: 650px;
    border-radius: 12px;
    overflow: hidden;
}
.arch-modal-body {
    padding: 2rem;
}
.arch-modal-body h2 {
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    margin-bottom: 1rem;
}
.arch-desc {
    color: #8b949e;
    margin-bottom: 2rem;
    font-style: italic;
}
.arch-details {
    background: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
`;

if (!css.includes('/* --- Architecture Section & Modal --- */')) {
    fs.appendFileSync(cssPath, archCSS);
}

const appPath = 'C:/Mis_Proyectos(github)/malet-n/src/App.jsx';
let appCode = fs.readFileSync(appPath, 'utf8');

if (!appCode.includes('import ArchitectureSection')) {
    appCode = appCode.replace(/import About from '\.\/components\/About';/, "import About from './components/About';\nimport ArchitectureSection from './components/ArchitectureSection';");
    appCode = appCode.replace(/<Hero \/>/, "<Hero />\n      <ArchitectureSection />");
    fs.writeFileSync(appPath, appCode);
}

console.log("Arch section and modal created and linked.");
