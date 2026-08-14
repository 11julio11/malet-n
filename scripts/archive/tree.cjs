const fs = require('fs');
const path = require('path');

const printTree = (dir, prefix = '') => {
    let result = '';
    try {
        const files = fs.readdirSync(dir);
        files.forEach((file, index) => {
            const filePath = path.join(dir, file);
            if (file === 'node_modules' || file === '.git' || file === 'dist') return;
            const isLast = index === files.length - 1;
            result += prefix + (isLast ? '+-- ' : '+-- ') + file + '\n';
            
            try {
                const stat = fs.statSync(filePath);
                if (stat.isDirectory()) {
                    result += printTree(filePath, prefix + (isLast ? '    ' : '¦   '));
                }
            } catch (e) {}
        });
    } catch (e) {
        result += prefix + '+-- Error reading dir\n';
    }
    return result;
};

console.log("malet-n/");
console.log(printTree('C:/Mis_Proyectos(github)/malet-n'));
