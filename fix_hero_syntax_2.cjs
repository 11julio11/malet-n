const fs = require('fs');
const heroPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/sections/Hero.jsx';

let content = fs.readFileSync(heroPath, 'utf8');

// Fix 1: <div className="text-3... -> <h2 className="text-3...
content = content.replace(/<div className="text-3/g, '<h2 className="text-3');

// Fix 2: </div> at end of span -> </span>
content = content.replace(/<span className="terminal-title">(.*?)<\/div>/g, '<span className="terminal-title">$1</span>');

fs.writeFileSync(heroPath, content, 'utf8');
console.log("Fixed JSX syntax in Hero.jsx");
