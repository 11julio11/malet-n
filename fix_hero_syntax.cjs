const fs = require('fs');
const heroPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/sections/Hero.jsx';

let content = fs.readFileSync(heroPath, 'utf8');

// Fix 1: <div className="text-3..." needs to be closed with </div> instead of </h2> if it didn't change to h2.
// Actually, let's just make it an <h2> properly.
content = content.replace(/<div className="text-3(.*?)>/, '<h2 className="text-3$1>');
content = content.replace(/\{typedText\}<span className="typing-cursor"><\/span>\s*<\/div>/, '{typedText}<span className="typing-cursor"></span>\n                    </h2>');

// Fix 2: terminal-window div should be a figure since it closes with </figure>
content = content.replace(/<div className="terminal-window tilt-card"/, '<figure className="terminal-window tilt-card"');

// Fix 3: terminal-header div to header
content = content.replace(/<div className="terminal-header">/, '<header className="terminal-header">');
content = content.replace(/<\/div>\s*<div className="terminal-body">/, '</header>\n                    <section className="terminal-body">');
content = content.replace(/<div className="terminal-buttons">/, '<nav className="terminal-buttons">');
content = content.replace(/<\/span>\s*<\/div>\s*<div className="terminal-title">/, '</span>\n                        </nav>\n                        <span className="terminal-title">');

// Fix 4: terminal-body div to section
content = content.replace(/<div className="terminal-body">/, '<section className="terminal-body">');
// Find the end of terminal body which is right before </figure>
content = content.replace(/<\/div>\s*<\/figure>/, '</section>\n                </figure>');

fs.writeFileSync(heroPath, content, 'utf8');
console.log("Hero.jsx syntax fixed!");
