const fs = require('fs');
const heroPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/Hero.jsx';
let heroCode = fs.readFileSync(heroPath, 'utf8');

heroCode = heroCode.replace(/href="#projects"/g, 'href="#architecture"');
heroCode = heroCode.replace(/href="#services"/g, 'href="#architecture"');

fs.writeFileSync(heroPath, heroCode);
console.log("Hero button points to #architecture");
