const fs = require('fs');
const path = 'C:/Mis_Proyectos(github)/malet-n/src/components/ui/ArchitectureModal.jsx';

if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    content = content.replace(/=>/g, '=&gt;');
    fs.writeFileSync(path, content, 'utf8');
    console.log("Fixed => in ArchitectureModal.jsx");
}
