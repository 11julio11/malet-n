const fs = require('fs');

const modalPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/ArchitectureModal.jsx';
const cssPath = 'C:/Mis_Proyectos(github)/malet-n/src/index.css';

console.log("=== ArchitectureModal.jsx ===");
console.log(fs.readFileSync(modalPath, 'utf8'));

console.log("\n=== index.css ===");
console.log(fs.readFileSync(cssPath, 'utf8'));
