const fs = require('fs');

const heroPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/Hero.jsx';
let heroCode = fs.readFileSync(heroPath, 'utf8');

const terminalCode = `
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
`;

// Insert the terminal code right before the closing div of hero-grid
heroCode = heroCode.replace(
    /<\/div>\s*<\/div>\s*<ArchitectureModal/g,
    `</div>\n${terminalCode}\n            </div>\n            <ArchitectureModal`
);

fs.writeFileSync(heroPath, heroCode, 'utf8');
console.log("Restored terminal in Hero.jsx");
