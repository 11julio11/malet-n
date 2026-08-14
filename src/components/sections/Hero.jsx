import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'BACKEND ENGINEER � FULL STACK DEVELOPER';

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
    <section
      className="home"
      id="home"
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <article className="hero-grid">
        {/* Left Side: Impact Title & CTA */}
        <header className="hero-content">
          <p className="text-1 subtitle">Hola, soy</p>

          <h1
            className="text-2 text-gradient glitch-hover hero-text-animate hero-text-delay-1"
            data-text="Jesus David Julio Romero."
            style={{
              fontSize: '4.5rem',
              fontWeight: '900',
              letterSpacing: '-0.04em',
              lineHeight: '1.1',
              margin: '0 0 1.5rem 0',
            }}
          >
            Jesus David Julio Romero.
          </h1>

          <h2
            className="text-3 hero-text-animate hero-text-delay-2"
            style={{
              fontSize: '1.2rem',
              color: 'var(--primary-color)',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
            }}
          >
            {typedText}
            <span className="typing-cursor"></span>
          </h2>
        </header>

        {/* Right Side: Terminal / Philosophy */}
        <figure className="terminal-window tilt-card" style={{ maxWidth: '600px', width: '100%' }}>
          <header className="terminal-header">
            <nav className="terminal-buttons">
              <span className="terminal-btn btn-red"></span>
              <span className="terminal-btn btn-yellow"></span>
              <span className="terminal-btn btn-green"></span>
            </nav>
            <span className="terminal-title">~/philosophy.ts</span>
          </header>
          <section className="terminal-body">
            <div className="code-line">
              <span className="line-num">1</span>
              <span>
                <span className="code-keyword">import</span> {'{ CleanArchitecture, DDD }'}{' '}
                <span className="code-keyword">from</span>{' '}
                <span className="code-string">'@principles'</span>;
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">2</span>
              <span></span>
            </div>
            <div className="code-line">
              <span className="line-num">3</span>
              <span>
                <span className="code-keyword">class</span> EngineerProfile {'{'}
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">4</span>
              <span style={{ paddingLeft: '20px' }}>
                <span className="code-keyword">constructor</span>() {'{'}
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">5</span>
              <span style={{ paddingLeft: '40px' }}>
                <span className="code-comment">
                  // "El mejor software no es el que tiene mas codigo,"
                </span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">6</span>
              <span style={{ paddingLeft: '40px' }}>
                <span className="code-comment">
                  // "sino el que resuelve mejor los problemas del negocio."
                </span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">7</span>
              <span style={{ paddingLeft: '40px' }}>
                this.focus = [<span className="code-string">'Escalabilidad'</span>,{' '}
                <span className="code-string">'Clean Code'</span>,{' '}
                <span className="code-string">'Alto Rendimiento'</span>];
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">8</span>
              <span style={{ paddingLeft: '20px' }}>{'}'}</span>
            </div>
            <div className="code-line">
              <span className="line-num">9</span>
              <span>{'}'}</span>
            </div>
          </section>
        </figure>
      </article>
    </section>
  );
};

export default Hero;

