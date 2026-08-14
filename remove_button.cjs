const fs = require('fs');

const heroPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/Hero.jsx';
let heroCode = fs.readFileSync(heroPath, 'utf8');

// Remove the button
heroCode = heroCode.replace(
    /<a href="#projects" className="cta-btn glitch-hover animated-btn" data-text="Explorar Arquitecturas">\s*Explorar Arquitecturas\s*<\/a>/,
    ''
);

fs.writeFileSync(heroPath, heroCode, 'utf8');
console.log("Button removed.");
