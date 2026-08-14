const fs = require('fs');
const path = 'C:/Mis_Proyectos(github)/malet-n/src/components/sections/Contact.jsx';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(/value\.replace\(\/\^\+57\/, ''\)/, "value.replace(/^\\+57/, '')");
fs.writeFileSync(path, content, 'utf8');
console.log("Fixed regex in Contact.jsx");
