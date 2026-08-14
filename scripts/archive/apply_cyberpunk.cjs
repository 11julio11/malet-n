const fs = require('fs');
const cssPath = 'C:/Mis_Proyectos(github)/malet-n/src/index.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Update global background and font
css = css.replace(/--bg-color: #0b1120;/g, '--bg-color: #000000;');
css = css.replace(/font-family: 'Inter', sans-serif;/g, 'font-family: "Fira Code", "Courier New", monospace;');
css = css.replace(/font-family: 'Outfit', sans-serif;/g, 'font-family: "Fira Code", "Courier New", monospace;');

// Add CRT effect and update typography
const crtStyles = `
/* --- CRT Scanlines Effect --- */
body::after {
    content: " ";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        to bottom,
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
    );
    background-size: 100% 4px;
    z-index: 9999;
    pointer-events: none;
}

/* Base texts glow */
h1, h2, h3, h4, h5, h6 {
    text-shadow: 0 0 5px rgba(57, 255, 20, 0.4);
    letter-spacing: 2px;
}
p, span, div {
    font-family: "Fira Code", "Courier New", monospace !important;
}

/* Neon Borders */
.about-details .left {
    box-shadow: 0 0 20px rgba(57, 255, 20, 0.3);
    border: 1px solid var(--primary-color);
}
.project-card {
    background: rgba(10, 20, 10, 0.8) !important;
    border: 1px solid var(--primary-color);
    box-shadow: inset 0 0 10px rgba(57, 255, 20, 0.1), 0 0 10px rgba(57, 255, 20, 0.1);
}
.project-card:hover {
    box-shadow: inset 0 0 15px rgba(57, 255, 20, 0.3), 0 0 25px rgba(57, 255, 20, 0.5);
    border-color: #00ffff;
}
.skill-card {
    border: 1px solid var(--primary-color) !important;
    background: rgba(0, 20, 0, 0.4) !important;
    box-shadow: inset 0 0 5px rgba(57, 255, 20, 0.2);
}
.skill-card:hover {
    box-shadow: 0 0 15px rgba(57, 255, 20, 0.5) !important;
    border-color: #00ffff !important;
}
`;

if (!css.includes('/* --- CRT Scanlines Effect --- */')) {
    fs.appendFileSync(cssPath, crtStyles);
} else {
    fs.writeFileSync(cssPath, css);
}

console.log("Cyberpunk styles applied to index.css");
