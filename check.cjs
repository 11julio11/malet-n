const fs = require('fs');
const content = fs.readFileSync('C:/Mis_Proyectos(github)/malet-n/src/components/sections/Contact.jsx', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
    if (line.includes('replace(')) {
        console.log(`${i+1}: ${line}`);
    }
});
