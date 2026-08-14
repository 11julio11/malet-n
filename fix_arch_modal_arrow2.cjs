const fs = require('fs');
const path = 'C:/Mis_Proyectos(github)/malet-n/src/components/ui/ArchitectureModal.jsx';

if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    // Revert the global replace
    content = content.replace(/=&gt;/g, '=>');
    
    // Specifically target the span text:
    // <span className="code-keyword">async</span> (trx) => { '{' }
    // should become
    // <span className="code-keyword">async</span> (trx) =&gt; { '{' }
    content = content.replace(/\(trx\) =>/g, '(trx) =&gt;');
    
    fs.writeFileSync(path, content, 'utf8');
    console.log("Fixed ArchitectureModal.jsx safely");
}
