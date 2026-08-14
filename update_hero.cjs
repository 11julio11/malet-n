const fs = require('fs');

// 1. Update Hero.jsx classes
const heroPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/Hero.jsx';
let heroCode = fs.readFileSync(heroPath, 'utf8');

heroCode = heroCode.replace(
    /<h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter mb-4 text-glow">/,
    '<h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter mb-4 text-glow hero-text-animate hero-text-delay-1">'
);

heroCode = heroCode.replace(
    /<p className="text-xl md:text-2xl text-slate-400 font-mono mb-8">/,
    '<p className="text-xl md:text-2xl text-slate-400 font-mono mb-8 hero-text-animate hero-text-delay-2">'
);

heroCode = heroCode.replace(
    /className="px-8 py-3 bg-emerald-500\/10 border border-emerald-500\/50 text-emerald-400 rounded hover:bg-emerald-500\/20 transition-all font-mono"/,
    'className="px-8 py-3 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 rounded transition-all font-mono animated-btn"'
);

fs.writeFileSync(heroPath, heroCode);
console.log("Hero.jsx updated with animation classes.");

// 2. Update MatrixBackground.jsx
const matrixPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/MatrixBackground.jsx';
if (fs.existsSync(matrixPath)) {
    let matrixCode = fs.readFileSync(matrixPath, 'utf8');

    // Change to bright green and slow it down
    matrixCode = matrixCode.replace(
        /ctx\.fillStyle = '#0f0';/g,
        "ctx.fillStyle = '#39FF14';"
    );
    matrixCode = matrixCode.replace(
        /ctx\.fillStyle = 'rgba\(0, 255, 0, 1\)';/g,
        "ctx.fillStyle = '#39FF14';"
    );
    // Smooth out drop updates (maybe change the random drop reset)
    matrixCode = matrixCode.replace(
        /if \(drops\[i\] \* fontSize > canvas\.height && Math\.random\(\) > 0\.975\) \{/,
        "if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {"
    );

    fs.writeFileSync(matrixPath, matrixCode);
    console.log("MatrixBackground.jsx updated to bright green.");
}
