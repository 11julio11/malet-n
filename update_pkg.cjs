const fs = require('fs');
const pkgPath = 'C:/Mis_Proyectos(github)/malet-n/package.json';

if (fs.existsSync(pkgPath)) {
    let pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    
    // Check if scripts exist, if not create
    if (!pkg.scripts) pkg.scripts = {};
    
    // Add lint and format scripts
    pkg.scripts['lint'] = 'eslint "src/**/*.{js,jsx}"';
    pkg.scripts['lint:fix'] = 'eslint "src/**/*.{js,jsx}" --fix';
    pkg.scripts['format'] = 'prettier --write "src/**/*.{js,jsx,css,md}"';
    
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');
    console.log("Added lint and format scripts to package.json");
} else {
    console.log("package.json not found!");
}
