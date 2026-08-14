const fs = require('fs');
const content = fs.readFileSync('C:/Mis_Proyectos(github)/malet-n/src/components/sections/Hero.jsx', 'utf8');
content.split('\n').forEach((line, index) => {
    console.log(`${index + 1}: ${line}`);
});
