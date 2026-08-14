const fs = require('fs');
const files = [
    'C:/Mis_Proyectos(github)/malet-n/src/components/sections/Skills.jsx',
    'C:/Mis_Proyectos(github)/malet-n/src/components/sections/Projects.jsx',
    'C:/Mis_Proyectos(github)/malet-n/src/components/sections/Contact.jsx'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file);
        // Check for UTF-16LE BOM
        if (content[0] === 0xFF && content[1] === 0xFE) {
            content = content.toString('utf16le');
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Fixed encoding for ${file}`);
        }
    }
});
