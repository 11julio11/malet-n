import React from 'react';

const ArchitectureModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <dialog open className="arch-modal-overlay" onClick={onClose} style={{ display: 'flex' }}>
            <article className="arch-modal-content tilt-card" onClick={e => e.stopPropagation()} style={{ width: '90vw', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', margin: 'auto' }}>
                <header className="terminal-header">
                    <nav className="terminal-buttons">
                        <button className="terminal-btn btn-red" onClick={onClose} style={{cursor: 'pointer', border: 'none'}} aria-label="Close"></button>
                        <span className="terminal-btn btn-yellow"></span>
                        <span className="terminal-btn btn-green"></span>
                    </nav>
                    <span className="terminal-title">~/docs/architecture-overview.ts</span>
                </header>
                <section className="arch-modal-body">
                    
                    <h2 className="glitch-hover" data-text="Clean Architecture">Clean Architecture</h2>
                    <p className="arch-desc">> Separaci�n de responsabilidades y capas independientes.</p>
                    <figure className="arch-details" style={{marginBottom: '2rem'}}>
                        <div className="code-line"><span className="line-num">1</span><span><span className="code-keyword">import</span> { '{ CoreBusinessRules }' } <span className="code-keyword">from</span> <span className="code-string">"@domain"</span>;</span></div>
                        <div className="code-line"><span className="line-num">2</span><span></span></div>
                        <div className="code-line"><span className="line-num">3</span><span><span className="code-comment">// Aislamiento completo del framework y UI</span></span></div>
                        <div className="code-line"><span className="line-num">4</span><span><span className="code-keyword">class</span> UseCase { '{' }</span></div>
                        <div className="code-line"><span className="line-num">5</span><span style={{paddingLeft:'20px'}}><span className="code-keyword">execute</span>(repo: Repository) { '{' }</span></div>
                        <div className="code-line"><span className="line-num">6</span><span style={{paddingLeft:'40px'}}><span className="code-keyword">return</span> repo.saveData();</span></div>
                        <div className="code-line"><span className="line-num">7</span><span style={{paddingLeft:'20px'}}>{ '}' }</span></div>
                        <div className="code-line"><span className="line-num">8</span><span>{ '}' }</span></div>
                    </figure>

                    <h2 className="glitch-hover" data-text="Domain-Driven Design">Domain-Driven Design</h2>
                    <p className="arch-desc">> Modelado profundo del negocio en el c�digo.</p>
                    <figure className="arch-details" style={{marginBottom: '2rem'}}>
                        <div className="code-line"><span className="line-num">1</span><span><span className="code-comment">// Bounded Contexts y Ubiquitous Language</span></span></div>
                        <div className="code-line"><span className="line-num">2</span><span><span className="code-keyword">const</span> aggregateRoot = <span className="code-keyword">new</span> Aggregate();</span></div>
                        <div className="code-line"><span className="line-num">3</span><span>aggregateRoot.applyEvent(<span className="code-string">"EntityCreated"</span>);</span></div>
                    </figure>

                    <h2 className="glitch-hover" data-text="Sistemas Core & ERP">Sistemas Core & ERP</h2>
                    <p className="arch-desc">> Dise�o para alta transaccionalidad y consistencia (ACID).</p>
                    <figure className="arch-details">
                        <div className="code-line"><span className="line-num">1</span><span><span className="code-keyword">async function</span> processTransaction() { '{' }</span></div>
                        <div className="code-line"><span className="line-num">2</span><span style={{paddingLeft:'20px'}}><span className="code-keyword">await</span> db.transaction(<span className="code-keyword">async</span> (trx) => { '{' }</span></div>
                        <div className="code-line"><span className="line-num">3</span><span style={{paddingLeft:'40px'}}><span className="code-comment">// Bloqueo optimista / pesimista y logs de auditor�a</span></span></div>
                        <div className="code-line"><span className="line-num">4</span><span style={{paddingLeft:'40px'}}><span className="code-keyword">await</span> updateBalances(trx);</span></div>
                        <div className="code-line"><span className="line-num">5</span><span style={{paddingLeft:'20px'}}>{ '}' });</span></div>
                        <div className="code-line"><span className="line-num">6</span><span>{ '}' }</span></div>
                    </figure>

                </section>
            </article>
        </dialog>
    );
};

export default ArchitectureModal;
