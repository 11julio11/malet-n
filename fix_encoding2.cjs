const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Mis_Proyectos(github)/malet-n/src/components';
const filesToFix = [
    path.join(srcDir, 'sections/Hero.jsx'),
    path.join(srcDir, 'sections/About.jsx'),
    path.join(srcDir, 'ui/ArchitectureModal.jsx')
];

filesToFix.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/m\uFFFD+s c\uFFFD+digo/g, 'más código');
        content = content.replace(/Separaci\uFFFD+n/g, 'Separación');
        content = content.replace(/Dise\uFFFD+o/g, 'Diseño');
        content = content.replace(/auditor\uFFFD+a/g, 'auditoría');
        content = content.replace(/informaci\uFFFD+n/g, 'información');
        content = content.replace(/l\uFFFD+gica/g, 'lógica');
        content = content.replace(/automatizaci\uFFFD+n/g, 'automatización');
        content = content.replace(/versi\uFFFD+n/g, 'versión');
        content = content.replace(/soluci\uFFFD+n/g, 'solución');
        // Fallback genérico para otros acentos rotos (generalmente es 'í' o 'ó')
        content = content.replace(/\uFFFD/g, 'í'); 
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed encodings in ${path.basename(file)}`);
    }
});
