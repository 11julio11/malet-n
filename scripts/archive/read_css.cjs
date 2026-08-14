const fs = require('fs');
const content = fs.readFileSync('C:/Mis_Proyectos(github)/malet-n/src/index.css', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(0, 200).join('\n'));
