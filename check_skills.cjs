const fs = require('fs');
if (fs.existsSync('C:/Mis_Proyectos(github)/malet-n/src/components/sections/Skills.jsx')) {
    console.log("=== Skills.jsx ===");
    console.log(fs.readFileSync('C:/Mis_Proyectos(github)/malet-n/src/components/sections/Skills.jsx', 'utf8'));
}
