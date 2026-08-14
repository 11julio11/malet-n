const fs = require('fs');

const heroPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/sections/Hero.jsx';
const aboutPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/sections/About.jsx';

if (fs.existsSync(heroPath)) {
    console.log("=== Hero.jsx ===");
    console.log(fs.readFileSync(heroPath, 'utf8').slice(0, 1000));
}

if (fs.existsSync(aboutPath)) {
    console.log("\n=== About.jsx ===");
    console.log(fs.readFileSync(aboutPath, 'utf8').slice(0, 1000));
}
