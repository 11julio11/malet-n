import React from 'react';

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
                    <p className="arch-desc">> Separaci�n de responsabilidades y capas independientes.</p>
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
                    <p className="arch-desc">> Modelado profundo del negocio en el c�digo.</p>
                    <div className="arch-details" style={{marginBottom: '2rem'}}>
                        <div className="code-line"><span className="line-num">1</span><span><span className="code-comment">// Bounded Contexts y Ubiquitous Language</span></span></div>
                        <div className="code-line"><span className="line-num">2</span><span><span className="code-keyword">const</span> aggregateRoot = <span className="code-keyword">new</span> Aggregate();</span></div>
                        <div className="code-line"><span className="line-num">3</span><span>aggregateRoot.applyEvent(<span className="code-string">"EntityCreated"</span>);</span></div>
                    </div>

                    <h2 className="glitch-hover" data-text="Sistemas Core & ERP">Sistemas Core & ERP</h2>
                    <p className="arch-desc">> Dise�o para alta transaccionalidad y consistencia (ACID).</p>
                    <div className="arch-details">
                        <div className="code-line"><span className="line-num">1</span><span><span className="code-keyword">async function</span> processTransaction() { '{' }</span></div>
                        <div className="code-line"><span className="line-num">2</span><span style={{paddingLeft:'20px'}}><span className="code-keyword">await</span> db.transaction(<span className="code-keyword">async</span> (trx) => { '{' }</span></div>
                        <div className="code-line"><span className="line-num">3</span><span style={{paddingLeft:'40px'}}><span className="code-comment">// Bloqueo optimista / pesimista y logs de auditor�a</span></span></div>
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
