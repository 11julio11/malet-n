const fs = require('fs');
const path = 'C:/Mis_Proyectos(github)/malet-n/src/components/ui/ArchitectureModal.jsx';

if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Fix the > issue
    content = content.replace(/> Separacin/g, '&gt; Separación');
    content = content.replace(/> Separaci/g, '&gt; Separaci');
    content = content.replace(/> Diseo/g, '&gt; Diseño');
    content = content.replace(/> Dise/g, '&gt; Dise');
    
    // Fix remaining broken characters just in case
    content = content.replace(//g, 'ó'); // Fallback, though we should just replace the exact text
    content = content.replace(/> /g, '&gt; ');
    
    fs.writeFileSync(path, content, 'utf8');
    console.log("Fixed ArchitectureModal.jsx");
}
