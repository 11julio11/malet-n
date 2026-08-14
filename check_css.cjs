const fs = require('fs');
const css = fs.readFileSync('C:/Mis_Proyectos(github)/malet-n/src/index.css', 'utf8');
const lines = css.split('\n');

let capturing = false;
let output = [];
lines.forEach(line => {
    if (line.includes('.about-details') || line.includes('.left') || line.includes('.right') || line.includes('.about ')) {
        capturing = true;
    }
    if (capturing) {
        output.push(line);
        if (line.trim() === '}') capturing = false;
    }
});

console.log(output.join('\n'));
