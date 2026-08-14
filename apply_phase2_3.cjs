const fs = require('fs');

// 1. Add lazy loading to About.jsx
const aboutPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/sections/About.jsx';
if (fs.existsSync(aboutPath)) {
    let content = fs.readFileSync(aboutPath, 'utf8');
    content = content.replace(/<img (.*?) \/>/g, (match, attrs) => {
        if (!attrs.includes('loading="lazy"')) {
            return `<img ${attrs} loading="lazy" />`;
        }
        return match;
    });
    fs.writeFileSync(aboutPath, content, 'utf8');
    console.log("Added loading='lazy' to About.jsx");
}

// 2. Add Skeleton CSS to index.css
const cssPath = 'C:/Mis_Proyectos(github)/malet-n/src/index.css';
if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    if (!css.includes('.skeleton')) {
        css += `\n
/* --- Skeleton Loading (Phase 1/4) --- */
.skeleton {
    background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%);
    background-size: 400% 100%;
    animation: skeleton-loading 1.5s infinite ease-in-out;
    border-radius: 4px;
}
@keyframes skeleton-loading {
    0% { background-position: 100% 50%; }
    100% { background-position: 0 50%; }
}
.skeleton-text {
    height: 1rem;
    margin-bottom: 0.5rem;
    width: 100%;
}
.skeleton-text:last-child {
    width: 80%;
}
.skeleton-box {
    height: 150px;
    width: 100%;
}
`;
        fs.writeFileSync(cssPath, css, 'utf8');
        console.log("Added Skeleton CSS to index.css");
    }
}
