const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Mis_Proyectos(github)/malet-n/src/components';
const filesToFix = [
    path.join(srcDir, 'sections/Hero.jsx'),
    path.join(srcDir, 'sections/About.jsx'),
    path.join(srcDir, 'ui/ArchitectureModal.jsx')
];

// Reemplazos comunes
const replacements = {
    'ms cdigo': 'más código',
    'Separacin': 'Separación',
    'Diseo': 'Diseño',
    'auditora': 'auditoría',
    'informacin': 'información',
    'lgica': 'lógica',
    'automatizacin': 'automatización',
    '': 'á' // Fallback genérico, aunque es riesgoso, mejor hacer replace exacto primero
};

filesToFix.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/m\ufffd+s c\ufffd+digo/g, 'más código');
        content = content.replace(/Separaci\ufffd+n/g, 'Separación');
        content = content.replace(/Dise\ufffd+o/g, 'Diseño');
        content = content.replace(/auditor\ufffd+a/g, 'auditoría');
        content = content.replace(/informaci\ufffd+n/g, 'información');
        content = content.replace(/l\ufffd+gica/g, 'lógica');
        content = content.replace(/automatizaci\ufffd+n/g, 'automatización');
        content = content.replace(/versi\ufffd+n/g, 'versión');
        content = content.replace(/soluci\ufffd+n/g, 'solución');
        content = content.replace(//g, 'í'); // Any leftover mostly was 'í' or 'ó', let's just log if any exist
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed encodings in ${path.basename(file)}`);
    }
});

