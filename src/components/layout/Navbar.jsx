import { useState, useEffect } from 'react';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
    document.body.style.overflow = isActive ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsActive(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={isSticky ? 'sticky' : ''}>
      <div className={`navbar ${isActive ? 'active' : ''}`}>
        <div className="logo">
          <a href="#home">Portfolio.</a>
        </div>
        <ul className="menu">
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contacto
            </a>
          </li>
          <div className="cancel-btn" onClick={toggleMenu}>
            <i className="fas fa-times"></i>
          </div>
        </ul>
        <div className="media-icons">
          <a
            href="https://web.facebook.com/jesus.julioromero.1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/JessDav79612323" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/jesusjulioromero/?next=https%3A%2F%2Fwww.instagram.com%2F&hl=es-es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="menu-btn" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;
