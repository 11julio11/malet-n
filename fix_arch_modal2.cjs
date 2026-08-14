const fs = require('fs');
const path = 'C:/Mis_Proyectos(github)/malet-n/src/components/ui/ArchitectureModal.jsx';

if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Fix > characters inside text by replacing them with &gt;
    content = content.replace(/> Separaci\uFFFD+n/g, '&gt; Separación');
    content = content.replace(/> Separaci\uFFFDn/g, '&gt; Separación');
    content = content.replace(/> Dise\uFFFD+o/g, '&gt; Diseño');
    content = content.replace(/> Dise\uFFFDo/g, '&gt; Diseño');
    
    // Just replace '> ' inside paragraph tags
    content = content.replace(/<p className="arch-desc">> /g, '<p className="arch-desc">&gt; ');
    
    fs.writeFileSync(path, content, 'utf8');
    console.log("Fixed ArchitectureModal.jsx");
}
